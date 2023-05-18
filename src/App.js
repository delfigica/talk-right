import React, { useEffect, useState } from "react";
import { getWord } from "./helpers/getWord";
import { CardWord } from "./components/CardWord";

import { Box, IconButton, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
function App() {
  const [word, setWord] = useState({});
  const [cardShow, setCardShow] = useState("front");

  const handlerChangeWord = () => {
    let item = getWord();
    setWord(item);
  };

  useEffect(() => {
    handlerChangeWord();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#2193b0",
        background: "linear-gradient(to right, #2980b9, #2c3e50)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontSize: "2.5em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Talk Right
      </Typography>
        <CardWord  word={word} />

      <IconButton sx={{ margin: "20px 0px" }} onClick={handlerChangeWord}>
        <CachedIcon sx={{ fontSize: "2em", color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default App;
