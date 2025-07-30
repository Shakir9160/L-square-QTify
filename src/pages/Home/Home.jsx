import { Divider, Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import FAQs from "../../components/FAQs/FAQs";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./Home.module.css";

export default function Home() {
  const { data } = useOutletContext();

  const { newAlbums, topAlbums, songs, faqs } = data;

  return (
    <>
      <Hero />

      <div className={styles.wrapper}>
        <Stack divider={<Divider flexItem />}>
          {topAlbums && (
            <Section title="Top Albums" data={topAlbums} type="album" />
          )}

          {newAlbums && (
            <Section title="New Albums" data={newAlbums} type="album" />
          )}

          {songs && (
            <Section
              title="Songs"
              data={songs}
              filterSource={fetchFilters}
              type="song"
            />
          )}

          {faqs && <FAQs faqs={faqs} />}
        </Stack>
      </div>
    </>
  );
}
