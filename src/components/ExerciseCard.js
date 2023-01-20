import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exer }) => {
  return (
    <Link to={`/exercise/${exer.id}`} className='exercise-card'>
      <img src={exer.gifUrl} alt={exer.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",

          }}
        >
          {exer.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize"
          }}
        >
          {exer.target}
        </Button>
      </Stack>
      <Typography ml='21px' mt='11px' fontWeight='bold' color='#000' pb='10px' fontSize='22px' textTransform='none'>
        {exer.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
