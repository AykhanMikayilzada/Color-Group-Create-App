import * as React from "react";
import { Link } from "react-router-dom";
import { Heading, Button } from "@chakra-ui/react";
import "./home.css";
import Header from "../../header";

function Home() {
  return (
    <>
    <Header />
      <Heading display="flex" justifyContent="center" mt="10">
        Color Group Creating App
      </Heading>
      <div className="buttonArea">
        <Button colorScheme="gray" size="lg">
          <Link to="/create" role="button">Create Your Color Group</Link>
        </Button>
      </div>
      <div className="gifArea">
        <img
          src="https://static.dezeen.com/uploads/2017/07/hi.gif"
          alt="gif"
          width="400px"
        />
      </div>
    </>
  );
}

export default Home;
