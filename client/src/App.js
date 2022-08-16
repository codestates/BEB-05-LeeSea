import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import { Home, Profile, Create, Explore, TokenDetail } from './pages';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/BEB-05-LeeSea" element={<Home />} />
          <Route path="/BEB-05-LeeSea/explore" element={<Explore />} />
          <Route path="/BEB-05-LeeSea/explore/:tokenId" element={<TokenDetail />} />
          <Route path="/BEB-05-LeeSea/create" element={<Create />} />
          <Route path="/BEB-05-LeeSea/profile" element={<Profile />} />
      </Routes>
      <footer className='site-footer'>
        <p className='site-footer-text'>Project Team LeeSEA 🚀 </p>
      </footer>
    </div>
  );
}

export default App;