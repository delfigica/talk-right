import React, { useEffect } from "react";

import {
  Card,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

export const CardWord = ({ word, showWord, setShowWord }) => {
  useEffect(() => {}, [word]);

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Card
      sx={
        laptop
          ? {
              width: "600px",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#232526",
              color: "white",
            }
          : {
              width: "300px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              background: "#232526",
              color: 'white'
            }
      }
    >
      <Box
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "3em" }}>
          {showWord ? word.word : "/" + word.pronunciation}
        </Typography>
        <Typography sx={{ height: "10%" }}>
          Significado: {word.translate}
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={() => {
            setShowWord((prev) => {
              return !prev;
            });
          }}
          sx={{ color: "white", fontWeight: 600, fontSize: "1.1em" }}
        >
          see pronunciation
        </Button>
      </Box>
    </Card>
  );
};
