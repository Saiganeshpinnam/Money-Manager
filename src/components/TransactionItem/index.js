// Write your code here

const transactionList = props => {
  const {eachTransaction} = props
  const {title, amount, type} = eachTransaction
  return (
    <li>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </li>
  )
}
export default transactionList
