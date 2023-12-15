import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Input,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Blur = (props) => {
    return (
      <Icon
        width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };



function JoinRoom(props) {

    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    const navigate=useNavigate();

    const handleSubmit=()=>{
        // console.log(name   +  room);

        // if(!room || !name){
        //     alert("please fill deatils");
        //     return 
        // }else{
            // <ChatAdmin 
            // name={name} 
            // room={room}
            //  />

            navigate(`/chat?name=${name}&room=${room}`);
        // }
    }


       
    return (
        <div>
        <Box position={"relative"}>
                <Container
                    as={SimpleGrid}
                    maxW={"7xl"}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}
                >
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                            m={"auto 0px"}
                            zIndex={"1"}
                        >
                            Join Our App{" "}
                            <Text
                                as={"span"}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text"
                            >
                                &
                            </Text>{" "}
                            Stay Connect With Your{" "}
                            <Text
                                as={"span"}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text"
                            >
                                Near One's
                            </Text>
                        </Heading>
                    </Stack>
                    <Stack
                        bg={"gray.50"}
                        rounded={"xl"}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: "lg" }}
                    >
                        <Stack spacing={4}>
                            <Heading
                                color={"gray.800"}
                                lineHeight={1.1}
                                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                            >
                                Join our App{" "}
                                <Text
                                    as={"span"}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text"
                                >
                                    !
                                </Text>
                            </Heading>
                            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                                More than 2 billion people in over 180 countries use our App to
                                stay in touch with friends and family, anytime and anywhere.
                            </Text>
                        </Stack>
                        <Box as={"form"} mt={10}>
                            <Stack spacing={4}>
                                <Input
                                    // ref={userName}
                                    placeholder="Enter Your Name"
                                    type="text"
                                    bg={"gray.100"}
                                    border={0}
                                    color={"gray.500"}
                                    _placeholder={{
                                        color: "gray.500",
                                    }}
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                                <Input
                                    // ref={userEmail}
                                    type="text"
                                    placeholder="Enter Your Room "
                                    bg={"gray.100"}
                                    border={0}
                                    color={"gray.500"}
                                    _placeholder={{
                                        color: "gray.500",
                                    }}
                                    onChange={(e)=>{setRoom(e.target.value)}}
                                />
                
                                
                            </Stack>
                            <Button
                                onClick={handleSubmit}
                                fontFamily={"heading"}
                                mt={8}
                                w={"full"}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={"white"}
                                _hover={{
                                    bgGradient: "linear(to-r, red.400,pink.400)",
                                    boxShadow: "xl",
                                }}
                            >
                                Enter in Room
                            </Button>
                     
                        </Box>
                    </Stack>
                </Container>
                <Blur
                    position={"absolute"}
                    top={110}
                    left={-10}
                    style={{ filter: "blur(70px)" }}
                />

            </Box>
            
        </div>
    );
}

export default JoinRoom;