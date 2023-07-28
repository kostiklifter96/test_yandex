import { useState } from "react";

import "./filesList.css";

export const FilesList = ({ file, files, setFiles }) => {
  const [imageURL, setImageUrl] = useState("");
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setImageUrl(reader.result);
  };

  const handleDelete = () => {
    setFiles(files.filter((f) => f.name !== file.name));
  };

  return (
    <div className="file_item">
      <div className="file_info">
        <img src={imageURL} alt="" className="file_img" />
        <div className="file_descr">
          <p className="file_name">{file.name}</p>
          <p className="file_size">{file.size / 1000} Кб</p>
        </div>
      </div>
      <div className="file_delete" onClick={handleDelete}>
        &#10006;
      </div>
    </div>
  );
};
