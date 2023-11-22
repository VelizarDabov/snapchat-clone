import React, { useCallback, useRef } from "react";
import './WebcamCapture.css';
import Webcam from "react-webcam";
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";



const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
    
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        // No direct history.push, instead, redirect using the passed history prop
        history.push('/preview');
      }, [webcamRef]);
    
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUnchecked className="webcamCapture__button" fontSize="large" onClick={capture}/>
  
    </div>
  );
};

export default WebcamCapture;
