import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";
import { ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import utils from "../../utils";

export const ModalExerciseAdd = ({ exerciseName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleGuardar = () => {
    navigate("/session/true");
  };

  return (
    <>
      <Button
        onClick={onOpen}
        width={utils.screenWidth * 0.8}
        colorScheme={"teal"}
        marginTop={5}
        borderRadius={20}
        height={8}
      >
        <Text color={utils.grey700} fontSize={"md"} fontWeight={"bold"}>
          {exerciseName}
        </Text>
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"xs"}
        motionPreset={"slideInBottom"}
      >
        <ModalOverlay />
        <ModalContent
          backgroundColor={utils.grey700}
          borderRadius={20}
          border={utils.teal500 + " 3px solid"}
          color={utils.grey700}
        >
          <ModalHeader display={"flex"} justifyContent={"space-between"}>
            <Text
              color={utils.white}
              fontSize={"lg"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              {exerciseName}
            </Text>
          </ModalHeader>
          <ModalCloseButton color={utils.teal500} />
          <ModalBody>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                margin={5}
              >
                <Input
                  type="number"
                  placeholder="0"
                  color={utils.white}
                  width={utils.screenWidth * 0.15}
                  border={utils.teal500 + " 2px solid"}
                ></Input>
                <Text
                  color={utils.white}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  marginTop={2}
                >
                  Peso
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                margin={5}
              >
                <Input
                  type="number"
                  placeholder="0"
                  color={utils.white}
                  width={utils.screenWidth * 0.15}
                  border={utils.teal500 + " 2px solid"}
                ></Input>
                <Text
                  color={utils.white}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  marginTop={2}
                >
                  Repeticiones
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                margin={5}
              >
                <Input
                  type="number"
                  placeholder="0"
                  color={utils.white}
                  width={utils.screenWidth * 0.15}
                  border={utils.teal500 + " 2px solid"}
                ></Input>
                <Text
                  color={utils.white}
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  marginTop={2}
                >
                  Series
                </Text>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"}>
            <Button
              colorScheme="teal"
              onClick={handleGuardar}
              marginRight={3}
              textColor={utils.grey700}
            >
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
