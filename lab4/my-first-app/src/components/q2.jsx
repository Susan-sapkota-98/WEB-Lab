import React from "react";

const TogglePassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <h1>Q2: Toggle Password</h1>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
      />
      <button onClick={togglePassword}>{showPassword ? "Hide" : "Show"}</button>
    </div>
  );
};

export default TogglePassword;
