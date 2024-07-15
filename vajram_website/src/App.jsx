 
 import Navbar from "./components/Navbar"
 import Featured from "./components/Featured"
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import New from "./components/New";

  

function App() {
 

  return (
    <>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Featured/>} />
        {/* <Route path="/new" element={<New/>} />
         */}
        
      </Routes>
    
    </Router>
    </>
  )
}

export default App
