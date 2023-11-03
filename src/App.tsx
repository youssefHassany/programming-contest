import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Videos from "./pages/videos/Videos";
import Rankings from "./pages/rankings/Rankings";
import Header from "./components/navigation/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <main className="overflow-x-hidden min-h-screen relative">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/rankings" element={<Rankings />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
