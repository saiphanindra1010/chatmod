import { Box, Button, Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
      >
        <Text fontSize="5xl" fontFamily="Work sans" color="white">
          Safe Chat
        </Text>
      </Box>
      <Box
        w="80%"
        p={4}
        // bg="gray.700"
        borderRadius="lg"
        boxShadow="md"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          mb={4}
        >
          <Button
            onClick={() => setShowLogin(true)}
            colorScheme={showLogin ? "gray" : "black"}
          >
            Login
          </Button>
          <Button
            onClick={() => setShowLogin(false)}
            colorScheme={!showLogin ? "gray" : "black"}
          >
            Sign Up
          </Button>
        </Box>
        {showLogin ? <Login /> : <Signup />}
      </Box>
    </Container>
  );
}

export default Homepage;
