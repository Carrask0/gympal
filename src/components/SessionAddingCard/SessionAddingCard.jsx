import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import utils from "../../utils";

import { BsArrowLeft } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ExerciseButtonAdd } from "./ExerciseButtonAdd";

export const SessionAddingCard = () => {
  const data = {
    sessionName: "Session 1",
    sessionDate: "1/1/2021",
    puntos: 0,
    kgsMovidos: 0,
    kcalsQuemadas: 0,
    //exerciseNames: ["Press de banca", "Sentadillas", "Dominadas"]
    exercises: [
      {
        exerciseName: "Press de banca",
        kgs: 80,
        reps: 10,
        sets: 3,
      },
      {
        exerciseName: "Sentadillas",
        kgs: 100,
        reps: 8,
        sets: 5,
      },
      {
        exerciseName: "Dominadas",
        kgs: 0,
        reps: 10,
        sets: 3,
      },
    ],
  };

  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };
  const handleAddExerciseClick = () => {
    navigate("/exerciseAdding");
  };
  const handleSaveClick = () => {
    navigate("/");
  };

  return (
    <Card
      width={utils.screenWidth}
      height={utils.screenHeight}
      backgroundColor={utils.grey700}
    >
      <CardHeader
        height={utils.screenHeight * 0.05}
        marginBottom={5}
        marginTop={5}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          as={BsArrowLeft}
          size={30}
          color={utils.teal500}
          _hover={{
            cursor: "pointer",
            color: utils.teal600,
          }}
          onClick={handleBackClick}
        />
        <Text color={utils.white} fontSize={"2xl"} fontWeight={"bold"}>
          {data.sessionName}
        </Text>
        <Text color={utils.white} fontSize={"sm"} fontWeight={"bold"}>
          {data.sessionDate}
        </Text>
      </CardHeader>

      <CardBody
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"baseline"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text color={utils.teal500} fontSize={"xl"} fontWeight={"bold"}>
              {data.puntos}
            </Text>
            <Text color={utils.white} fontSize={"sm"}>
              puntos
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text color={utils.teal500} fontSize={"xl"} fontWeight={"bold"}>
              {data.kgsMovidos}
            </Text>
            <Text color={utils.white} fontSize={"sm"}>
              kgs movidos
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text color={utils.teal500} fontSize={"xl"} fontWeight={"bold"}>
              {data.kcalsQuemadas}
            </Text>
            <Text color={utils.white} fontSize={"sm"}>
              kcals
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"row"}
          alignItems={"center"}
          marginTop={5}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Text color={utils.white} fontSize={"md"} fontWeight={"bold"}>
              Ejercicios
            </Text>
            {editMode && (
              <Box
                as={BsFillPlusCircleFill}
                size={20}
                color={utils.teal500}
                _hover={{
                  cursor: "pointer",
                  color: utils.teal600,
                }}
                onClick={handleAddExerciseClick}
                marginLeft={5}
              />
            )}
          </Box>
          {!editMode && (
            <Box
              as={EditIcon}
              color={utils.teal500}
              _hover={{
                cursor: "pointer",
                color: utils.teal600,
              }}
              onClick={() => setEditMode(true)}
              marginLeft={5}
              marginRight={5}
            />
          )}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          //box with all exercises
        >
          {data.exercises.map((exercise) => (
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"row"}
              alignItems={"center"}
              marginTop={5}
            >
              <ExerciseButtonAdd exercise={exercise} />
              <Box
                as={DeleteIcon}
                size={20}
                color={utils.teal500}
                _hover={{
                  cursor: "pointer",
                  color: utils.teal600,
                }}
                justifyContent={"flex-end"}
              />
            </Box>
          ))}
        </Box>
      </CardBody>

      <CardFooter display={"flex"} justifyContent={"center"} marginBottom={10}>
        <Button
          colorScheme={"teal"}
          borderRadius={20}
          marginTop={5}
          onClick={handleSaveClick}
        >
          <Text color={utils.grey700} fontSize={"xl"} fontWeight={"bold"}>
            Aceptar
          </Text>
        </Button>
      </CardFooter>
    </Card>
  );
};
