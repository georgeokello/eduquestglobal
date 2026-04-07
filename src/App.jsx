import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";


import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contacts";
import Courses from "./pages/Courses";
import Universities from "./pages/Universities";
import Offers from "./pages/Offers";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
  

      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;