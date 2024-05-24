import { Link } from "react-router-dom";
import Button from "./button";

function ThankYou() {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center flex-col space-y-4 mt-24">
      <div>Icon</div>
      <div>
        <h1 className="font-bold text-2xl">
          Thank you for providing the feedback
        </h1>
        <p className="text-gray-500 text-md">
          we will work towards improving your experience
        </p>
      </div>
      <Link to="/">
        <Button className="bg-tertiary">Close</Button>
      </Link>
    </div>
  );
}

export default ThankYou;
