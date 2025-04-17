import React, { useState } from "react";
import "../components/transaction.css";
const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: "expense", // Default to expense
    amount: "",
    category: "",
    date: new Date().toISOString().slice(0, 10), // Default to current date
    status: "Completed", // Default status
  });
  const [statusOptions] = useState(["Pending", "Completed", "Cancelled"]);

  const handleAddNewTransaction = () => {
    setIsAddingNew(true);
  };

  const handleCancelAdd = () => {
    setIsAddingNew(false);
    setNewTransaction({
      type: "expense",
      amount: "",
      category: "",
      date: new Date().toISOString().slice(0, 10),
      status: "Completed",
    });
  };

  const handleTransactionType = (type) => {
    setNewTransaction((prev) => ({ ...prev, type }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveTransaction = () => {
    setTransactions((prev) => [...prev, { ...newTransaction }]);
    setIsAddingNew(false);
    setNewTransaction({
      type: "expense",
      amount: "",
      category: "",
      date: new Date().toISOString().slice(0, 10),
      status: "Completed",
    });
  };

  const handleDeleteTransaction = (indexToDelete) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="transaction-container">
      <div className="transactions-list">
        <div className="transactions-header">
          <h2>Transactions</h2>
          <button className="add-new-button" onClick={handleAddNewTransaction}>
            Add New Transaction
          </button>
        </div>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.status}</td>
                <td className="actions-cell">
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteTransaction(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {transactions.length === 0 && !isAddingNew && (
              <tr>
                <td colSpan="6">No transactions yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isAddingNew && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Transaction</h2>
            <div className="transaction-type-buttons">
              <button
                className={newTransaction.type === "expense" ? "active" : ""}
                onClick={() => handleTransactionType("expense")}
              >
                Expense
              </button>
              <button
                className={newTransaction.type === "income" ? "active" : ""}
                onClick={() => handleTransactionType("income")}
              >
                Income
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newTransaction.amount}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                name="category"
                value={newTransaction.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={newTransaction.status}
                onChange={handleInputChange}
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-actions">
              <button className="save-button" onClick={handleSaveTransaction}>
                Save
              </button>
              <button className="cancel-button" onClick={handleCancelAdd}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
