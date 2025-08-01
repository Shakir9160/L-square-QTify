import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { Box, Stack, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useContext, useEffect, useRef, useState } from "react";
import music from "../../assets/music.mp3";
import { MusicContext } from "../../context/MusicContext";
import styles from "./Music.module.css";

function Music() {
  const audioRef = useRef(null);
  const { selectedSong } = useContext(MusicContext);

  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // When selectedSong changes, load new audio
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !selectedSong) return;

    // Set audio src if dynamic, else fallback
    audio.src = selectedSong.audioSrc || music;
    audio.load();

    setPlay(true);
    setProgress(0);
    setCurrentTime(0);
    setDuration((selectedSong.durationInMs || 0) / 1000); // Convert ms to sec
  }, [selectedSong]);

  // Handle play/pause and progress update
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !selectedSong) return;

    const intendedDuration = selectedSong.durationInMs / 1000;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / intendedDuration) * 100);

      // Stop playback at intended duration
      if (audio.currentTime >= intendedDuration) {
        setPlay(false);
        audio.pause();
      }
    };

    const onLoadedMetadata = () => {
      setDuration(intendedDuration); // Use provided duration, not actual audio file duration
    };

    if (play) {
      audio.play().catch((err) => console.error("Playback error", err));
    } else {
      audio.pause();
    }

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
  }, [play, selectedSong]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio || !selectedSong) return;

    // If song ended, reset to start
    if (progress >= 100) {
      audio.currentTime = 0;

      setProgress(0);
      setCurrentTime(0);
      setPlay(true);
    } else {
      setPlay((prev) => !prev);
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <audio ref={audioRef} src={music} preload="auto" type="audio/mpeg" />

      {selectedSong && (
        <div className={styles.bar}>
          <div className={styles.info}>
            <img src={selectedSong.image} alt="cover" />

            <Stack>
              <span className={styles.title}>{selectedSong.title}</span>
              <span className={styles.artist}>{selectedSong.artists[0]}</span>
            </Stack>
          </div>

          <div className={styles.playArea}>
            <button
              id="music-button"
              className={styles.musicButton}
              onClick={handlePlay}
            >
              {play ? (
                <PauseCircleIcon className={styles.icon} />
              ) : (
                <PlayCircleIcon className={styles.icon} />
              )}
            </button>

            <Box className={styles.progressBox}>
              <Typography className={styles.time}>
                {formatTime(currentTime)}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={progress}
                className={styles.progress}
              />

              <Typography className={styles.time}>
                {formatTime(duration)}
              </Typography>
            </Box>
          </div>
        </div>
      )}
    </>
  );
}

export default Music;
