import React, { useEffect, useState } from "react";

import Header from "./components/Navbar";
import Home from "./pages/Home";
import Loader from "./components/Loader";

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showAppBody, setShowAppBody] = useState(false);

  useEffect(() => {
    // Hide loader after 6 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
      setShowAppBody(true);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="App">
      <Loader showLoader={showLoader} />
      {showAppBody && (
        <div className="App-body">
          <Header />
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
