import React, { useEffect, useState } from "react";

import {
  Card,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";

export const CardWord = ({ word }) => {
  const [showWord, setShowWord] = useState(true);

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
              alignItems: "center",
            }
          : {
              width: "300px",
              height: "200px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }
      }
    >
      <Box
        sx={{
          width: "85%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
        <IconButton
          onClick={() => {
            setShowWord((prev) => {
              return !prev;
            });
          }}
        >
          <RedoIcon
            sx={
              laptop
                ? { fontSize: "2em", rotate: "90deg", cursor: "pointer" }
                : { fontSize: "1.5em" }
            }
          />
        </IconButton>
      </Box>
    </Card>
  );
};
