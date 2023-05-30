import { Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./scenes/screens/Home";
import HomeDetail from "./scenes/screens/HomeDetail";


function App() {

  return (
        <div className="app">
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/player/:id" element={<HomeDetail />} />
            </Routes>
          </main>
        </div>
  );
}

export default App;
