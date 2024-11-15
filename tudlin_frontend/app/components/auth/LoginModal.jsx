import React, { useState } from "react";
import * as Ariakit from "@ariakit/react";
import "./AuthStyle.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginModal = ({ dialog }) => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between forms

  const toggleForm = () => {
    setIsLogin((prev) => !prev); // Toggle the form state
  };

  return (
    <>
      <Ariakit.Dialog
        store={dialog}
        backdrop={<div className="backdrop" />}
        className="dialog"
      >
        <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
          {isLogin ? (
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <SignupForm toggleForm={toggleForm} />
          )}
        </div>
        <div>
          <Ariakit.DialogDismiss className="button">
            login
          </Ariakit.DialogDismiss>
        </div>
      </Ariakit.Dialog>
    </>
  );
};

export default LoginModal;
