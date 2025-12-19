import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/Button";

function SignupForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-red-700 mb-6">
        Sign Up
      </h2>

      {/* Input Components */} 
      <Input placeholder="Full Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      {/* Button Component */}
      <Button text="Create Account" />

      <p className="text-center mt-4">
        Already have an account?
        <button
          onClick={handleLogin}
          className="text-red-600 ml-1"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default SignupForm;
