import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configrueStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'gas bill' , createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 109500, createdAt: 500 }));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 
