import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/contact/Contact";
import { Gallery } from "./components/gallery/Gallery";
import { Home } from "./components/home/Home";
import { NotFound } from "./components/notfound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
