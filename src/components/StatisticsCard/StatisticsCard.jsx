import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import utils from "../../utils";

import { BsArrowLeft } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LineChart, Line, XAxis, YAxis } from "recharts";

import { useNavigate } from "react-router-dom";
import { ExerciseButton } from "./ExerciseButton";

export const StatisticsCard = () => {
  //The graph is just a line chart with the x axis being the date and the y axis being the points
  const chartData = [
    {
      date: "1/1/2021",
      points: 100,
    },
    {
      date: "1/2/2021",
      points: 150,
    },
    {
      date: "1/3/2021",
      points: 100,
    },
    {
      date: "1/4/2021",
      points: 160,
    },
    {
      date: "1/5/2021",
      points: 190,
    },
    {
      date: "1/6/2021",
      points: 180,
    },
    {
      date: "1/7/2021",
      points: 200,
    },
    {
      date: "1/8/2021",
      points: 210,
    },
    {
      date: "1/9/2021",
      points: 240,
    },
    {
      date: "1/10/2021",
      points: 180,
    },
    {
      date: "1/11/2021",
      points: 290,
    },
    {
      date: "1/12/2021",
      points: 250,
    },
    {
      date: "1/13/2021",
      points: 255,
    },
    {
      date: "1/14/2021",
      points: 280,
    },
  ];
  const exerciseNames = [
    "Press banca",
    "Sentadilla",
    "Peso muerto",
    "Press inclinado",
  ];

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Card
      width={utils.screenWidth}
      height={utils.screenHeight}
      backgroundColor={utils.grey700}
    >
      <CardHeader>
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
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <LineChart
            width={utils.screenWidth * 0.8}
            height={utils.screenHeight * 0.3}
            data={chartData}
            //Move the graph to the left a bit
            margin={{ left: -30 }}
          >
            <XAxis dataKey="date" fontSize={"small"} stroke={utils.white} />
            <YAxis dataKey="points" fontSize={"small"} stroke={utils.white} />
            <Line type="monotone" dataKey="points" stroke={utils.teal500} />
          </LineChart>
          <Text fontSize={"md"} color={utils.white} fontWeight={"bold"}>
            Volumen total
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          marginTop={5}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            alignItems={"baseline"}
          >
            <Text fontSize={"sm"} color={utils.white} fontWeight={"bold"}>
              Ejercicios
            </Text>
            <Menu placement={"bottom-end"} height={utils.screenHeight * 0.1}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon color={utils.grey700} />}
                colorScheme={"teal"}
                borderRadius={20}
                color={utils.grey700}
                textSize={"sm"}
              >
                Ordenar por
              </MenuButton>
              <MenuList>
                <MenuItem>Peso máximo</MenuItem>
                <MenuItem>Grupo muscular</MenuItem>
                <MenuItem>Orden alfabético</MenuItem>
                <MenuItem>Volumen medio</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            marginTop={5}
            maxHeight={utils.screenHeight * 0.4}
            flex={1}
            overflowY={"auto"}
          >
            {exerciseNames.map((exerciseName) => (
              <ExerciseButton key={exerciseName} exerciseName={exerciseName} />
            ))}
          </Box>
        </Box>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};
