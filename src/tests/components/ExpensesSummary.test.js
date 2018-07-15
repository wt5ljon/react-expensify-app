import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly for no expenses', () => {
  const wrapper = shallow(<ExpensesSummary 
    expenseTotal={0}
    expenseCount={0}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly for one expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseTotal={4500}
    expenseCount={1}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseTotal={109500}
    expenseCount={2}
  />);
  expect(wrapper).toMatchSnapshot();
});