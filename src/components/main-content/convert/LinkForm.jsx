import "../../../App.css";
import lightChainIcon from "../../../assets/images/chain-Icon-white.svg";
import { useState } from "react";

const LinkForm = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onInputChange(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="link-form" onSubmit={handleSubmit}>
      <input
        id="link-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="example.com/sample.mp3"
        required
      ></input>
      <button type="submit">
        <img src={lightChainIcon}></img>
      </button>
    </form>
  );
};

export default LinkForm;
