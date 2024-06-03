import React from "react";
import {
  Box,
  Text,
  Button,
  Collapse,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, ChatIcon, ExternalLinkIcon } from "@chakra-ui/icons";

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bg="white" p={4}>
      <Button onClick={onToggle}>Contact me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="30px"
          color="white"
          mt="4"
          bg="blue.400"
          rounded="md"
          shadow="md"
        >
          <Text>
            <EmailIcon /> gabrielevieira011@gmail.com
          </Text>
          <Text>
            <ChatIcon /> +55 (12) 98128-9294
          </Text>
          <Link
            href="https://docs.google.com/document/d/1O6Vkf1NbJndf3Xji3Ql9664nq__D3j02ZiL1VteyB_E/edit?usp=sharing"
            isExternal
          >
            <ExternalLinkIcon /> Curriculum
          </Link>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Header;
