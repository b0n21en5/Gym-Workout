import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchBar = ({ setExercise, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercise(searchedExercise);
    }
  };

  return (
    <Stack justifyContent="center" alignItems="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: " 44px", xs: "32px" },
          mb: "30px",
          textAlign: "center",
        }}
      >
        Awesome Exercises you
        <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            width: { xs: "350px", lg: "800px" },
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          type="text"
          height="76px"
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            fontSize: { lg: "20px", xs: "14px" },
            width: { lg: "170px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ width: "100%", position: "relative", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchBar;
