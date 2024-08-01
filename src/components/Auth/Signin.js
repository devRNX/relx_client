import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthApi";
import { toast } from "react-toastify";
const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (event) => {
    setLoading(true);
    try {
      event.preventDefault();
      const loginData = new FormData(event.currentTarget);
      const logInData = {
        email: loginData.get("email"),
        password: loginData.get("password"),
      };

      if (!logInData.email) throw new Error("Email is required");
      if (!logInData.password) throw new Error("Password is required");

      const response = await loginUser(logInData);
      console.log(response);
      setLoading(true);
      if (response?.data?.status === true) {
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        window.location.reload();
      } else {
        setLoading(false);
        const msg = response?.data?.message;
        toast.error(msg || "An error occurred");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "An error occured");
    }
    setLoading(false);
  };

  const resetPassword = async (event) => {
    navigate("/reset/password");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="title">Sign In</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="email" name="email" id="email" placeholder="username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            className="pe-5"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            name="password"
            id="password"
          />
          <span
            className="password-toggle"
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "20px",
            }}
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </span>
        </div>
        <div class="d-grid gap-2 d-md-block">
          {loading ? (
            <div
              className="btn btn-outline-success me-3 my-3 "
              style={{ width: "7rem" }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Signing in...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-success btn-lg me-3 my-3 "
            >
              Signin
            </button>
          )}
          <button
            className="btn btn-outline-success btn-lg"
            onClick={resetPassword}
            type="button"
          >
            Forgot Password
          </button>
        </div>
      </form>
    </>
  );
};

export default Signin;
