import React, { useRef, useState } from "react";

import { YandexApi } from "../../API/yandexApi";
import "./buttons.css";

export const Buttons = ({ files, setFiles }) => {
  const inputFileRef = useRef(null);
  const [sendStatus, setSendStatus] = useState("null");

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    e.target.value = "";
  };

  const handlerClick = () => {
    YandexApi.getURL(files, setFiles, setSendStatus);
  };

  return (
    <>
      {sendStatus === 201 && (
        <h1 style={{ color: "white", right: 0, top: 0 }}>sending</h1>
      )}
      <button className="btn" onClick={() => inputFileRef.current.click()}>
        {files.length < 1
          ? "Выберите файлы"
          : `Выбрано ${files.length} файла(-ов)`}
      </button>
      <input
        className="hidden"
        type="file"
        onChange={handleChange}
        multiple
        ref={inputFileRef}
        accept="image/jpeg, image/jpg"
      />
      <button
        className="btn"
        onClick={handlerClick}
        disabled={files.length > 100 && true}
      >
        {files.length <= 100
          ? "Отправить на Yandex Disk"
          : "Нельзя отправить более 100 файлов"}
      </button>
    </>
  );
};
