import React, { useState } from "react";
import Header from "../../header";
import { Button, Input, Alert, AlertIcon, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; 

import "./create.css";

function Create({ addGroup }) {
  const [inputValues, setInputValues] = useState({
    color1: "",
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    color6: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [isSaving, setIsSaving] = useState(false); 
  const toast = useToast();
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const isValidColor = (colorCode) => {
    const colorRegex = /^#([0-9A-F]{3}){1,2}$/i;
    return colorRegex.test(colorCode);
  };

  const handleButtonClick = async () => {
    let allInputsFilled = true;
    let allColorsValid = true;

    for (const key in inputValues) {
      if (!inputValues[key]) {
        allInputsFilled = false;
        break;
      }
    }

    if (allInputsFilled) {
      for (const key in inputValues) {
        if (!isValidColor(inputValues[key])) {
          allColorsValid = false;
          break;
        }
      }
    }

    if (!allInputsFilled) {
      setShowAlert(true);
      setErrorAlert(false);
    } else {
      setShowAlert(false);
      setErrorAlert(false);
      if (!allColorsValid) {
        setErrorAlert(true);
      } else {
        setErrorAlert(false);
        setIsSaving(true); 
        addGroup(Object.values(inputValues));
        toast({
          title: "Color Group created.",
          description: "We've created your color group for you!",
          status: "success",
          duration: 1500, 
          isClosable: true,
        });
        setTimeout(() => {
          setIsSaving(false); 
          navigate("/my-groups");
        }, 1500);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="mainArea">
        <div className="inputArea">
          {Object.keys(inputValues).map((key, index) => (
            <div className="colorBox" key={index}>
              <Input
                name={key}
                value={inputValues[key]}
                onChange={handleInputChange}
                placeholder="Enter Color Code"
              />
              <div
                className="box"
                style={{
                  backgroundColor: isValidColor(inputValues[key])
                    ? inputValues[key]
                    : "",
                }}
              >
                {!isValidColor(inputValues[key]) && "?"}
              </div>
            </div>
          ))}
        </div>
        <Button
          colorScheme="green"
          width="150px"
          onClick={handleButtonClick}
          disabled={isSaving} 
        >
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </div>
      <div className="alertArea">
        {showAlert && (
          <Alert status="error" className="alert">
            <AlertIcon />
            You Must Fill All These Boxes with Valid Color Codes
          </Alert>
        )}
        {errorAlert && (
          <Alert status="error" className="alert">
            <AlertIcon />
            Some Color Codes Are Invalid. Please Check Again.
          </Alert>
        )}
      </div>
    </>
  );
}

export default Create;
