import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.any,
    fetchStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  changeTableStatus(row){
    const status = row.status;
    switch (status) {
      case 'free': {row.status = 'thinking'; break;}
      case 'thinking': {row.status = 'ordered'; break;}
      case 'ordered': {row.status = 'prepared'; break;}
      case 'prepared': {row.status = 'delivered'; break;}
      case 'delivered': {row.status = 'paid'; break;}
      case 'paid': {row.status = 'free'; break;}
      default: {row.status = 'free'; break;}
    }
    const {fetchStatus} = this.props;
    fetchStatus(row);
  }

  renderActions(row){
    const status = row.status;
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => {this.changeTableStatus(row); }}>thinking</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => {this.changeTableStatus(row); }}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => {this.changeTableStatus(row); }}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => {this.changeTableStatus(row); }}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => {this.changeTableStatus(row); }}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => {this.changeTableStatus(row); }}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
