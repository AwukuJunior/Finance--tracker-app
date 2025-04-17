import React, { useState } from 'react';
import { FaCheckCircle, FaTrashAlt, FaTimesCircle } from 'react-icons/fa'; // Using react-icons
import './savingGoals.css';

const SavingsGoals = () => {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGoal, setNewGoal] = useState('');
  const [error, setError] = useState(''); // Added state for error message

  const openModal = () => {
    setIsModalOpen(true);
    setNewGoal('');
    setError(''); // Clear error message when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setNewGoal(event.target.value);
  };

  const handleAddGoal = () => {
    if (newGoal.trim() === '') {
      setError('Please enter a goal.'); // Set error message
      return;
    }
    setError(''); // Clear error message before adding
    setGoals([...goals, {
      id: Date.now(),
      goal: newGoal,
      date: new Date().toLocaleDateString(),
      status: 'In Progress',
      completed: false,
    }]);
    closeModal();
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const handleCompleteGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed, status: !goal.completed ? 'Completed' : 'In Progress' } : goal
      )
    );
  };

  return (
    <div className="savings-goals-container">
      <div className="savings-goals-header">
        <h2>Saving Goals</h2>
        <button className="add-new-goal-button" onClick={openModal}>
          Add New Goal
        </button>
      </div>

      <div className="savings-goals-table-container">
        <table className="savings-goals-table">
          <thead>
            <tr>
              <th>Goal(s)</th>
              <th>Date</th>
              <th>Status</th>
              <th>Completed</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goalItem) => (
              <tr key={goalItem.id}>
                <td>{goalItem.goal}</td>
                <td>{goalItem.date}</td>
                <td>{goalItem.status}</td>
                <td className="completed-cell">
                  <button
                    className="complete-button"
                    onClick={() => handleCompleteGoal(goalItem.id)}
                    title={goalItem.completed ? "Mark as In Progress" : "Mark as Completed"}
                  >
                    {goalItem.completed ? (
                      <FaCheckCircle className="completed-icon" size={20} />
                    ) : (
                      <FaTimesCircle className="incomplete-icon" size={20} />
                    )}
                  </button>
                </td>
                <td className="delete-cell">
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteGoal(goalItem.id)}
                    title="Delete Goal"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            ))}
            {goals.length === 0 && (
              <tr>
                <td colSpan="5" className="no-goals">
                  No saving goals added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Add New Goals</h3>
              <button className="modal-close-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Enter Goal here"
                value={newGoal}
                onChange={handleInputChange}
              />
              {error && <p className="error-message">{error}</p>} {/* Display error message */}
            </div>
            <div className="modal-footer">
              <button className="add-button" onClick={handleAddGoal}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavingsGoals;