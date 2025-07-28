import React, { useContext, useState, useEffect } from 'react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import axios from 'axios';
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../../hooks/api/Get';

const Donation = () => {
    const navigate = useNavigate("");
    const { theme } = useContext(GlobalContext);
    const { id, token, userid } = useParams(); // Get the id and token from URL parameter
    const [step, setStep] = useState('amount');
    const [showModal, setShowModal] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [anonymous, setAnonymous] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [storedToken, setStoredToken] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { loading: walletloading, data: walletbalance, error: walleterror } = useApi('/wallet/balance', token);


    // Store the token in localStorage or in state
    useEffect(() => {
        if (token) {
            setStoredToken(token);
            localStorage.setItem("authToken", token); // Optionally store the token in localStorage
        }
    }, [token]);

    // Fetch data using the id and stored token
    const fetchData = async () => {
        if (!storedToken || !id) return;

        try {
            setLoading(true);
            const res = await axios.get(`https://api.the-perksapp.com/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${storedToken}`,
                },
            });
            setData(res.data.data); // Store the fetched data
        } catch (err) {
            setError(err);
            console.error("API Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    };

    console.log(userid, "this is userid");

    useEffect(() => {
        fetchData();
    }, [storedToken, id]);

    // Calculate donation progress
    const progress = Math.min((data?.amountRaised / data?.amount) * 100, 100);

    // Donation data structure to display
    const donationData = {
        userId: data?._id,
        userName: data?.user?.name || "Anonymous",
        userAvatar: data?.user?.profilePicture || "/default-avatar.png",
        postedAgo: "Just now", // You can calculate time from createdAt if needed
        images: [
            data?.media[0] || "https://source.unsplash.com/random/800x600?donation",
        ],
        title: data?.title || "Support a Dream",
        tagline: data?.tagline || "Help Me achieve more.",
        raised: data?.amountRaised || 0,
        goal: data?.amount || 5000,
        description: data?.description || "Your donation makes a difference. Support this creator today.",
    };

    const availableBalance = data?.amount || 0;

    const handlePaymentComplete = () => {
        setStep('success');
        setTimeout(() => {
            setShowModal(false);
            setStep('amount');
            setSelectedAmount(0);
            setAnonymous(false);
            setSelectedPayment(null);
        }, 4000);
    };

    console.log(data, "Post Data");

    return (
        <div className={`flex items-center justify-center md:min-h-screen pt-14 pb-14 pl-3 pr-3 bg-white relative ${theme === "light"
            ? "bg-gradient-to-br from-[#0390A0] via-[#03C6DB] to-[#03C6DB]"
            : "bg-gradient-to-br from-[#002225] via-[#0D3A3F] to-[#0D3A3F]"
            }`}>
            <div>
                <img
                    src="/about/shade1.png"
                    className="absolute top-0 w-[240px] md:w-[70%] left-0"
                    alt=""
                />
                <img
                    src="/about/shade2.png"
                    className="absolute top-0 w-[190px] md:w-[60%] right-0"
                    alt=""
                />
            </div>
            {/* Main Card */}
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden z-10">
                <div className="flex items-center p-4">
                    {loading ? (
                        <div className="animate-pulse flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full" />
                            <div className="space-y-2">
                                <div className="w-24 h-3 bg-gray-200 rounded" />
                                <div className="w-16 h-2 bg-gray-100 rounded" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <img
                                className="w-10 h-10 rounded-full object-cover"
                                src={donationData.userAvatar}
                                alt={donationData.userName}
                            />
                            <div className="ml-3">
                                <p className="text-sm font-semibold">{donationData.userName}</p>
                                <p className="text-xs text-gray-500">{donationData.postedAgo}</p>
                            </div>
                        </>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-1 p-3">
                    {loading ? (
                        <div className="col-span-2 space-y-2 animate-pulse">
                            <div className="h-40 w-full bg-gray-200 rounded-md" />
                            <div className="grid grid-cols-2 gap-1">
                                <div className="h-20 bg-gray-200 rounded-md" />
                                <div className="h-20 bg-gray-200 rounded-md" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <img className="col-span-2 h-40 w-full object-cover rounded-md" src={donationData.images[0]} alt="Main" />
                        </>
                    )}
                </div>

                <div className="px-4 py-3">
                    {loading ? (
                        <div className="animate-pulse space-y-2">
                            <div className="w-3/4 h-4 bg-gray-200 rounded" />
                            <div className="w-1/2 h-3 bg-gray-100 rounded" />
                            <div className="flex justify-between text-sm font-medium mt-2">
                                <div className="w-20 h-2 bg-gray-200 rounded" />
                                <div className="w-16 h-2 bg-gray-200 rounded" />
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full" />
                            <div className="h-12 bg-gray-100 rounded" />
                        </div>
                    ) : (
                        <>
                            <h3 className="text-lg font-semibold">{donationData.title}</h3>
                            <p className="text-sm text-gray-500 mb-1">{donationData.tagline}</p>

                            <div className="flex justify-between mb-2 text-teal-500 text-sm font-medium">
                                <span>Raised ${donationData.raised}</span>
                                <span>Goal ${donationData.goal}</span>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div className="bg-teal-400 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                            </div>

                            <p className="text-sm text-gray-600 mb-3">{donationData.description}</p>

                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full bg-[#03C6DB] hover:bg-cyan-500 cursor-pointer text-white py-2 px-4 rounded-lg font-semibold transition"
                            >
                                Donate Now
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 z-20 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
                        <button onClick={() => setShowModal(false)} className="absolute top-2 right-4 text-gray-400 text-2xl">
                            &times;
                        </button>

                        {/* STEP 1: AMOUNT */}
                        {step === 'amount' && (
                            <>
                                <h2 className="text-center font-[600] text-xl">Donate</h2>

                                <div className="flex justify-center gap-3 mt-5 cursor-pointer">
                                    {[10, 20, 30, 40].map((amt) => (
                                        <button
                                            key={amt}
                                            onClick={() => setSelectedAmount(amt)}
                                            className={`px-4 py-2 cursor-pointer rounded-lg border ${selectedAmount === amt ? 'bg-cyan-100 border-cyan-400' : 'bg-gray-100 border-gray-300'
                                                }`}
                                        >
                                            ${amt}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-6 text-center text-2xl font-bold text-cyan-600">${selectedAmount}</div>

                                <div className="flex justify-between items-center bg-gray-100 p-3 mt-6 rounded-xl">
                                    <span className="text-sm font-medium">Donate Anonymously</span>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={anonymous}
                                            onChange={() => setAnonymous(!anonymous)}
                                            className="sr-only"
                                        />
                                        <div
                                            className={`w-11 h-6 rounded-full relative transition ${anonymous ? 'bg-green-500' : 'bg-gray-300'}`}
                                        >
                                            <div
                                                className={`absolute left-0 top-0 h-6 w-6 bg-white rounded-full shadow transform transition-transform ${anonymous ? 'translate-x-5' : 'translate-x-0'}`}
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div className="mt-4 text-sm flex justify-between">
                                    <span>Available Balance</span>
                                    {walletbalance?.balance ? (
                                    <span className="text-cyan-600 font-semibold">${walletbalance.balance}</span>
                                     ) : (
                                    <span className="text-cyan-600 font-semibold">$0</span>
  )}
                                    
                                </div>

                                {/* <button
                                    onClick={()=>{
                                        navigate("/payment-methods",{
                                            state:{
                                                selectedAmount,
                                                anonymous,
                                                availableBalance,
                                                token,
                                                id
                                            }
                                        })
                                    }}
                                    disabled={selectedAmount === 0}
                                    className={`mt-5 w-full py-3 rounded-lg text-white cursor-pointer font-semibold ${selectedAmount === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-cyan-400 hover:bg-cyan-500'
                                        }`}
                                >
                                    Continue
                                </button> */}
                                <button
                                    onClick={() => {
                                        navigate("/payment-options", {
                                            state: {
                                                selectedAmount,
                                                anonymous,
                                                availableBalance,
                                                token,
                                                id,
                                                data
                                            }
                                        })
                                    }}
                                    disabled={selectedAmount === 0}
                                    className={`mt-5 w-full py-3 rounded-lg text-white cursor-pointer font-semibold ${selectedAmount === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-cyan-400 hover:bg-cyan-500'
                                        }`}
                                >
                                    Continue
                                </button>
                            </>
                        )}


                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
