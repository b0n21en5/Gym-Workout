import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercise, setExercise, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;

  const paginate = (e, valoue) => {
    setCurrentPage(valoue)

    window.scrollTo({top:1800, behavior:'smooth'})
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" }, mt: "50px", p: "20px" }}>
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercise.map((exer, index) => (
          <ExerciseCard key={index} exer={exer} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length/exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
