import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import InventoryGrid from "./Components/InventoryGrid";
import InventoryList from "./Components/InventoryList";
import Inventory from "./Components/Inventory";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route  path='/inventory/:stock_id' element = {<Inventory/>}/>
        <Route path='/inventoryGrid' element = {<InventoryGrid/>}/>
        <Route path='/inventoryList' element = {<InventoryList/>}/>
      </Routes>
      <Footer />  
    </BrowserRouter>
    </>
  );
}

export default App;
