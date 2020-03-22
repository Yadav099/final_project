import React from "react";
import "./main.scss";
import upload from "../../Assets/uupload.jpg";
import { IoIosCloudUpload } from "react-icons/io";
interface IFileInput {
  placeHolder: string;
  type: string;
}
const FileInput = (prop: IFileInput) => {
  return (
    <>
      <h3 className="heading"> {prop.placeHolder}</h3>
      <div className="imageFileWrapper">
        <div className="fileWrapper">
          <input
            type="file"
            id="file"
            accept={prop.type}
            capture="camera"
            aria-label="File browser example"
          />
        </div>
        <img src={upload}></img>
      </div>
    </>
  );
};
export default FileInput;
