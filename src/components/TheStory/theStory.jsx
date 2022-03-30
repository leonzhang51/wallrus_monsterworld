import styles from "./theStory.module.css";
import { useNavigate } from "react-router-dom";
export default function TheStory() {
  const navigate = useNavigate();
  return (
    <section
      style={{
        height: "100vh",
        width: "375px",

        backgroundImage: `url(${
          window.location.origin + "/img/theStory/storyBg.png"
        })`,
        backgroundSize: "375px 1000px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={styles.fontHeader}>THE STORY</h1>

      <div className={styles.line}></div>
      <p className={styles.paragraph1}>
        Monsters have always existed. Since our earliest recorded history, there
        have been stories about encounters and adventures with these mysterious
        creatures.
      </p>
      <img
        src={window.location.origin + "/img/theStory/story1.png"}
        alt="history"
        className={styles.imgHistory}
      />
      <p className={styles.paragraph2}>
        You probably don't know this, but monsters live in a world very similar
        to ours. A world just outside of our reach, on the other side of the
        veil.
      </p>
      <p className={styles.paragraph3}>
        What would you say if I told you that we found a way to peek at the
        other side? To open a window and let you venture into that other world
        using nothing but your mobile device?
      </p>
      <img
        src={window.location.origin + "/img/theStory/story2.png"}
        alt="truth"
        className={styles.imgTruth}
      />
      <div className={styles.paragraph4}>
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
