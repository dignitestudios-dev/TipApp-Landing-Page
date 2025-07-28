import React, { useState } from 'react';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { useUsers } from '../../hooks/api/Get';

const PaymentMethods = () => {
  const location = useLocation();
  const { selectedAmount, anonymous, availableBalance, token } = location.state || {}; // Retrieve token from state

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [cardDetails, setCardDetails] = useState('');

  // Fetch payment methods using the custom hook, passing the token for authentication
  const { loading, data: paymentMethods, error } = useUsers('/paymentMethods', token);

  const handlePaymentComplete = () => {
    console.log(`Payment method selected: ${selectedPayment}`);
    // Handle payment completion logic here
  };

  // Render payment details based on selected payment method
  const renderPaymentDetails = () => {
    switch (selectedPayment) {
      case 'card':
        return (
          <div className="mt-4">
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              placeholder="Enter your card number"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={cardDetails}
              onChange={(e) => setCardDetails(e.target.value)}
            />
            <button
              onClick={handlePaymentComplete}
              className="w-full mt-4 p-2 bg-blue-500 text-white rounded-lg"
            >
              Submit Card Details
            </button>
          </div>
        );
      case 'venmo':
        return (
          <div className="mt-4">
            <label className="block mb-2">Enter your Venmo ID</label>
            <input
              type="text"
              placeholder="Enter your Venmo ID"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={cardDetails}
              onChange={(e) => setCardDetails(e.target.value)}
            />
            <button
              onClick={handlePaymentComplete}
              className="w-full mt-4 p-2 bg-blue-500 text-white rounded-lg"
            >
              Submit Venmo ID
            </button>
          </div>
        );
      case 'cashapp':
        return (
          <div className="mt-4">
            <label className="block mb-2">Enter your Cash App ID</label>
            <input
              type="text"
              placeholder="Enter your Cash App ID"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={cardDetails}
              onChange={(e) => setCardDetails(e.target.value)}
            />
            <button
              onClick={handlePaymentComplete}
              className="w-full mt-4 p-2 bg-blue-500 text-white rounded-lg"
            >
              Submit Cash App ID
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  // Error handling for failed API fetch
  if (error) {
    return <div>Error loading payment methods</div>;
  }

  return (
    <div className="text-black p-4 mx-auto max-w-sm">
      <h2 className="text-center font-semibold text-xl mb-4">Payment Method</h2>

      {/* Display loading state if payment methods are still being fetched */}
      {loading && <div>Loading payment methods...</div>}

      {/* Display "No payment methods found" message if paymentMethods is empty or undefined */}
      {paymentMethods && paymentMethods.length === 0 && !loading && (
        <div className="text-center text-red-500">No payment methods found.</div>
      )}

      {/* Display payment methods if available */}
      {paymentMethods && !loading && paymentMethods.length > 0 && (
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              key={method._id}
              onClick={() => {
                setSelectedPayment(method.paymentMethodId); // Use paymentMethodId to select
                setCardDetails(''); // Reset card details on method change
              }}
              className="flex justify-between items-center w-full p-3 bg-gray-100 rounded-lg"
            >
              <div className="flex gap-3 items-center">
                <BsCreditCard2BackFill />
                <span>{method.brand} ending in {method.last4}</span>
              </div>
              <span>&#8250;</span>
            </button>
          ))}
        </div>
      )}

      {/* Show payment details section when a method is selected */}
      {selectedPayment && (
        <div className="mt-4">
          <h3 className="text-center font-semibold text-lg mb-4">Enter Details for {selectedPayment}</h3>
          {renderPaymentDetails()}
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
