import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  const presence = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  };

  const notify = () => {
    toast("User logged out successfully", {
      toastId: "successfully",
      style: {
        background: "black",
        color: "white",
      },
    });
  };

  const notifyError = () => {
    toast("logout failed", {
      toastId: "failed",
      style: {
        background: "black",
        color: "white",
      },
    });
  };

  const navigate = useNavigate();



  

  return (
    <div className="">
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={presence}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            
            className="fixed h-[100%] grid place-content-center z-[1000] bg-opacity-60 top-0 bottom-0 right-0 left-0 bg-gray-800 backdrop-blur-md w-[100%] "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "tween" }}
              onClick={(e) => e.stopPropagation()}
              className="py-20 px-10 bg-[#fff] rounded-md space-y-5"
            >
              <p className="text-xl">Are you sure you want to logout?</p>

              <div className="flex items-center justify-center space-x-5">
                <Link to="/login">
                  <button className="border px-4 py-2 ">Yes</button>
                </Link>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border px-4 py-2 bg-black text-white"
                >
                  No
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer className={`relative`}/>
    </div>
  );
};

export default Modal;
