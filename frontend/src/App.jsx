import React from "react";
import Navbar from "./components/Navbar";
import HealthCheck from "./components/HealthCheck";
import LoopbackTest from "./components/LoopbackTest";
import RegisterAccount from "./components/RegisterAccount";
import Login from "./components/Login";
import AuthCheck from "./components/AuthCheck";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center gap-10 py-5 px-10">
          <div className="space-y-10">
            <HealthCheck />
            <LoopbackTest />
            <RegisterAccount />
            <Login />
            <AuthCheck />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
