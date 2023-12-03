import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import utils from "../../utils";
import { ModalExerciseAdd } from "./ModalExerciseAdd";

import { BsArrowLeft } from "react-icons/bs";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

export const ExerciseSearchCard = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  const data = {
    exercises: [
      "Press de banca",
      "Sentadillas",
      "Dominadas",
      "Press inclinado",
      "Press declinado",
    ],
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
      </CardHeader>

      <CardBody
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
      >
        <Menu
          placement={"bottom-end"}
          height={utils.screenHeight * 0.1}
          display={"flex"}
          justifyContent={"space-between"}
        >
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
        <InputGroup marginTop={5}>
          <Input
            placeholder="Buscar ejercicio"
            borderColor={utils.teal500}
            _placeholder={{ opacity: 0.7, color: utils.white }}
            color={utils.white}
          />
          <InputRightElement>
            <SearchIcon color={utils.teal500} />
          </InputRightElement>
        </InputGroup>

        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          marginTop={5}
        >
          {data.exercises.map((exerciseName) => (
            <ModalExerciseAdd exerciseName={exerciseName} />
          ))}
        </Box>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
};
