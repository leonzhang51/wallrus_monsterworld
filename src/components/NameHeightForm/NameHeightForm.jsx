import styles from "./NameHeightForm.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function NameHeightForm() {
  const [inputFirstNameErr, setInputFirstNameErr] = useState(false);
  const [inputHeightErr, setInputHeightErr] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [inputValueErr, setInputValueErr] = useState(false);
  //Navigation hooks from react router library
  const navigate = useNavigate();
  const inputValidate = (inputName, value) => {
    let test = {};
    test[inputName] = value;
  };
  const handleChange = (e) => {
    let test = { firstName: "", height: "" };
    //inputValidate(e.target.name, e.target.value);
    setInputValueErr(false);
    if (e.target.name === "firstName") {
      if (e.target.value) {
        if (e.target.value.match(/^[a-zA-Z]+$/)) {
          test.firstName = e.target.value;
          setInputFirstNameErr(false);
          setInputHeightErr(false);
          setInputValue(test);
        } else {
          setInputFirstNameErr(true);
        }
      } else {
        setInputFirstNameErr(false);
      }
    }
    if (e.target.name === "height") {
      if (e.target.value) {
        if (e.target.value.match(/^[0-9]*$/)) {
          test.height = e.target.value;

          setInputFirstNameErr(false);
          setInputHeightErr(false);
          setInputValue(test);
        } else {
          setInputHeightErr(true);
        }
      } else {
        setInputHeightErr(false);
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
        width: "100vw",

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
