import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchBar
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercise={exercise}
        setExercise={setExercise}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
