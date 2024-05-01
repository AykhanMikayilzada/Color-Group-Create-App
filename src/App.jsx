import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/pages/home";
import MyGroups from "./components/pages/my-groups";
import Create from "./components/pages/create";
import Page404 from "./components/pages/page404";

import "./assets/global.css";

function App() {
  const [groups, setGroups] = useState([]);

  const addGroup = (newGroup) => {
    setGroups([...groups, newGroup]);
  };

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/my-groups"
            element={<MyGroups groups={groups} />}
          />
          <Route path="/create" element={<Create addGroup={addGroup} />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
