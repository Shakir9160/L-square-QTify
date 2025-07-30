import { Chip, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ data, type }) {
  const { id, image, follows, likes, title, songs } = data;

  const navigate = useNavigate();

  return (
    <Tooltip
      title={type === "album" ? `${songs?.length} songs` : ""}
      placement="top"
      arrow
    >
      <div
        className={styles.wrapper}
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/album/${id}`);
        }}
      >
        <div className={styles.card}>
          <img
            src={image}
            alt={type === "album" ? "album" : "song"}
            loading="lazy"
          />

          <div className={styles.banner}>
            <Chip
              label={type === "album" ? `${follows} Follows` : `${likes} Likes`}
              size="small"
              className={styles.chip}
            />
          </div>
        </div>

        <div className={styles.titleWrapper}>
          <p>{title}</p>
        </div>
      </div>
    </Tooltip>
  );
}

export default Card;
