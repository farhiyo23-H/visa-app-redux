import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisaFormPage from "./pages/VisaFormPage";
import ReviewPage from "./pages/ReviewPage";
import SuccessPage from "./pages/SuccessPage";
import PassportFormPage from "./pages/PassportFormPage";
import UsersList from "./pages/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apply" element={<VisaFormPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/apply_passport" element={<PassportFormPage />} />
      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
}

export default App;
