import { Heading, Box } from "@chakra-ui/react";
import React from "react";

function Page404() {
  return (
    <>
      <Heading
        as="h1"
        size="4xl"
        noOfLines={1}
        display="flex"
        justifyContent="center"
      >
        404 Not Found!
      </Heading>
      <Box display="flex" justifyContent="center" mt="50px">
        <img
          src="https://media0.giphy.com/media/xT9Igpm06uM5OJ5lVS/giphy.gif?cid=6c09b9523l0izk6uvjaf44bfgpiny5k4y4pvphbyn32rnbrc&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          alt="gid"
        />
      </Box>
    </>
  );
}

export default Page404;
