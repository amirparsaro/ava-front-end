import { useState } from "react";
import "../../../App.css";
import LinkForm from "./LinkForm";
import { useContext, useEffect } from "react";
import { InputContext } from "./InputContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadType } from "../../../features/lastRoute";
import { fileURL } from "../../../features/file";

const Link = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  function handleInputChange(value) {
    dispatch(fileURL(value));
    navigate("/convert/upload/review");
  }

  useEffect(() => {
    dispatch(uploadType("link"));
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
