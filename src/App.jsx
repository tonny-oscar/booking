import React from "react";
import Booking from "./components/Booking";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Our Booking App</h1>
        
        {/* Booking Component */}
        <section className="mb-8">
          <Booking />
        </section>
      </div>
    </div>
  );
}

export default App;
