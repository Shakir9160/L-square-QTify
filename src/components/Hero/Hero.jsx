import { Box, Grid, Typography } from "@mui/material";
import headphonesImg from "../../assets/hero_headphones.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <Box className={styles.hero}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} className={styles.heroText}>
          <Typography variant="h4" component="h1">
            100 Thousand Songs, ad-free
          </Typography>

          <Typography variant="h4" component="h1">
            Over thousands podcast episodes
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} className={styles.heroImage}>
          <img src={headphonesImg} width="100%" alt="headphones" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
