import styles from "./theStory.module.css";
import { useNavigate } from "react-router-dom";
export default function TheStory() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",

        backgroundImage: `url(${
          window.location.origin + "/img/theStory/storyBg.png"
        })`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={styles.fontHeader}>THE STORY</h1>

      <div className={styles.line}></div>
      <p className={styles.paragraph}>
        Monsters have always existed. Since our earliest recorded history, there
        have been stories about encounters and adventures with these mysterious
        creatures.
      </p>
      <div className={styles.imgContainer}>
        <img
          src={window.location.origin + "/img/theStory/story1.png"}
          alt="history"
          className={styles.img}
        />
      </div>

      <p className={styles.paragraph}>
        You probably don't know this, but monsters live in a world very similar
        to ours. A world just outside of our reach, on the other side of the
        veil.
      </p>
      <p className={styles.paragraph}>
        What would you say if I told you that we found a way to peek at the
        other side? To open a window and let you venture into that other world
        using nothing but your mobile device?
      </p>
      <div className={styles.imgContainer}>
        <img
          src={window.location.origin + "/img/theStory/story2.png"}
          alt="truth"
          className={styles.img}
        />
      </div>

      <div className={styles.paragraph}>
        <p>
          Come and take a peek, at the <em>Secret Life of Monsters.</em>
        </p>
        <p
          onClick={() => navigate("/", { replace: true })}
          style={{ textDecoration: "underline overline" }}
        >
          Back to Home
        </p>
      </div>
    </section>
  );
}
