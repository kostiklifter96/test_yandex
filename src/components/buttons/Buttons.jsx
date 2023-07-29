import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { YandexApi } from "../../API/yandexApi";
import { showToastMessage } from "../../utils/showToastMessage";
import "./buttons.css";

export const Buttons = ({ files, setFiles }) => {
  const inputFileRef = useRef(null);
  const [sendStatus, setSendStatus] = useState({
    elem: null,
    status: null,
  });

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    e.target.value = "";
  };

  const handlerClick = () => {
    YandexApi.getURL(files, setFiles, setSendStatus);
  };

  useEffect(() => {
    showToastMessage(sendStatus);
  }, [sendStatus]);

  return (
    <>
      <ToastContainer />
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
