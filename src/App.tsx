import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Cont = lazy(() => import("Src/Cont"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"s"}>
          <main id="main">
            <Routes>
            <Route path="/catalog" element={<Cont />} />
            </Routes>
          </main>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
