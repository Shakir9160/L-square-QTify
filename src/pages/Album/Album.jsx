import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import {
  Button,
  CircularProgress,
  PaginationItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNewAlbums, fetchTopAlbums } from "../../api/api";
import Music from "../../components/Music/Music";
import { MusicContext } from "../../context/MusicContext";
import styles from "./Album.module.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useTheme } from "@mui/material/styles";

export default function Album() {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { setSelectedSong } = useContext(MusicContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  const [album, setAlbum] = useState(null);
  const [page, setPage] = useState(1);

  const songsPerPage = 13;
  const startIndex = (page - 1) * songsPerPage;
  const endIndex = startIndex + songsPerPage;
  const currentSongs = album ? album.songs.slice(startIndex, endIndex) : [];

  const fetchAlbumData = async () => {
    try {
      const newData = await fetchNewAlbums();
      const topData = await fetchTopAlbums();

      const allData = [...newData, ...topData];

      const foundAlbum = allData.find((item) => item.id === id);

      setAlbum(foundAlbum);
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
  };

  const totalDuration = () => {
    let durationInMillis = album.songs.reduce(
      (acc, curr) => curr.durationInMs + acc,
      0
    );

    const minutes = Math.floor(durationInMillis / 60000); // 1 minute = 60,000 milliseconds

    return `${minutes} min`;
  };

  const handleShuffle = () => {
    if (!album || !album?.songs || !Array.isArray(album?.songs)) {
      enqueueSnackbar("No songs found to shuffle!", {
        variant: "info",
      });
      return;
    }

    const shuffledSongs = [...album.songs].sort(() => 0.5 - Math.random());

    setAlbum({ ...album, songs: shuffledSongs });
    setSelectedSong(shuffledSongs[0]);

    enqueueSnackbar("Songs shuffled!", {
      variant: "success",
    });
  };

  const handleAddToLibrary = () => {
    enqueueSnackbar("All songs added to library!", {
      variant: "success",
    });
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchAlbumData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!album) {
    return (
      <div className={styles.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={styles.albumDetails}>
      <Stack className={styles.stack} spacing={2}>
        <ArrowCircleLeftOutlinedIcon
          className={styles.arrowIcon}
          onClick={() => navigate("/")}
        />

        <div className={styles.header}>
          <img src={album.image} alt={album.title} />

          <div>
            <h3 className={styles.albumTitle}>{album.title}</h3>

            <div>
              <p className={styles.albumDesc}>{album.description}</p>

              <p className={styles.albumMeta}>
                {album.songs.length} songs{" "}
                <span style={{ color: "white" }}>•</span> {totalDuration()}{" "}
                <span style={{ color: "white" }}>•</span> {album.follows}{" "}
                Follows
              </p>

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={3}
                alignItems="center"
                justifyContent="flex-start"
                sx={{ mt: 3, marginBottom: isMobile ? 2 : 0 }}
              >
                <Button
                  className={styles.shuffleBtn}
                  fullWidth={isMobile}
                  variant="contained"
                  startIcon={<ShuffleIcon className={styles.shuffleIcon} />}
                  onClick={handleShuffle}
                >
                  Shuffle
                </Button>

                <Button
                  className={styles.addBtn}
                  fullWidth={isMobile}
                  variant="outlined"
                  startIcon={<LibraryAddIcon className={styles.addIcon} />}
                  onClick={handleAddToLibrary}
                >
                  Add to Library
                </Button>
              </Stack>
            </div>
          </div>
        </div>

        <div className={styles.pagination}>
          <Pagination
            count={Math.ceil(album.songs.length / songsPerPage)}
            page={page}
            onChange={handleChange}
            size="small"
            shape="rounded"
            color="primary"
            siblingCount={1}
            boundaryCount={1}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#34C94B",
                    color: "black",
                  },
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                  borderRadius: "50%",
                  color: "white",
                }}
              />
            )}
          />
        </div>

        <TableContainer component={Paper} className={styles.table}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell> Title </TableCell>
                {!isMobile && <TableCell> Artist </TableCell>}
                <TableCell align="right"> Duration </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentSongs.map((song, index) => (
                <TableRow key={index} onClick={() => setSelectedSong(song)}>
                  <TableCell className={styles.titleCell}>
                    <img src={song.image} alt={song.title} />
                    <span>{song.title}</span>
                  </TableCell>

                  {!isMobile && (
                    <TableCell>{song.artists.join(", ")}</TableCell>
                  )}

                  <TableCell align="right">
                    {Math.ceil(song.durationInMs / 60000)} min
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <Music />
    </div>
  );
}
