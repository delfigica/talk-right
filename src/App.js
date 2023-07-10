import React, { useEffect, useState } from "react";
import { getWord } from "./helpers/getWord";
import { CardWord } from "./components/CardWord";

import { Box, Button, Typography } from "@mui/material";


function App() {
  const [word, setWord] = useState({});
  const [showWord, setShowWord] = useState(true);

  const handlerChangeWord = () => {
    let item = getWord();
    setWord(item);
    setShowWord(true)
  };

  useEffect(() => {
    handlerChangeWord();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#757F9A",
        background: "linear-gradient(to right, #D7DDE8, #757F9A)",
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
          color: "#232526",
          fontSize: "2.5em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: 600
        }}
      >
        Talk Right
      </Typography>
      <CardWord word={word} showWord={showWord} setShowWord={setShowWord} />
      <Button
        onClick={handlerChangeWord}
        variant="contained"
        sx={{
          fontWeight: 600,
          width: "200px",
          margin: "20px 0",
          background: "#232526",
          "&:hover": { background: "#424345" },
        }}
      >
        Next word
      </Button>
    </Box>
  );
}

export default App;
