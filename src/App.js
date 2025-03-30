

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList";  // We will create this
import UserDetail from "./components/UserDetail"; // We will create this

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Directory</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
