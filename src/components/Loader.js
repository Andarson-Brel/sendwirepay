import React from "react";
import "@lottiefiles/lottie-player";

const Loader = ({ showLoader }) => {
  return (
    <div className={`loader ${showLoader ? "" : "hidden"}`}>
      <lottie-player
        autoplay
        mode="normal"
        src="https://lottie.host/e176ba5f-9c12-4240-9d98-96601d0ab607/2S8hsgkjYJ.json"
      ></lottie-player>
    </div>
  );
};

export default Loader;
