import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"
import ScrollToTop from "./components/ScrollToTop";
// import { Analytics } from "@vercel/analytics/next"
import SplashCursor from './components/ui/SplashCursor'

const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("./pages/About").then((module) => ({ default: module.About }))
);

function App() {

  return (
    <>
      {/* <SplashCursor /> */}
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="route-shell" aria-hidden="true" />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/additional-info" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
