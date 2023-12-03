import React from "react";
import { Text, Button } from "@chakra-ui/react";
import utils from "../../utils";
import { useNavigate } from "react-router-dom";

export const ExerciseButton = ({ exerciseName }) => {
  const navigate = useNavigate();
  const handleExerciseClick = () => {
    navigate("/exerciseStatistics");
  };
  return (
    <Button
      display={"flex"}
      colorScheme={"teal"}
      borderRadius={20}
      marginTop={5}
      onClick={handleExerciseClick}
      height={8}
    >
      <Text
        justifyContent={"flex-start"}
        color={utils.grey700}
        fontSize={"md"}
        fontWeight={"bold"}
      >
        {exerciseName}
      </Text>
    </Button>
  );
};
