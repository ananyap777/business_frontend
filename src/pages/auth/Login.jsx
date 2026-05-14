import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>

      <input type="text" placeholder="Enter mobile number" />
      <button>Send OTP</button>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;