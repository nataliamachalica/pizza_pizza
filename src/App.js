import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Tables from '../src/components/views/Tables/Tables';
import TablesBooking from '../src/components/views/TablesBooking/TablesBooking';
import TablesEvents from '../src/components/views/TablesEvents/TablesEvents';
import Waiter from '../src/components/views/Waiter/WaiterContainer';
import WaiterOrder from '../src/components/views/WaiterOrder/WaiterOrder';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvents} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
