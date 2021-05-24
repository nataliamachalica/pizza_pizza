# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i evetów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
      - każda kolumna będzie jednym stolikiem
      - każdy wiersz będzie blokiem 30 min.
      - ma przypominać widoć tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
      - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów

- `/tables/booking/:id`
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwa edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
  - analogicznie do powyższej, dla eventów
- `/tables/events/new`
  - analogicznie do powyższej, dla eventów, bez początkowych informacji


# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach będzie wyświetlała stoliki
    - w kolumnach różne informacje (status stolika, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - numer stolika (edytowalny)
    - menu produktów
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia
- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

-`/kitchen`
  - wyświetlać listę zamówień w kolejności ich słożenia
  - lista musi zawierać:
    - numer stolika lub zamówienia zdalnego
    - pełne informacje dotyczące zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

