import React from "react";
const api = {
  key: "5388a036a35b0a44ac66946d0dcd1145",
  base: "https//api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
         <div className="search-box">
            <input 
            type="text"
            className="search-bar"
            placeholder="Search..."/>
         </div>
      </main>
    </div>
  );
}

export default App;
