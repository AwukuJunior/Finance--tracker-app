import React, { useState } from 'react';
import './analytics.css';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [activeCategory, setActiveCategory] = useState('Food');
  
  // Sample data
  const analyticsData = {
    day: Array.from({length: 24}, (_, i) => Math.floor(Math.random() * 100) + 50),
    week: Array.from({length: 7}, (_, i) => Math.floor(Math.random() * 300) + 100),
    month: Array.from({length: 30}, (_, i) => Math.floor(Math.random() * 500) + 200),
    categories: [
      { name: 'Food', amount: 1250, percentage: 35, trend: 'up' },
      { name: 'Transport', amount: 800, percentage: 22, trend: 'down' },
      { name: 'Utilities', amount: 600, percentage: 17, trend: 'up' },
      { name: 'Entertainment', amount: 450, percentage: 13, trend: 'up' },
      { name: 'Shopping', amount: 350, percentage: 10, trend: 'down' },
    ]
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }).format(amount);
  };

  const getGraphData = () => {
    return analyticsData[timeRange];
  };

  const getGraphLabels = () => {
    if (timeRange === 'day') return Array.from({length: 24}, (_, i) => `${i}:00`);
    if (timeRange === 'week') return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return Array.from({length: 30}, (_, i) => `Day ${i+1}`);
  };

  const getMaxValue = () => {
    return Math.max(...getGraphData());
  };

  return (
    <div className="analytics-container">
      <h1 className="analytics-header">Spending Analytics</h1>
      
      <div className="time-range-selector">
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
      
      <div className="analytics-graph">
        <div className="graph">
          {getGraphData().map((value, index) => (
            <div key={index} className="graph-bar-container">
              <div 
                className="graph-bar" 
                style={{ height: `${(value / getMaxValue()) * 100}%` }}
              ></div>
              <span className="graph-label">{getGraphLabels()[index]}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="categories-section">
        <h3>Top Categories</h3>
        <div className="categories-list">
          {analyticsData.categories.map(category => (
            <div 
              key={category.name} 
              className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="category-header">
                <span className="category-name">{category.name}</span>
                <span className="category-percentage">{category.percentage}%</span>
              </div>
              <div className="category-amount">{formatCurrency(category.amount)}</div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>
              <div className="category-trend">
                Trend: 
                <span className={category.trend === 'up' ? 'up' : 'down'}>
                  {category.trend === 'up' ? '↑' : '↓'} 
                  {category.trend === 'up' ? ' Increasing' : ' Decreasing'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;