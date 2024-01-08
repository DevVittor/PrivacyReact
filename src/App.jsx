import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import NavBar from "./components/NavBar";
//Pages
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;