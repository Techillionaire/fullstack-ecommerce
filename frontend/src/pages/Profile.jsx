import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaRegEdit, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import Orders from "./Orders";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
  const wishlistItems = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/5496580/pexels-photo-5496580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Product 1",
      price: "$100.00",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/5496580/pexels-photo-5496580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Product 2",
      price: "$150.00",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/5496580/pexels-photo-5496580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Product 3",
      price: "$200.00",
    },
    
  ];

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Profile", "Order", "WishList"];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalOpenn, setIsModalOpenn] = useState({
    Name : false,
    email: false,
    phone: false,
    state: false,
    
  });

  const [formData, setFormData] = useState({
    Name: 'Stephen',
    email: 'steve@gmail.com',
    phone: '+234 9045678234',
    state: 'Anambra'
    // bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium delectus vitae voluptas dolore commodi corrupti aspernatur. Nam voluptatum delectus magnam aut, minus ut impedit quis quaerat dolore earum dolores quod voluptas illum libero, veritatis praesentium nesciunt. Iure eos tempora in?'
  });

  const handleOpenModal = (field) => {
    setIsModalOpenn(prev => ({ ...prev, [field]: true }));
  };

  const handleCloseModal = (field) => {
    setIsModalOpenn(prev => ({ ...prev, [field]: false }));
  };

  const handleChange = (e, field) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (field) => {
    // Handle form submission logic here
    handleCloseModal(field);
  };


 

  return (
    <>
      <div className="w-full px-5 2xl:px-4 my-20 flex justify-center">
        <section className="border  px-5 py-10 md:px-10 2xl:w-[1440px]">
          <div className="border-b py-5 space-y-2">
            <p className="text-2xl font-semibold">Settings</p>
            <p className="text-[20px] text-gray-500">
              Manage your account 
            </p>
          </div>

          <main className=" flex flex-col mt-10 lg:flex-row gap-10">
            <div className="flex-[20%] flex-wrap gap-1 flex flex-row lg:flex-col space-x-0 lg:space-y-5">
              {tabs.map((tab, index) => (
                <div
                  onClick={() => setActiveTab(index)}
                  key={index}
                  className={`${
                    activeTab === index ? "bg-slate-100 py-2 " : ""
                  } text-[18px] cursor-pointer px-5   text-black `}
                >
                  {tab}
                </div>
              ))}

              <p
                onClick={() => setIsModalOpen(true)}
                className="px-5 text-[18px] cursor-pointer"
              >
                Logout
              </p>
            </div>

            <div className="flex-[80%] ">
              {activeTab === 0 && (
  
  <div className="">
  <div className="space-y-5 ">
    
    {/* Editable Fields */}
       
    
    {Object.keys(formData).map((key) => (
      <div className="">
      <div key={key} className={`  ${key == 'bio' ? 'col-span-2 mb-4' : ''}`}>
        <div className=" ">
          <p className="text-xl ">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          <p className="text-gray-500">{formData[key]}</p>
        </div>
        <button onClick={() => handleOpenModal(key)} className="text-black transition">
          <CiEdit className="size-5" />
        </button>
      </div>
      </div>
    ))}



    {/* Social Media */}
    <div className="col-span-2 mb-4">
      <p className="text-xl  mb-2">Social Media</p>
      <div className="flex space-x-4">
        <a href="https://whatsapp.com" className="text-green-700 hover:text-green-800 transition">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700 transition">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://X.com" className="text-blue-400 hover:text-blue-500 transition">
          <FaXTwitter className="text-2xl" />
        </a>
        <a href="https://instagram.com" className="text-red-500 hover:text-red-600 transition">
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </div>
  </div>

  <div className="mt-8 ">
    <button className=" bg-black hover:bg-black/80 text-white px-6 py-3 transition-colors">
      Update Profile
    </button>
  </div>

  {/* Modals */}
  {Object.keys(isModalOpenn).map((key) => (
    isModalOpenn[key] && (
      <div key={key} className="fixed inset-0 px-2 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 shadow-lg w-full ">
          <h2 className="text-xl font-semibold mb-4">Edit {key.charAt(0).toUpperCase() + key.slice(1)}</h2>
          <input
            type="text"
            value={formData[key]}
            onChange={(e) => handleChange(e, key)}
            className="border border-gray-300 p-2 w-full mb-4 rounded-md"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => handleSubmit(key)}
              className=" border px-4 py-2 rounded-md"
            >
              Save
            </button>
            <button
              onClick={() => handleCloseModal(key)}
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  ))}
</div>

              )}

              {activeTab === 1 && (

                <Orders />
                // <div>
                //   <div className="border-b pb-4">
                //     <p className="text-xl font-semibold">Order History</p>
                //     <p className="text-gray-500">
                //       Check the status of recent orders, manage returns, and
                //       discover similar products.
                //     </p>
                //   </div>

                 

                //   <div className="rounded border shadow px-6 py-4 mt-4">
                //   <div className="flex flex-col lg:flex-row  gap-10 py-5 ">
                //     <div className="flex-[20%]"> 
                //       <img
                //         className="size-[150px] rounded"
                //         src="https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=600"
                //         alt=""
                //       />
                //     </div>

                //     <div className="flex-[90%]">
                //       <div className="flex  justify-between">
                //         <p className="text-lg font-semibold">Micro BackPack</p>
                //         <p className="font-semibold">$70.00</p>
                //       </div>
                //       <p className="text-gray-500 w-full laptop:pr-14">
                //         Are you a minimalist looking for a compact carry option?
                //         The Micro Backpack is the perfect size for your
                //         essential everyday carry items. Wear it like a backpack
                //         or carry it like a satchel for all-day use.
                //       </p>
                //     </div>
                //   </div>

                //   <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between">
                //     <div className="flex items-center space-x-2">
                //       <IoCheckmarkCircle className="text-green-600 text-xl" />
                //       <p className="text-gray-500">
                //         Delivered on July 12, 2021
                //       </p>
                //     </div>

                //     <div className="flex space-x-3 flex-row">
                //       <button className="px-6 py-2 border rounded">View Product</button>
                //       <button className="px-6 py-2 border rounded bg-black text-[#fff]">
                //         Buy Again
                //       </button>
                //     </div>
                //   </div>
                //   </div>

                //   <div className="rounded border shadow px-6 py-4 mt-4">
                //   <div className="flex flex-col lg:flex-row  gap-10 py-5 ">
                //     <div className="flex-[20%]"> 
                //       <img
                //         className="size-[150px] rounded"
                //         src="https://images.pexels.com/photos/593163/pexels-photo-593163.jpeg?auto=compress&cs=tinysrgb&w=600"
                //         alt=""
                //       />
                //     </div>

                //     <div className="flex-[90%]">
                //       <div className="flex  justify-between">
                //         <p className="text-lg font-semibold">Micro BackPack</p>
                //         <p className="font-semibold">$70.00</p>
                //       </div>
                //       <p className="text-gray-500 w-full laptop:pr-14">
                //         Are you a minimalist looking for a compact carry option?
                //         The Micro Backpack is the perfect size for your
                //         essential everyday carry items. Wear it like a backpack
                //         or carry it like a satchel for all-day use.
                //       </p>
                //     </div>
                //   </div>

                //   <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between">
                //     <div className="flex items-center space-x-2">
                //       <IoCheckmarkCircle className="text-green-600 text-xl" />
                //       <p className="text-gray-500">
                //         Delivered on July 12, 2021
                //       </p>
                //     </div>

                //     <div className="flex space-x-3 flex-row">
                //       <button className="px-6 py-2 border rounded">View Product</button>
                //       <button className="px-6 py-2 border rounded bg-black text-[#fff]">
                //         Buy Again
                //       </button>
                //     </div>
                //   </div>
                //   </div>
                // </div>
              )}

              {activeTab === 2 && (
                <div>
                  <div className="w-full mx-auto">
                    <h1 className="text-xl font-semibold mb-5 ">
                      Your Wishlist
                    </h1>

                    {wishlistItems.length === 0 ? (
                      <div className="text-center">
                        <p className="text-lg text-gray-600 mb-4">
                          Your wishlist is empty.
                        </p>
                        <Link
                          to="/"
                          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-600 transition-colors"
                        >
                          Continue Shopping
                        </Link>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishlistItems.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white border shadow overflow-hidden transition-transform transform rounded"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <h2 className="text-lg font-semibold mb-2">
                                {item.title}
                              </h2>
                              <p className="text-gray-500 mb-4">{item.price}</p>
                              <div className="flex flex-col 2xl:flex-row gap-3 justify-between">
                                <button className="px-4 border py-2   transition-colors rounded">
                                  <FaTrashAlt className="inline mr-2 text-red-500" />
                                  Remove
                                </button>
                                <Link
                                  to={`/product/${item.id}`}
                                  className="bg-black text-white px-4 py-2 text-center hover:bg-black/75 transition-colors rounded"
                                >
                                  View Product
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </main>
        </section>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Profile;
