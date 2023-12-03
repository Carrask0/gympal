import {    Box,
            Text     
}from "@chakra-ui/react";

import utils from "../../utils";

import { BsBarChartLineFill } from "react-icons/bs";

export const AnalyticsButton = () => {

    return(
        <Box
        as="button"
        backgroundColor={utils.teal500}
        borderRadius={10}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        paddingLeft={8}
        paddingRight={8}
        paddingTop={4}
        paddingBottom={4}
        _hover={{
            backgroundColor: utils.teal600
        }}
        >

            <Text
                fontSize={'xl'}
                fontWeight={'bold'}
            >
                Analytics
            </Text>
            <BsBarChartLineFill
                size={30}
                color={utils.grey700}/>
        </Box>
    )
}

