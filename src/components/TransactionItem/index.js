// Write your code here
import './index.css'

const transactionList = props => {
  const {eachTransaction} = props
  const {title, amount, type, isTransactionAdded} = eachTransaction
  return (
    <li className="each-transaction-details-container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      {isTransactionAdded ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      ) : null}
    </li>
  )
}
export default transactionList
