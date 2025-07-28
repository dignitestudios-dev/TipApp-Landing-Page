import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "axios";
import { FaPlus, FaTimesCircle } from "react-icons/fa";

const Cashapp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedAmount,
    anonymous,
    availableBalance,
    token,
    id,
    data,
  } = location.state || {};

  const userData = data?.user;
  const [receipt, setReceipt] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaymentSubmit = async () => {
    if (!receipt) {
      ErrorToast("Please upload a receipt before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("postId", id);
    formData.append("amount", selectedAmount);
    formData.append("method", "cashApp"); // Or 'venmo' depending on the method
    formData.append("isAnonymous", anonymous);
    formData.append("receipt", receipt); // Append receipt

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.the-perksapp.com/donations", // Replace with actual backend URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.data?.success) {
        SuccessToast("Donation successful!");
        setTimeout(() => navigate(-2), 2000);
      } else {
        ErrorToast("Something went wrong. Please try again.");
      }
    } catch (error) {
      ErrorToast("Error processing Cash App donation.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setReceipt(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearReceipt = () => {
    setReceipt(null);
    setPreviewURL(null);
  };

  return (
    <div className="relative bg-white min-h-screen text-black">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#10BED1] to-[#008594] rounded-b-3xl px-4 pt-6 pb-12 relative">
        <div className="absolute top-5 left-4">
          <IoArrowBackSharp
            onClick={() => navigate(-1)}
            className="text-white text-2xl cursor-pointer"
          />
        </div>
        <h2 className="text-white text-center text-xl font-semibold">Send Donation</h2>
      </div>

      {/* Profile Image */}
      <div className="absolute top-[5.5rem] left-1/2 transform -translate-x-1/2">
        <img
          src={userData?.profilePicture}
          alt="user"
          className="w-20 h-20 rounded-full border-4 border-white object-cover shadow"
        />
      </div>

      {/* Main Content */}
      <div className="mt-20 px-4">
        {/* Username */}
        <p className="text-center text-gray-700 font-semibold">@{userData?.username}</p>

        {/* Cash App Card */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-1">Cash App Transfer</p>
          {userData?.cashApp ? (
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center shadow-sm">
              <span className="text-gray-700 text-base">@{userData?.cashApp}</span>
              <span className="text-gray-400 text-xl">&#8250;</span>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 rounded-xl p-4 text-center text-red-600">
              <p>No Cash App account linked</p>
            </div>
          )}
        </div>

        {/* Upload Receipt Box */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Upload Screenshot</label>

          {previewURL ? (
            <div className="relative">
              <img
                src={previewURL}
                alt="Receipt Preview"
                className="w-full h-40 object-cover rounded-xl border border-gray-300"
              />
              <button
                onClick={clearReceipt}
                className="absolute top-2 right-2 bg-white text-red-500 rounded-full p-1 shadow"
                title="Remove"
              >
                <FaTimesCircle size={18} />
              </button>
            </div>
          ) : (
            <>
              <label
                htmlFor="receiptUpload"
                className="border-2 border-dashed border-[#10BED1] rounded-xl w-full h-40 flex flex-col items-center justify-center text-cyan-500 cursor-pointer"
              >
                <FaPlus className="mb-2 text-lg" />
                <span className="text-sm font-medium">Select Receipt</span>
              </label>
              <input
                id="receiptUpload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="p-3 font-bold bg-white border-2 border-slate-300 rounded-2xl mt-4 flex justify-between">
                <p>Send Donation:</p>
                <span className="text-[#10BED1] font-bold">${selectedAmount}</span>
              </p>
            </>
          )}
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePaymentSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#10BED1] to-[#008594] text-white font-semibold py-2 rounded-xl mt-6 flex justify-center items-center"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin" />
          ) : (
            "Pay Now"
          )}
        </button>
      </div>
    </div>
  );
};

export default Cashapp;
