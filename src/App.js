import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Dashboard from "./Pages/Dashboard";
// import Dashboard from "../src/Pages/Dashboard"
// import Error from "./ErrorPage"
// import SingleCountry from "./singleCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        {/* <Route path="/:name" element={<SingleCountry />}></Route> */}
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
