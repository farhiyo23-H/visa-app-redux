import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-center p-8" >
      <h1 className="text-3xl font-bold mb-4" >Visa Application Portal</h1>
      <Link to="/apply" className="text-blue-500 underline">
        Start Your Application
          </Link>
          <br />
      <Link to="/apply_passport" className="text-blue-500 underline">
        Apply Passport
      </Link>
    </div>
  );
}
