import React from "react";
import {Box} from "@mui/material";
import Cards from "./Cards";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Cards />
    </Box>
  );
}

export default Feed;
