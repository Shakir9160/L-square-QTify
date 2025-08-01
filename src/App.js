import { StyledEngineProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  fetchFAQs,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api/api";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { MusicContext } from "./context/MusicContext";

function App() {
  const [data, setData] = useState({});
  const [selectedSong, setSelectedSong] = useState(null);

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        // Object.assign would also work
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("faqs", fetchFAQs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], faqs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <MusicContext.Provider value={{ selectedSong, setSelectedSong }}>
          <Navbar searchData={[...topAlbums, ...newAlbums]} />
          <Outlet context={{ data: { topAlbums, newAlbums, songs, faqs } }} />
        </MusicContext.Provider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
