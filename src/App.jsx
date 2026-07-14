import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const AboutPage = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About }))
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page-loading" aria-label="Loading page" />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/additional-info" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
