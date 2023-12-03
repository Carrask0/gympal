import React from "react";
import { Text, Button } from "@chakra-ui/react";

import utils from "../../utils";

export const ExerciseButtonAdd = ({ exercise }) => {
  return (
    <Button
      display={"flex"}
      justifyContent={"space-between"}
      colorScheme={"teal"}
      borderRadius={20}
      height={8}
      width={utils.screenWidth * 0.7}
    >
      <Text color={utils.grey700} fontSize={"sm"} fontWeight={"bold"}>
        {exercise.exerciseName}
      </Text>
      <Text color={utils.grey700} fontSize={"sm"} fontWeight={"bold"}>
        {exercise.kgs}kgs {exercise.sets}x{exercise.reps}
      </Text>
    </Button>
  );
};
