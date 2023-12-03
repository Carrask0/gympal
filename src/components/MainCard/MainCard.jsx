import utils from "../../utils";
import {
  Box,
  Image,
  Text,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import profilePicture from "../../assets/profilePicture.jpeg";

import { AnalyticsButton } from "./AnalyticsButton";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";


let mockData = {
  totalPoints: 210,
  points: 30,
};

export const MainCard = () => {
  const navigate = useNavigate();

  const handleAddSessionClick = () => {
    //navigate to session with parameter editting set to true
    navigate("/session/true");
  };
  const handleSessionDetailClick = () => {
    //navigate to session with parameter editting set to false
    navigate("/session/false");
  };

  return (
    <Card
      width={utils.screenWidth}
      height={utils.screenHeight}
      backgroundColor={utils.grey700}
    >
      <CardHeader
        height={utils.screenHeight * 0.3}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box>
          <Image
            src={profilePicture}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            objectFit="cover"
          />
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={5}
          >
            <Text color={utils.white} fontSize={"xl"} fontWeight={"bold"}>
              {mockData.points}/{mockData.totalPoints} pts
            </Text>
          </Box>
        </Box>
      </CardHeader>

      <CardBody>
        <Text color={utils.white} fontSize={"xl"} fontWeight={"bold"}>
          Tu actividad hoy
        </Text>

        <Button 
          colorScheme={"teal"} 
          borderRadius={20} 
          marginTop={5}
          onClick={handleSessionDetailClick}
        >
          <Text color={utils.grey700} fontSize={"xl"} fontWeight={"bold"}>
            Sesion 1
          </Text>
        </Button>
      </CardBody>

      <CardFooter
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"column"}
        marginTop={5}
        height={utils.screenHeight * 0.3}
      >
        <AnalyticsButton />
        <Box
          as={BsFillPlusCircleFill}
          onClick={handleAddSessionClick}
          color={utils.teal500}
          size={50}
          _hover={{
            color: utils.teal600,
            cursor: "pointer",
          }}
        />
      </CardFooter>
    </Card>
  );
};
