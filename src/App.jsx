import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentsPage from "./pages/StudentsPage";
import TeachersPage from "./pages/TeachersPage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/students" element={<StudentsPage />} />
        <Route exact path="/teachers" element={<TeachersPage />} />
      </Routes>
    </Router>
  );
};
export default App;
