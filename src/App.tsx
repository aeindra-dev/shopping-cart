import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/features/Hero/HeroSection";
import Layout from "./layout/Layout";
import Accessories from "./pages/AccessoriesPage";
import Brands from "./pages/BrandsPage";
import Collection from "./pages/CollectionPage";
import Kids from "./pages/KidsPage";
import Men from "./pages/MenPage";
import Women from "./pages/WomenPage";

function App() {
  return <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/kids" element={<Kids />}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/brands" element={<Brands/>}/>
      </Route>
    </Routes>
  </>
}

export default App
