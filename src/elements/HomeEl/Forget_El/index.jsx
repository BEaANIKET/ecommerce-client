import { Button, Input } from "antd";
import Link from "next/link";
const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Forgot Password
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter your email address, and we’ll send you a link to reset your password.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
        </div>

        {/* Reset Password Button */}
        <Button
          type="primary"
          size="large"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105"
        >
          Send Reset Link
        </Button>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <Link
            href={"/login"}
            className="text-blue-500 hover:text-blue-700 hover:underline transition duration-300"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
