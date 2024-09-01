import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import TeachersPage from "./pages/TeachersPage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
