import { useState } from "react";
import "../../../App.css";
import LinkForm from "./LinkForm";
import { useContext } from "react";
import { InputContext } from "./InputContext";

const Link = () => {
  const { handleInputValue } = useContext(InputContext);
  
  function handleInputChange(value) {
    handleInputValue(value);
  }

  return (
    <div className="link-container">
      <LinkForm onInputChange={handleInputChange} />
      <p className="link-explanation">
        نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد و دکمه را فشار
        دهید.
      </p>
    </div>
  );
};

export default Link;
