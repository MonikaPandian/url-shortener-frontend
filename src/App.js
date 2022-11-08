import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ShortenUrl from "./pages/ShortenUrl";
import UrlTable from "./pages/UrlTable";
import Dashboard from "./pages/Dashboard";
import SignupConfirm from "./pages/SignupConfirm";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/register/verify/:id/:token" element={<SignupConfirm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shorten-url" element={<ShortenUrl />} />
        <Route path="/url-table" element={<UrlTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;