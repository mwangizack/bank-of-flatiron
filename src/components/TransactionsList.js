import React, { useState } from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  const [transactionsData, setTransactionsData] = useState([]);

  fetch("http://localhost:3000/transactions")
    .then((response) => response.json())
    .then((data) => setTransactionsData(data))
    .catch((error) => console.log(`Error fetching data: ${error}`));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionsData.map((transactionData) => (
          <Transaction
            key={transactionData.id}
            date={transactionData.date}
            description={transactionData.description}
            category={transactionData.category}
            amount={transactionData.amount}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
