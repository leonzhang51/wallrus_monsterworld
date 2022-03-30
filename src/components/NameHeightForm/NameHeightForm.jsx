import styles from "./NameHeightForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function NameHeightForm() {
  const [inputFirstNameErr, setInputFirstNameErr] = useState(false);

  const [inputValue, setInputValue] = useState();
  const [inputValueErr, setInputValueErr] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let test = { firstName: "", height: "" };
    setInputValueErr(false);
    if (e.target.name === "firstName") {
      if (e.target.value.match(/^[a-zA-Z]+$/)) {
        test.firstName = e.target.value;
        setInputFirstNameErr(false);
        setInputValue(test);
      } else {
        setInputFirstNameErr(true);
      }
    }
    if (e.target.name === "height") {
      if (e.target.value.match(/\d+/)) {
        test.height = e.target.value;
        setInputFirstNameErr(false);
        setInputValue(test);
      } else {
        setInputFirstNameErr(true);
      }
    }
  };
  const submit = () => {
    if (inputValue) {
      navigate("/", { replace: true });
    } else {
      setInputValueErr(true);
    }
  };
  return (
    <section
      style={{
        height: "100vh",
        width: "375px",

        backgroundImage: `url(${
          window.location.origin + "/img/home/AppBackground.jpg"
        })`,
        backgroundSize: "375px 860px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={styles.fontHeader}>THE SECRET LIFE OF MONSTERS</h1>

      <div className={styles.line}></div>
      <p className={styles.lorem}>
        Before we start, can you tell us a little bit about yourself?
      </p>
      <div className={styles.inputFirstNameBlock}>
        <p className={styles.spanInput}>YOUR FIRST NAME</p>
        <input
          name="firstName"
          className={styles.inputFirstName}
          onChange={handleChange}
          onClick={() => setInputFirstNameErr(false)}
        />
        {inputFirstNameErr && (
          <p style={{ color: "red", textAlign: "center", marginTop: "-1px" }}>
            Characters Only
          </p>
        )}
      </div>
      <div className={styles.inputHeightBlock}>
        <p className={styles.spanInput}>YOUR HEIGHT</p>
        <input
          type="number"
          name="height"
          className={styles.inputHeight}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonNext} onClick={submit}>
          NEXT
        </button>
        {inputValueErr && (
          <p style={{ color: "red", textAlign: "center", marginTop: "" }}>
            Please share your name and height!
          </p>
        )}
      </div>
    </section>
  );
}
