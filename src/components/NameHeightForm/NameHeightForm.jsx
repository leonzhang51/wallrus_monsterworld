import styles from "./NameHeightForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function NameHeightForm() {
  const [inputFirstNameErr, setInputFirstNameErr] = useState(false);
  const [inputHeightErr, setInputHeightErr] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [inputValueErr, setInputValueErr] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    let test = { firstName: "", height: "" };
    console.log(e.target.name);
    setInputValueErr(false);
    if (e.target.name === "firstName") {
      if (e.target.value.match(/^[a-zA-Z]+$/)) {
        test.firstName = e.target.value;
        setInputFirstNameErr(false);
        setInputHeightErr(false);
        setInputValue(test);
      } else {
        setInputFirstNameErr(true);
      }
    }
    if (e.target.name === "height") {
      if (e.target.value.match(/\d+/g)) {
        test.height = e.target.value;

        setInputFirstNameErr(false);
        setInputHeightErr(false);
        setInputValue(test);
      } else {
        setInputHeightErr(true);
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
        width: "100VW",

        backgroundImage: `url(${
          window.location.origin + "/img/home/AppBackground.jpg"
        })`,
        backgroundSize: "100VW 100VH",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={styles.fontHeader}>THE SECRET LIFE OF MONSTERS</h1>

      <div className={styles.line}></div>
      <p className={styles.description}>
        Before we start, can you tell us a little bit about yourself?
      </p>
      <div className={styles.inputBlock}>
        <p className={styles.spanInput}>YOUR FIRST NAME</p>
        <input
          name="firstName"
          className={styles.input}
          onChange={handleChange}
          onClick={() => setInputFirstNameErr(false)}
        />
        {inputFirstNameErr && (
          <p style={{ color: "red", textAlign: "center", marginTop: "-1px" }}>
            Please input Characters Only
          </p>
        )}
      </div>
      <div className={styles.inputBlock}>
        <p className={styles.spanInput}>YOUR HEIGHT</p>
        <input name="height" className={styles.input} onChange={handleChange} />
        {inputHeightErr && (
          <p style={{ color: "red", textAlign: "center", marginTop: "-1px" }}>
            Please input number only
          </p>
        )}
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
