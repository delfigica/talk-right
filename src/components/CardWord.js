import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
export const CardWord = ({ word, showWord, setShowWord }) => {
  const [wordApi, setWordApi] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.word}`)
      .then((res) => {
        let objWithAudio = res.data[0].phonetics.filter(
          (obj) => obj.audio.length > 0
        );
        setWordApi(objWithAudio[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [word]);

  const play = () => {
    let audio = document.getElementById("audio");
    audio.play();
  };

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(word);
  return (
    <Box
      sx={laptop ? {
        width: "680px",
        height: "300px",
        border: "1px solid  rgba(255, 255, 255, 0.222)",
        borderRadius: "5px",
        padding: "2em",
        backgroundColor: "rgba(255, 255, 255, 0.074)",
        backdropFilter: "blur(20px)",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      } : {
        width: "90%",
        height: "300px",
        border: "1px solid  rgba(255, 255, 255, 0.222)",
        borderRadius: "5px",
        padding: "2em",
        backgroundColor: "rgba(255, 255, 255, 0.074)",
        backdropFilter: "blur(20px)",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "2.5em" }}>{word.word}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {wordApi ? (
            <>
              <Typography sx={{ fontSize: "1.5em", margin: "0px 10px" }}>
                {wordApi?.text}
              </Typography>
              <IconButton onClick={play}>
                <VolumeUpIcon sx={{ fontSize: "1.1em", color: "white" }} />
                <audio id="audio" src={wordApi?.audio}></audio>
              </IconButton>
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "1.5em", margin: "0px 10px" }}>
                /{word.pronunciation}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Typography sx={{ fontSize: "1.5em" }}>
        Significado: {word.translate}
      </Typography>
    </Box>
  );
};
