// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionTypeOptions} = props

  return (
    <div className="money-details-bg-container">
      <div className="money-details-container balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="financial-icon"
          alt="balance"
        />
        <div className="current-status-container">
          <p className="your-status">Your Balance</p>
          <p className="amount-status">Rs.0</p>
        </div>
      </div>

      <div className="money-details-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="financial-icon"
          alt="income"
        />
        <div className="current-status-container">
          <p className="your-status">
            Your {transactionTypeOptions[0].displayText}
          </p>
          <p className="amount-status">Rs.0</p>
        </div>
      </div>

      <div className="money-details-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="financial-icon"
          alt="expenses"
        />
        <div className="current-status-container">
          <p className="your-status">
            Your {transactionTypeOptions[1].displayText}
          </p>
          <p className="amount-status">Rs.0</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
