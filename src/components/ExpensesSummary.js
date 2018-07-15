import React from 'react';
import { connect } from 'react-redux';
import SelectExpensesTotal from '../selectors/expenses-total';
import SelectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary  = ({ expenseTotal, expenseCount }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const total = numeral(expenseTotal / 100).format('$0, 0.00');
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totaling {total}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = SelectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: SelectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);