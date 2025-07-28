import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster"; // Import your Toaster components
import axios from "axios";
import { useApi } from '../../hooks/api/Get';

const Wallets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    selectedAmount,
    anonymous,
    token,
    id,
    data,
  } = location.state || {};

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Fetch wallet balance
  const { loading: walletloading, data: walletbalance, error: walleterror } = useApi('/wallet/balance', token);

  console.log(walletbalance, "walletbalance");

  // Handle payment submission
  const handlePaymentSubmit = async () => {
    if (!walletbalance || walletbalance.balance < selectedAmount) {
      ErrorToast("Insufficient wallet balance.");
      return;
    }

    const formData = new FormData();
    formData.append("postId", id);
    formData.append("amount", selectedAmount);
    formData.append("method", "wallet"); // Assuming wallet is the method here
    formData.append("isAnonymous", anonymous);

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.the-perksapp.com/donations", // Your backend API URL
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
        setShowSuccessModal(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        ErrorToast("Something went wrong. Please try again.");
      }
    } catch (error) {
      ErrorToast("Error processing wallet donation.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
          src={data?.user?.profilePicture}
          alt="user"
          className="w-20 h-20 rounded-full border-4 border-white object-cover shadow"
        />
      </div>

      {/* Main Content */}
      <div className="mt-20 px-4">
        {/* Username */}
        <p className="text-center text-gray-700 font-semibold">
          @{data?.user?.username}
        </p>

        {/* Wallet Card */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-1">Wallet Transfer</p>
          {walletloading ? (
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex justify-center items-center shadow-sm">
              <div className="w-5 h-5 border-4 border-t-transparent border-gray-600 rounded-full animate-spin" />
            </div>
          ) : walletbalance?.balance ? (
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center shadow-sm">
              <span className="text-gray-700 text-base">
                Wallet Balance: ${walletbalance.balance} {/* Accessing the 'balance' property */}
              </span>
              <span className="text-gray-400 text-xl">&#8250;</span>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 rounded-xl p-4 text-center text-red-600">
              <p>No Wallet balance available</p>
            </div>
          )}
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePaymentSubmit}
          disabled={isLoading}
          className="w-full cursor-pointer bg-gradient-to-r from-[#10BED1] to-[#008594] text-white font-semibold py-2 rounded-xl mt-6 flex justify-center items-center"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin" />
          ) : (
            "Pay Now"
          )}
        </button>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[28em] w-full">
              <div className="flex justify-center">
                <img src="/done.png" className="w-auto h-20" alt="" />
              </div>
              <h2 className="text-lg font-bold mt-3 mb-4">Donation Successful!</h2>
              <p className="mb-4">
                Thank you for your generous donation! Your contribution is helping make a difference. We appreciate your support!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallets;
