import React, { useState } from 'react';
import './settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    currency: 'GHS',
    theme: 'light',
    notifications: true,
    biometricAuth: false,
    weeklyReports: true,
    budgetAlerts: true,
    language: 'en',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className={`settings-container ${settings.theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="settings-header">
        <h1>Settings</h1>
      </div>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <button 
            className={`sidebar-btn ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <span className="btn-icon">👤</span>
            Account
          </button>
          <button 
            className={`sidebar-btn ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <span className="btn-icon">⚙</span>
            Preferences
          </button>
          <button 
            className={`sidebar-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <span className="btn-icon">🔔</span>
            Notifications
          </button>
          <button 
            className={`sidebar-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <span className="btn-icon">🔒</span>
            Security
          </button>
        </div>

        <div className="settings-content">
          <form onSubmit={handleSubmit}>
            {activeTab === 'account' && (
              <div className="settings-section">
                <h2 className="section-title">
                  <span className="section-icon">👤</span>
                  Account Settings
                </h2>
                
                <div className="form-group">
                  <label htmlFor="language">Language</label>
                  <select
                    id="language"
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="pt">Portuguese</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="currency">Default Currency</label>
                  <select
                    id="currency"
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="GHS">Ghana Cedi (GHS)</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="NGN">Nigerian Naira (NGN)</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="settings-section">
                <h2 className="section-title">
                  <span className="section-icon">⚙</span>
                  App Preferences
                </h2>
                
                <div className="form-group">
                  <label>Theme</label>
                  <div className="theme-options">
                    <button
                      type="button"
                      className={`theme-option ${settings.theme === 'light' ? 'active' : ''}`}
                      onClick={() => setSettings({...settings, theme: 'light'})}
                    >
                      <span className="theme-icon">☀</span>
                      Light
                    </button>
                    <button
                      type="button"
                      className={`theme-option ${settings.theme === 'dark' ? 'active' : ''}`}
                      onClick={() => setSettings({...settings, theme: 'dark'})}
                    >
                      <span className="theme-icon">🌙</span>
                      Dark
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="settings-section">
                <h2 className="section-title">
                  <span className="section-icon">🔔</span>
                  Notification Settings
                </h2>
                
                <div className="toggle-group">
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={settings.notifications}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                    <span className="toggle-label">Enable Notifications</span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      name="weeklyReports"
                      checked={settings.weeklyReports}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                    <span className="toggle-label">Weekly Summary Reports</span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      name="budgetAlerts"
                      checked={settings.budgetAlerts}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                    <span className="toggle-label">Budget Limit Alerts</span>
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="settings-section">
                <h2 className="section-title">
                  <span className="section-icon">🔒</span>
                  Security Settings
                </h2>
                
                <div className="toggle-group">
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      name="biometricAuth"
                      checked={settings.biometricAuth}
                      onChange={handleChange}
                    />
                    <span className="toggle-slider"></span>
                    <span className="toggle-label">Enable Biometric Authentication</span>
                  </label>
                </div>

                <div className="form-group">
                  <button type="button" className="btn btn-secondary">
                    Change Password
                  </button>
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;