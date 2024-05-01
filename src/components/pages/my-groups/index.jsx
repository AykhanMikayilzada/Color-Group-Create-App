import React, { useState, useEffect } from "react";
import Header from "../../header";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useToast } from "@chakra-ui/react";
import "./myGroups.css";

function MyGroups({ groups }) {
  const [storedGroups, setStoredGroups] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const storedData = localStorage.getItem("colorGroups");
    if (storedData) {
      setStoredGroups(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("colorGroups", JSON.stringify(groups));
  }, [groups]);

  const handleCopy = (colorCode) => {
    navigator.clipboard.writeText(colorCode);
    toast({
      title: "Color Code Copied",
      description: "Color code copied to clipboard!",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <>
      <Header />
      <Box className="main">
        {storedGroups.map((group, index) => (
          <Box key={index} className="group">
            <Heading
              display="flex"
              justifyContent="center"
              mb="10px"
              size="md"
            >
              Color-Group {index + 1}
            </Heading>
            <Box m="0" p="0" className="mainBox">
              {group.map((color, colorIndex) => (
                <CopyToClipboard
                  key={colorIndex}
                  text={color}
                  onCopy={() => handleCopy(color)}
                >
                  <Box
                    key={colorIndex}
                    m="0"
                    p="0"
                    bg={color}
                    w="100px"
                    h="100px"
                    cursor="pointer"
                  />
                </CopyToClipboard>
              ))}
            </Box>
          </Box>
        ))}
        {storedGroups.length === 0 && (
          <Text textAlign="center">No Color Group Added Yet</Text>
        )}
      </Box>
    </>
  );
}

export default MyGroups;
