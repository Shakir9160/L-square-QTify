import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    // <div className="App">
    //   <Navbar searchData={[]} />
    // </div>
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[]} />
        <Hero />
      </StyledEngineProvider>
    </>
  );
}

export default App;
