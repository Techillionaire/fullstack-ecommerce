import React, { useContext, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { token } = useParams()

  const { backendUrl, navigate } = useContext(ShopContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
     return setError("Password do not match");
    } else {
      setError("");
    }

    try {
      const response = await axios.post(
        backendUrl + `/api/user/reset-password/${token}`,
        { password }
      );
      if (response.data.success) {
        toast.success("password reset sucessfully");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="text-center prata-regular text-2xl mt-20">
          <Title text1={"Reset"} text2={"Password"} />
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="w-[90%] sm:max-w-96 m-auto mt-14  text-gray-800"
        >
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800"
            type="password"
            placeholder="Enter Your password"
            required
          />

          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-3 px-3 py-2 border border-gray-800"
            type="password"
            placeholder="Confirm password"
            required
          />
          {error && <p className="text-red-500 capitalize ">{error}</p>}

          <button
            className="w-fit mx-auto block mt-5 px-6 py-2 border border-gray-800 hover:bg-black transition-colors duration-500 delay-100 ease-in hover:text-white"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
