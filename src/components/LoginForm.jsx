import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/Button";

function LoginForm() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-red-700 mb-6">
        Login
      </h2>

      {/* Input Components */}
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      {/* Button Component */}
      <Button text="Sign In" />

      <p className="text-center mt-4">
        Don’t have an account?
        <button
          onClick={handleSignup}
          className="text-red-600 ml-1"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
