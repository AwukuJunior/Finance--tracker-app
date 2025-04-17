import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./pages/login";
import Homepage from "./layout/homepage";
import Transactions from "./components/transaction";
import Analytics from "./components/analytics";
import Tips from "./components/tips";
import Settings from "./components/settings";
import SavingGoals from "./components/savingGoals";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Protected / Nested Route */}
        <Route path="/homepage" element={<Homepage />}>
          <Route index element={<Dashboard />} />
          <Route path="/homepage/dashboard" element={<Dashboard />} />
          <Route path="/homepage/transactions" element={<Transactions />} />
          <Route path="/homepage/analytics" element={<Analytics />} />
          <Route path="/homepage/tips" element={<Tips />} />
          <Route path="/homepage/settings" element={<Settings/>} />
          <Route path="/homepage/savingGoals" element={<SavingGoals/>} />
        </Route>
      </Routes>

    </Router>
  );
}

export default App;
