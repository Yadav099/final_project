import React from "react";
import "./main.scss";
import FileInput from "../../Component/FileInput";
import axios from "axios";

const Home = () => {
  const [video, setVideo] = React.useState("");
  var my: Blob;
  const updateVideo = (Event: any) => {
    // setVideo(Event.target.files);
    my = Event.target.files[0];
    console.log(my);
  };
  const handleClick = () => {
    var formData = new FormData();
    formData.append("Video", my);
    axios
      .post("http://127.0.0.1:5000/Dashboard", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(function(response) {
        if (response.status === 200) {
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="fileContainer">
      <FileInput
        type="video/*"
        placeHolder="For Video upload"
        updateVideo={updateVideo}
      />
      <h1>{video}</h1>
      <button
        type="button"
        className="submitButton"
        onClick={() => handleClick()}
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
