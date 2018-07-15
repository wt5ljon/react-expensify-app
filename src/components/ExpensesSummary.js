import React from 'react';
import { connect } from 'react-redux';
import SelectExpensesTotal from '../selectors/expenses-total';
import SelectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
  getFormattedTotal () {
    return numeral(this.props.expenseTotal / 100).format('$0, 0.00');
  };
  getExpenseWording () {
    if (this.props.expenseCount === 1) {
      return 'expense';
    } else {
      return 'expenses';
    }
  };
  render() {
    return (
      <div>
        <p>Viewing {this.props.expenseCount} {this.getExpenseWording()} totaling {this.getFormattedTotal()}</p>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
    expenseTotal: SelectExpensesTotal(SelectExpenses(state.expenses, state.filters)),
    expenseCount: SelectExpenses(state.expenses, state.filters).length
  });

export default connect(mapStateToProps)(ExpensesSummary);