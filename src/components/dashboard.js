import React, { useState } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  // Sample data
  const financialData = {
    balance: 12500.50,
    income: 3500.00,
    expenses: 2250.75,
    recentTransactions: [
      { id: 1, name: 'Groceries', amount: -125.50, date: '2023-06-15', category: 'Food' },
      { id: 2, name: 'Salary', amount: 2500.00, date: '2023-06-14', category: 'Income' },
      { id: 3, name: 'Electric Bill', amount: -75.30, date: '2023-06-12', category: 'Utilities' },
      { id: 4, name: 'Online Shopping', amount: -45.99, date: '2023-06-10', category: 'Shopping' },
      { id: 5, name: 'Freelance Work', amount: 1000.00, date: '2023-06-08', category: 'Income' },
    ],
    spendingGraph: {
      week: [50, 80, 45, 120, 75, 90, 60],
      month: [350, 400, 320, 380, 420, 390, 370, 410, 380, 350, 400, 320]
    },
    dailyTip: "Try using the 50/30/20 rule: 50% needs, 30% wants, 20% savings",
    recentPurchases: [
      { name: 'Groceries', amount: 125.50 },
      { name: 'Electronics', amount: 450.00 },
      { name: 'Dining Out', amount: 75.30 },
      { name: 'Transport', amount: 45.00 }
    ]
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }).format(amount);
  };

  const getGraphData = () => {
    if (timeRange === 'day') {
      return Array.from({length: 24}, (_, i) => Math.floor(Math.random() * 100) + 50);
    } else if (timeRange === 'week') {
      return financialData.spendingGraph.week;
    } else {
      return financialData.spendingGraph.month.slice(0, 30);
    }
  };

  const graphLabels = () => {
    if (timeRange === 'day') {
      return Array.from({length: 24}, (_, i) => `${i}:00`);
    } else if (timeRange === 'week') {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    } else {
      return Array.from({length: 30}, (_, i) => `Day ${i+1}`);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="summary-cards">
        <div className="summary-card income">
          <div className="card-icon">💰</div>
          <div className="card-content">
            <h3>Income</h3>
            <h2>{formatCurrency(financialData.income)}</h2>
          </div>
        </div>
        
        <div className="summary-card expenses">
          <div className="card-icon">💸</div>
          <div className="card-content">
            <h3>Expenses</h3>
            <h2>{formatCurrency(financialData.expenses)}</h2>
          </div>
        </div>
        
        <div className="summary-card balance">
          <div className="card-icon">🏦</div>
          <div className="card-content">
            <h3>Balance</h3>
            <h2>{formatCurrency(financialData.balance)}</h2>
          </div>
        </div>
      </div>
      
      <div className="dashboard-main">
        <div className="dashboard-left">
          <div className="graph-section">
            <h3>Spending Overview</h3>
            <div className="graph-container">
              <div className="graph-buttons">
                <button 
                  className={timeRange === 'day' ? 'active' : ''}
                  onClick={() => setTimeRange('day')}
                >
                  Day
                </button>
                <button 
                  className={timeRange === 'week' ? 'active' : ''}
                  onClick={() => setTimeRange('week')}
                >
                  Week
                </button>
                <button 
                  className={timeRange === 'month' ? 'active' : ''}
                  onClick={() => setTimeRange('month')}
                >
                  Month
                </button>
              </div>
              <div className="bar-graph">
                {getGraphData().map((value, index) => (
                  <div key={index} className="bar-container">
                    <div 
                      className="bar" 
                      style={{ height: `${Math.min(value / 5, 100)}%` }}
                    ></div>
                    <span className="bar-label">{graphLabels()[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="purchases-section">
            <h3>Recent Purchases</h3>
            <div className="purchase-circles">
              {financialData.recentPurchases.map((purchase, index) => (
                <div key={index} className="purchase-circle">
                  <div className="circle-amount">{formatCurrency(purchase.amount)}</div>
                  <div className="circle-label">{purchase.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="dashboard-right">
          <div className="tip-section">
            <h3>Today's Tip</h3>
            <div className="daily-tip">
              <p>{financialData.dailyTip}</p>
            </div>
          </div>
          
          <div className="transactions-section">
            <h3>Recent Transactions</h3>
            <div className="transactions-list">
              {financialData.recentTransactions.map(transaction => (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-icon">
                    {transaction.amount > 0 ? '⬆' : '⬇'}
                  </div>
                  <div className="transaction-details">
                    <div className="transaction-name">{transaction.name}</div>
                    <div className="transaction-category">{transaction.category}</div>
                  </div>
                  <div className={`transaction-amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                    {formatCurrency(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;