import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { IoArrowBackSharp, IoLogoVenmo, IoWalletOutline } from 'react-icons/io5';
import { SiCashapp } from 'react-icons/si';

const PaymentOption = ({ icon, label, to, state }) => (
  <Link
    to={to}
    state={state} // Only pass state if needed
    className="flex justify-between items-center cursor-pointer w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-200 no-underline text-black"
  >
    <div className="flex items-center gap-3 text-lg font-medium">
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </div>
    <span className="text-xl text-gray-500">&#8250;</span>
  </Link>
);

const PaymentOptions = () => {
  const navigate = useNavigate("");
  const location = useLocation();
  const { selectedAmount, anonymous, availableBalance, token, id, data } = location.state || {}; // Retrieve token from state

  const sharedState = { selectedAmount, anonymous, availableBalance, token, id,data }; // Prepare the shared state

  
console.log(sharedState,"sharedState");

  return (
    <div className="space-y-4 max-w-md mx-auto md:mt-6 md:mb-6 pl-6 pr-6 mt-20 mb-20">
       <div className='flex items-center justify-between mb-4 w-[20em]'>

        <IoArrowBackSharp className='cursor-pointer' size={20} onClick={()=>{
          navigate(-1)
        }} />
        <h2 className="text-center font-semibold text-xl mb-0">Select Payment Method</h2>
      </div>

      {/* Pass state only to the card option */}
      <PaymentOption 
        icon={<BsCreditCard2BackFill />}
        label="Credit / Debit Card" 
        to="/card" 
        state={sharedState} // Only pass state for card
      />
      
      {/* No state for Venmo or CashApp */}
      <PaymentOption 
        icon={<IoLogoVenmo color="#008CFF" />} 
        label="Venmo" 
        to="/venmo" 
        state={sharedState} 
      />
      <PaymentOption 
        icon={<SiCashapp color="#00D54B" />} 
        label="Cash App" 
        to="/cashapp"
        state={sharedState}  
      />

       <PaymentOption 
        icon={<IoWalletOutline color="#03C6DB" />} 
        label="Wallet" 
        to="/wallets"
        state={sharedState}  
      />
    </div>
  );
};

export default PaymentOptions;
