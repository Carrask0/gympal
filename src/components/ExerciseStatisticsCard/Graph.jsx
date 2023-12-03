import React from "react";
import { Box, Text } from "@chakra-ui/react";
import utils from "../../utils";
import { LineChart, Line, XAxis, YAxis } from "recharts";

export const Graph = ({ data }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      flexDirection={"column"}
      marginTop={10}
    >
      <LineChart
        width={utils.screenWidth * 0.8}
        height={utils.screenHeight * 0.12}
        data={data.graphData}
        //Move the graph to the left a bit
        margin={{ left: -30 }}
      >
        <XAxis dataKey="date" fontSize={"small"} stroke={utils.white} />
        <YAxis
          dataKey="kgs"
          fontSize={"small"}
          stroke={utils.white}
          domain={["auto", "auto"]}
        />
        <Line type="monotone" dataKey="kgs" stroke={utils.teal500} />
      </LineChart>
      <Text fontSize={"md"} color={utils.white} fontWeight={"bold"}>
        {data.text}
      </Text>
    </Box>
  );
};
