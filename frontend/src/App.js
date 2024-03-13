import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdvantageSection from "./components/AdvantageSection";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Home />
            <AdvantageSection />
          </div>
        } />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        <Route path="/upload" element={<Upload />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
