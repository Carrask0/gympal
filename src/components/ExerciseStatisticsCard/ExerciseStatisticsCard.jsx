import React from "react";
import {
  Text,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Graph } from "./Graph";

import { BsArrowLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import utils from "../../utils";

export const ExerciseStatisticsCard = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/statistics");
  };

  const data = {
    exerciseName: "Press de banca",
    kgsMovidos: 12650,
    maximaEsperada: 120,
  };

  const maxKgsGraphData = {
    text: "Repeticion máxima",
    graphData: [
      {
        date: "1/1/2021",
        kgs: 80,
      },
      {
        date: "1/2/2021",
        kgs: 100,
      },
      {
        date: "1/3/2021",
        kgs: 100,
      },
      {
        date: "1/4/2021",
        kgs: 100,
      },
      {
        date: "1/5/2021",
        kgs: 110,
      },
      {
        date: "1/6/2021",
        kgs: 110,
      },
      {
        date: "1/7/2021",
        kgs: 115,
      },
      {
        date: "1/8/2021",
        kgs: 115,
      },
      {
        date: "1/9/2021",
        kgs: 115,
      },
      {
        date: "1/10/2021",
        kgs: 115,
      },
      {
        date: "1/11/2021",
        kgs: 115,
      },
      {
        date: "1/12/2021",
        kgs: 115,
      },
      {
        date: "1/13/2021",
        kgs: 120,
      },
      {
        date: "1/14/2021",
        kgs: 120,
      },
    ],
  };

  const pesoEfectivoGraphData = {
    text: "Peso efectivo",
    graphData: [
      {
        date: "1/1/2021",
        kgs: 70,
      },
      {
        date: "1/2/2021",
        kgs: 70,
      },
      {
        date: "1/3/2021",
        kgs: 70,
      },
      {
        date: "1/4/2021",
        kgs: 75,
      },
      {
        date: "1/5/2021",
        kgs: 72,
      },
      {
        date: "1/6/2021",
        kgs: 75,
      },
      {
        date: "1/7/2021",
        kgs: 77,
      },
      {
        date: "1/8/2021",
        kgs: 75,
      },
      {
        date: "1/9/2021",
        kgs: 80,
      },
      {
        date: "1/10/2021",
        kgs: 82,
      },
      {
        date: "1/11/2021",
        kgs: 85,
      },
    ],
  };

  const volumenPorSesionGraphData = {
    text: "Volumen por sesión",
    graphData: [
      {
        date: "1/1/2021",
        kgs: 1000,
      },
      {
        date: "1/2/2021",
        kgs: 1100,
      },
      {
        date: "1/3/2021",
        kgs: 1000,
      },
      {
        date: "1/4/2021",
        kgs: 1400,
      },
      {
        date: "1/5/2021",
        kgs: 1600,
      },
      {
        date: "1/6/2021",
        kgs: 1200,
      },
      {
        date: "1/7/2021",
        kgs: 1400,
      },
      {
        date: "1/8/2021",
        kgs: 1300,
      },
      {
        date: "1/9/2021",
        kgs: 1700,
      },
      {
        date: "1/10/2021",
        kgs: 1600,
      },
      {
        date: "1/11/2021",
        kgs: 1700,
      },
      {
        date: "1/12/2021",
        kgs: 1600,
      },
      {
        date: "1/13/2021",
        kgs: 1700,
      },
      {
        date: "1/14/2021",
        kgs: 1900,
      },
    ],
  };

  return (
    <Card
      width={utils.screenWidth}
      height={utils.screenHeight}
      backgroundColor={utils.grey700}
    >
      <CardHeader height={utils.screenHeight * 0.05}>
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
      </CardHeader>
      <CardBody
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
      >
        <Text
          color={utils.white}
          fontSize={"2xl"}
          fontWeight={"bold"}
          marginBottom={5}
          display={"flex"}
          justifyContent={"center"}
        >
          {data.exerciseName}
        </Text>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
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
              {data.kgsMovidos}
            </Text>
            <Text color={utils.white} fontSize={"sm"}>
              Kgs movidos
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text color={utils.teal500} fontSize={"xl"} fontWeight={"bold"}>
              {data.maximaEsperada}kgs
            </Text>
            <Text color={utils.white} fontSize={"sm"}>
              Maxima esperada
            </Text>
          </Box>
        </Box>
        <Graph data={maxKgsGraphData} />
        <Graph data={pesoEfectivoGraphData} />
        <Graph data={volumenPorSesionGraphData} />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};
