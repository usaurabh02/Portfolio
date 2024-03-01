import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";


function App() {

  return (
   
      <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                
                  <Hero />
                 
                
              }
            />
          </Routes>
      </Suspense>

  );
}

export default App;
