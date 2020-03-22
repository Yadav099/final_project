import React from "react";
import "./main.scss";
import FileInput from "../../Component/FileInput";

const Home = () => {
  return (
    <div className="fileContainer">
      <FileInput type="image/*" placeHolder="For Image upload" />
      <h2 className="divider">or</h2>
      <FileInput type="video/*" placeHolder="For Video upload" />
      <button type="button" className="submitButton">
        Submit
      </button>
    </div>
  );
};

export default Home;
