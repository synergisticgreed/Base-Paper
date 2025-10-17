// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaperCard from "./components/PaperCard";
import { papers } from "./data/papers";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <Navbar />
      <Header />

      <main className="container mx-auto px-6 py-12 flex-1" id="papers">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">
          Past Year Papers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
