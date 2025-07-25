import { useState } from "react";
import "../../../App.css";
import LinkForm from "./LinkForm";
import { useContext, useEffect } from "react";
import { InputContext } from "./InputContext";
import { useLocation } from "react-router-dom";

const Link = () => {
  const { handleInputValue, lastRoute } = useContext(InputContext);
  const location = useLocation();

  function handleInputChange(value) {
    handleInputValue(value);
  }

  useEffect(() => {
    lastRoute(location.pathname);
  }, [location.pathname]);

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
