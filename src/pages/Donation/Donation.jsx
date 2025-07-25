import React, { useContext, useState } from 'react';
import { FaHeart, FaCommentDots } from 'react-icons/fa';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { GlobalContext } from "../../context/GlobalContext";

const Donation = () => {
    const { theme } = useContext(GlobalContext);

    const [step, setStep] = useState('amount'); // 'amount', 'payment', 'success'
    const [showModal, setShowModal] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [anonymous, setAnonymous] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const donationData = {
        userId: 'user_12345',
        userName: 'Simmi Pal',
        userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        postedAgo: '4 hrs ago',
        images: [
            'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkzLXBtLTI3NTcuanBn.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIn9x8BuZARl6oHEqTJpFKFyF2-XFQwR58ILqe8tn6c46jdbsU42tHfA4jfyCp5OteCo&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIn9x8BuZARl6oHEqTJpFKFyF2-XFQwR58ILqe8tn6c46jdbsU42tHfA4jfyCp5OteCo&usqp=CAU',
        ],
        title: 'Help Build a Better Future',
        tagline: 'Support education for underprivileged kids.',
        raised: 1450,
        goal: 5000,
        description: 'Your donation can bring real change. Join us in making education accessible to all.',
    };

    const availableBalance = 2500;
    const progress = Math.min((donationData.raised / donationData.goal) * 100, 100);

    const handleDonateNow = () => {
        setStep('payment');
    };

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

    return (
        <div className={`flex items-center justify-center min-h-screen bg-white relative ${theme == "light"
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
                    className="absolute top-0 w-[190px] md:w-[60%]  right-0"
                    alt=""
                />
            </div>
            {/* Main Card */}
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden z-10">
                <div className="flex items-center p-4">
                    <img className="w-10 h-10 rounded-full" src={donationData.userAvatar} alt={donationData.userName} />
                    <div className="ml-3">
                        <p className="text-sm font-semibold">{donationData.userName}</p>
                        <p className="text-xs text-gray-500">{donationData.postedAgo}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-1 p-3">
                    <img className="col-span-2 h-40 w-full object-cover rounded-md" src={donationData.images[0]} alt="Main" />
                    <img className="h-20 w-full object-cover rounded-md" src={donationData.images[1]} alt="Sub1" />
                    <img className="h-20 w-full object-cover rounded-md" src={donationData.images[2]} alt="Sub2" />
                </div>

                <div className="px-4 py-3">
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
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 z-20 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
                        {/* Close */}
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
                                    <span className="text-cyan-600 font-semibold">${availableBalance.toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={handleDonateNow}
                                    disabled={selectedAmount === 0}
                                    className={`mt-5 w-full py-3 rounded-lg text-white cursor-pointer font-semibold ${selectedAmount === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-cyan-400 hover:bg-cyan-500'
                                        }`}
                                >
                                    Continue
                                </button>
                            </>
                        )}

                        {/* STEP 2: PAYMENT METHOD */}
                        {step === 'payment' && (
                            <>
                                <h2 className="text-center font-semibold text-xl mb-4">Payment Method</h2>

                                <div className="space-y-3">
                                    {[
                                        { name: 'Credit Card', icon: <BsCreditCard2BackFill />, value: 'card' },
                                        { name: 'Venmo', icon: <BsCreditCard2BackFill />,  value: 'venmo' },
                                        { name: 'Cash App',icon: <BsCreditCard2BackFill />,  value: 'cashapp' }
                                    ].map((method) => (
                                        <button
                                            key={method.value}
                                            onClick={() => {
                                                setSelectedPayment(method.value);
                                                handlePaymentComplete();
                                            }}
                                            className="flex justify-between items-center w-full p-3 bg-gray-100 rounded-lg"
                                        >
                                            <div className="flex gap-3 items-center">
                                                {method.icon}
                                                <span>{method.name}</span>
                                            </div>
                                            <span>&#8250;</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {/* STEP 3: SUCCESS */}
                        {step === 'success' && (
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                                    <img src="./done.png" alt="" />
                                </div>
                                <h3 className="text-lg font-semibold">Donation Successful!</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Thank you for your generous donation! Your contribution is helping make a difference. We appreciate your support!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
