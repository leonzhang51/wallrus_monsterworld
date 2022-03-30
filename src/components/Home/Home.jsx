import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  let navigate = useNavigate();
  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",

        backgroundImage: `url(${
          window.location.origin + "/img/home/AppBackground.jpg"
        })`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className={styles.welcomeTo}>Welcome to</p>

      <h1 className={styles.fontHeader}>THE SECRET LIFE OF MONSTERS</h1>

      <div className={styles.line}></div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex nam
        labore rerum Esse ex nam labore rerum
      </p>
      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => navigate("/theStory", { replace: true })}
        >
          ABOUT THE MONSTER'S WORLD
        </button>
        <button
          className={styles.button}
          onClick={() => navigate("/nameHeightForm", { replace: true })}
        >
          START THE EXPERIENCE
        </button>
      </div>

      <img
        src={window.location.origin + "/img/home/monster.png"}
        alt="monster"
        className={styles.monster}
      />
    </section>
  );
}
