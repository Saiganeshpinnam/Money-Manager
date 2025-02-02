import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="money-manager-card-container">
          <h1 className="account-holder-name">Hi, Richard</h1>
          <p className="greetings">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>

        <MoneyDetails transactionTypeOptions={transactionTypeOptions} />
      </div>
    )
  }
}
export default MoneyManager
