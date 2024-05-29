import React, {useState} from "react";

function AddTransactionForm({setTransactionsData}) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  })

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    setFormData({...formData, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setTransactionsData((prevTransactionsData) => [...prevTransactionsData, {...formData, id: Date.now()},])
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: 0,
    })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
