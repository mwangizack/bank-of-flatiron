import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionsData, setTransactionsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactionsData(data))
      .catch((error) => console.log(`Error fetching data: ${error}`));
  }, []);

  return (
    <div>
      <Search />
      <AddTransactionForm setTransactionsData={setTransactionsData}/>
      <TransactionsList transactionsData={transactionsData}/>
    </div>
  );
}

export default AccountContainer;
