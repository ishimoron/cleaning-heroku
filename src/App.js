import React from "react";
import Routes from "./Routes";
import ScrollToTop from "./modules/ScrollToTop/ScrollToTop";

function App() {
  return (
      <div className="App">
        <ScrollToTop />
        <Routes />
      </div>
  );
}

export default App;
