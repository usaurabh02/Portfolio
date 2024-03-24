import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Loading } from "./components/Loading";
import { Overlay } from "./components/Overlay";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setIsLoading(window.innerWidth < 600 && isPortrait);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Overlay />
                </>
              }
            />
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
