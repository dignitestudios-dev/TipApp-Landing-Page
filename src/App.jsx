import "./App.css";
import Card from "./pages/Card/Card";
import Routing from "./routes/Routes";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App() {
  const stripePromise = loadStripe('pk_test_51R6afC4DB7xbgT7GzESTES2gFls0hGwv1pCeW5f4JmYjgtpXwvYRPvBixMg3l9lYZr7cLlA738ApuZ8vm4py93ct00NY8pbdbT'); // your public key

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
