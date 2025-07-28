import React, { useState, useEffect } from 'react';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorToast, SuccessToast } from '../../components/global/Toaster'; // Import Toast components
import axios from 'axios'; // Import axios directly
import { useApi } from '../../hooks/api/Get';
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { FaTrashAlt } from 'react-icons/fa';
import { FaCreditCard, FaDonate } from 'react-icons/fa';
import { IoArrowBackSharp } from 'react-icons/io5';


const Card = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedAmount, anonymous, availableBalance, token, id } = location.state || {}; // Retrieve token from state
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [cardDetails, setCardDetails] = useState('');
  const [receipt, setReceipt] = useState(null); // State to sstore receipt file for Venmo and Cash App
  const [paymentMethods, setPaymentMethods] = useState([]); // State to store the fetched payment methods
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State to store any errors
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const elements = useElements();
  const [isSavingCard, setIsSavingCard] = useState(false);

  const handleDeleteCard = async (cardId) => {
    try {
      const res = await axios.delete(`https://api.the-perksapp.com/paymentMethods/${cardId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data?.success) {
        SuccessToast('Card deleted successfully!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        ErrorToast('Failed to delete card.');
      }
    } catch (error) {
      ErrorToast('Error deleting card.');
      console.error(error);
    }
  };

  // Fetch payment methods
  const { loading: paymentLoading, data: fetchedPaymentMethods, error: paymentError } = useApi('/paymentMethods', token);

  // Handle API data fetching for payment methods
  useEffect(() => {
    if (!paymentLoading && fetchedPaymentMethods) {
      setPaymentMethods(fetchedPaymentMethods);
      setLoading(false);
    }
    if (paymentError) {
      setError("Failed to load payment methods");
      setLoading(false);
    }
  }, [paymentLoading, fetchedPaymentMethods, paymentError]);



  console.log(fetchedPaymentMethods, "fetchedPaymentMethods")

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        navigate(-2); // Redirect after 2 seconds
      }, 2000); // 2000ms = 2 seconds

      // Cleanup the timer when the component unmounts or modal is closed
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal, navigate]);


  // Function to handle the "Pay Now" button click and API call
  const handlePaymentComplete = async () => {
    if ((selectedPayment === 'venmo' || selectedPayment === 'cashapp') && !receipt) {
      ErrorToast('Please upload a receipt for Venmo or Cash App');
      return;
    }
    setIsLoading(true);  // Set loading to true before making the API call
    // Create the form data for donation
    const formData = new FormData();
    formData.append('postId', id);
    formData.append('amount', selectedAmount);
    formData.append('method', "card");
    if (receipt) formData.append('receipt', receipt); // Add receipt if exists
    formData.append('isAnonymous', anonymous);
    const selectedMethod = paymentMethods.find(method => method.paymentMethodId === selectedPayment);
    if (selectedMethod) {
      formData.append('sourceId', selectedMethod._id); // Use selected method's _id
    }

    console.log(selectedMethod, "selectedMethod")

    // Make the donation API call directly using axios
    try {
      const response = await axios.post('https://api.the-perksapp.com/donations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the correct content type for file uploads
          Authorization: `Bearer ${token}`,
        },
      });

      if (response?.data?.success) {
        // SuccessToast('Donation successful!');
        setShowSuccessModal(true); // Show popup
      } else {
        ErrorToast('Something went wrong. Please try again.');
      }
    } catch (error) {
      ErrorToast('Error processing payment.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set loading to false after the request completes
    }
  };


  if (loading) {
    return <div >
      <div className='mt-10 mb-10'>
        <div className='flex justify-center text-center'><img src="/loading.png" className='w-auto h-10' alt="" /></div>
        <div className='flex justify-center text-center'>
          <p className='text-black'> Loading payment methods...</p>
        </div>
      </div>
    </div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="text-black p-4   md:mt-6 md:mb-6 mt-20 mb-20">
      <div className="bg-gradient-to-r from-[#10BED1] to-[#008594] rounded-b-3xl px-4 pt-6 pb-12 relative mb-10">
        <div className="absolute top-5 left-4">
          <IoArrowBackSharp
            onClick={() => navigate(-1)}
            className="text-white text-2xl cursor-pointer"
          />
        </div>
        <h2 className="text-white text-center text-xl font-semibold">Send Donation</h2>
      </div>

     
      {/* Display available payment methods */}
      {paymentMethods && paymentMethods.length === 0 && (
        <div className="text-center text-red-500">No payment methods found.</div>
      )}

      {paymentMethods && paymentMethods.length > 0 && (
        <div className="space-y-3 cursor-pointer mb-40">
          {paymentMethods.map((method) => {
            const isSelected = selectedPayment === method.paymentMethodId;
            return (
              <div key={method._id} className={`flex items-center justify-between cursor-pointer w-full p-3 rounded-lg transition-colors duration-200 ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}>
                <button
                  onClick={() => {
                    setSelectedPayment(method.paymentMethodId);
                    setCardDetails('');
                    setReceipt(null);
                  }}
                  className="flex gap-3 items-center flex-1 text-left cursor-pointer"
                >
                  <BsCreditCard2BackFill />
                  <span className="font-bold capitalize">
                    {method.brand} ending in {method.last4}
                  </span>
                </button>

                <button
                  onClick={() => handleDeleteCard(method._id)}
                  className="ml-3 cursor-pointer text-red-600 hover:text-red-800"
                  title="Delete Card"
                >
                  <FaTrashAlt />
                </button>
              </div>
            );
          })}

        </div>
      )}


      {showAddCardModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowAddCardModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Add a New Card</h3>

            <div className="p-4 border border-gray-300 rounded-lg mb-4">
              <CardElement options={{ hidePostalCode: true }} />
            </div>

            <button
              className="w-full bg-green-600 text-white py-2 rounded-lg flex justify-center items-center"
              disabled={isSavingCard}
              onClick={async () => {
                if (!stripe || !elements) return;

                setIsSavingCard(true);
                const cardElement = elements.getElement(CardElement);
                const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card: cardElement,
                });

                if (error) {
                  ErrorToast(error.message || 'Card error');
                  setIsSavingCard(false);
                } else {
                  try {
                    const res = await axios.post(
                      'https://api.the-perksapp.com/paymentMethods',
                      {
                        paymentMethodId: paymentMethod.id,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    );

                    if (res.data?.success) {
                      SuccessToast('Card added successfully!');
                      setPaymentMethods([...paymentMethods, res.data.savedCard]);
                      setShowAddCardModal(false);
                      window.location.reload();
                    } else {
                      ErrorToast('Failed to add card');
                    }
                  } catch (e) {
                    ErrorToast('Server error adding card');
                  } finally {
                    setIsSavingCard(false);
                  }
                }
              }}
            >
              {isSavingCard ? (
                <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
              ) : (
                "Save Card"
              )}
            </button>
          </div>
        </div>
      )}


      {/* Show payment details section when a method is selected */}
      {selectedPayment && (
        <div className="mt-4">
          <button
            onClick={handlePaymentComplete}
            className="w-full mt-4 p-2 bg-blue-500 cursor-pointer text-white rounded-lg"
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="w-5 h-5 border-4 border-t-transparent border-blue-400 rounded-full animate-spin"></div> {/* Loading spinner */}
              </div>
            ) : (
              <>
                <div className='flex items-center justify-center gap-3'>
                  <FaDonate className="text-white" />
                  Pay Now
                </div>

              </>
            )}
          </button>

        </div>
      )}
      <button
        className="w-full cursor-pointer flex items-center justify-center gap-3 mt-4 p-2 bg-[#11B9CC] text-white rounded-lg"
        onClick={() => setShowAddCardModal(true)}
      >
        <FaCreditCard />
        Add New Card
      </button>




      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-[28em] w-full">
            <div className='flex justify-center'>
              <img src="/done.png" className='w-auto h-20' alt="" />
            </div>
            <h2 className="text-lg font-bold mt-3 mb-4">Donation Successful!</h2>
            <p className="mb-4">Thank you for your generous donation! Your contribution is helping make a difference. We appreciate your support!</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Card;
