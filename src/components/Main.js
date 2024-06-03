import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Tag,
  Link,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaPython,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPostgresql,
} from "react-icons/bi";
import MeImg from "./../assets/me.jpeg";
import Projects from "./Projects";

function MainContent() {
  return (
    <Box p={4} textAlign="center">
      <Box mb={4}>
        <Heading as="h1" size="2xl">
          My name is{" "}
          <Text as="span" color="blue.400">
            Gabriele
          </Text>
        </Heading>
        <Text mt={2}>
          I'm a Full Stack Software Engineer with focus on Backend
        </Text>
        <Flex mt={4} justify="center" gap={2}>
          <Link href="https://www.linkedin.com/in/gabrielevieira/" isExternal>
            <IconButton
              icon={<FaLinkedin />}
              colorScheme="blue"
              aria-label="LinkedIn"
              variant="solid"
            />
          </Link>
          <Link href="https://github.com/GabrieleGVieira" isExterna>
            <IconButton
              icon={<FaGithub />}
              colorScheme="blue"
              aria-label="GitHub"
              variant="solid"
            />
          </Link>
        </Flex>
      </Box>
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="center"
        mt={8}
      >
        <Image
          src={MeImg}
          borderRadius="full"
          boxSize="150px"
          mb={[4, 0]}
          mr={[0, 4]}
        />
        <Box bg="black" color="white" p={4} borderRadius="md">
          3+ years experience
        </Box>
      </Flex>
      <Flex mt={8} justify="center" wrap="wrap" gap={4}>
        <Tag size="lg" colorScheme="blue">
          <FaPython style={{ marginRight: "0.5em" }} />
          Python
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <RiJavascriptFill style={{ marginRight: "0.5em" }} />
          Javascript
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <BiLogoTypescript style={{ marginRight: "0.5em" }} />
          Typescript
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <BiLogoMongodb style={{ marginRight: "0.5em" }} />
          MongoDB
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <BiLogoPostgresql style={{ marginRight: "0.5em" }} />
          PostgreSQL
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <FaReact style={{ marginRight: "0.5em" }} />
          React
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <FaVuejs style={{ marginRight: "0.5em" }} />
          Vue.js
        </Tag>
        <Tag size="lg" colorScheme="blue">
          <FaNodeJs style={{ marginRight: "0.5em" }} />
          Node.js
        </Tag>
      </Flex>
      <Flex mt={8} justify="center" wrap="wrap" gap={4}>
        <Divider />
      </Flex>
      <Box w="100%" p={4}>
        <Flex align="center" justify="center" mt={8}>
          <Heading as="h1" size="xl">
            <Text as="span" color="blue.300">
              Latest Projects
            </Text>
          </Heading>
        </Flex>
      </Box>
      <Projects />
    </Box>
  );
}

export default MainContent;
