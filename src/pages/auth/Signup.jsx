import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Signup Page</h1>

      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Mobile Number" />
      <input type="email" placeholder="Email" />

      <select>
        <option>User</option>
        <option>Vendor</option>
      </select>

      <button>Create Account</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;