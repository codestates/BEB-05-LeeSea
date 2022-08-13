import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import { Home, Profile, Create, Explore, TokenDetail } from './pages';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:tokenId" element={<TokenDetail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;