import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ToasterContainer } from "./components/global/Toaster.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51R6afC4DB7xbgT7GzESTES2gFls0hGwv1pCeW5f4JmYjgtpXwvYRPvBixMg3l9lYZr7cLlA738ApuZ8vm4py93ct00NY8pbdbT"); // Replace with your public Stripe key


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Elements stripe={stripePromise}>
    <GlobalContextProvider>
      <ToasterContainer />
      <App />
    </GlobalContextProvider>
    </Elements>
  </StrictMode>
);
