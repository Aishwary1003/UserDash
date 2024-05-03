import Dashboard from "./components/Dashboard";
import Transactions from "./pages/Transactions";
import { Routes,Route } from "react-router-dom";
import OrderHistory from "./pages/OrderHistory";
import Support from "./pages/Support";
import ChatHistory from "./pages/ChatHistory";
import Home from "./pages/Home";


function App() {
  return (
    <div className="flex  overflow-hidden">

    <Dashboard/>
    

  <div className="h-screen w-4/5">
       <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/Transactions" element={<Transactions/>}/>
               <Route path="/OrderHistory" element={<OrderHistory/>}/>
               <Route path="/Support" element={<Support/>}/>
               <Route path="/ChatHistory" element={<ChatHistory/>}/>
       </Routes>
  </div>
 

    </div>
  );
}

export default App;
