import React from "react";
import {
  Text,
  Heading,
  Image,
  Flex,
  Tag,
  Link,
  IconButton,
  Divider,
  Card,
  CardFooter,
  CardBody,
  SimpleGrid,
  Stack,
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import { FaPython, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiNextdotjs, SiChakraui, SiExpo } from "react-icons/si";
import RBRCaseImg from "./../assets/RBR-case.jpeg"
import ShoppingListImg from "./../assets/shopping-list.png";
import GoogleAuthImg from "./../assets/google-auth.webp";
import BankingSystemhImg from "./../assets/banking-system.jpeg";
import CrudTypescriptImg from "./../assets/crud-bg.jpeg";

function Projects() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      <Card maxW="md">
        <CardBody>
          <Image src={RBRCaseImg} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Administrative Dashboard</Heading>
            <Text>
              This simple administrative dashboard empowers authorized users to
              effectively manage a list of employees, encompassing the creation,
              viewing, updating, and deletion of employee records.
            </Text>
            <Flex>
              <Tooltip label="MongoDB">
                <Tag size="lg" colorScheme="blue">
                  <BiLogoMongodb />
                </Tag>
              </Tooltip>
              <Tooltip label="Node.js">
                <Tag size="lg" colorScheme="blue">
                  <FaNodeJs />
                </Tag>
              </Tooltip>
              <Tooltip label="Express.js">
                <Tag size="lg" colorScheme="blue">
                  <SiExpress />
                </Tag>
              </Tooltip>
            </Flex>
            <Flex>
              <Tooltip label="React">
                <Tag size="lg" colorScheme="blue">
                  <FaReact />
                </Tag>
              </Tooltip>
              <Tooltip label="Next.js">
                <Tag size="lg" colorScheme="blue">
                  <SiNextdotjs />
                </Tag>
              </Tooltip>
              <Tooltip label="Typescript">
                <Tag size="lg" colorScheme="blue">
                  <BiLogoTypescript />
                </Tag>
              </Tooltip>
              <Tooltip label="Chakra UI">
                <Tag size="lg" colorScheme="blue">
                  <SiChakraui />
                </Tag>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link
              href="https://www.loom.com/share/5cbebb0b39914068af4dce7546631cc3?sid=d4120b3e-a383-47b9-a2c5-c7d4734c653a"
              isExternal
            >
              <IconButton icon={<LinkIcon />} />
            </Link>
            <Link href="https://github.com/GabrieleGVieira/RBR-case" isExternal>
              <IconButton icon={<FaGithub />} />
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="md">
        <CardBody>
          <Image src={ShoppingListImg} boxSize="ms" borderRadius="lg" />

          <Stack mt="6" spacing="3">
            <Heading size="md">Shopping List App - React Native CRUD</Heading>
            <Text>
              A mobile application built with React Native for managing your
              shopping lists. This CRUD (Create, Read, Update, Delete) app
              allows users to effortlessly add, view, edit, and delete items
              from their shopping lists.
            </Text>
            <Flex>
              <Tooltip label="React Native">
                <Tag size="lg" colorScheme="blue">
                  <FaReact />
                </Tag>
              </Tooltip>
              <Tooltip label="Expo">
                <Tag size="lg" colorScheme="blue">
                  <SiExpo />
                </Tag>
              </Tooltip>
              <Tooltip label="Typescript">
                <Tag size="lg" colorScheme="blue">
                  <BiLogoTypescript />
                </Tag>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link href="https://github.com/GabrieleGVieira/RBR-case" isExternal>
              <IconButton icon={<FaGithub />} />
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="md">
        <CardBody>
          <Image src={GoogleAuthImg} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              Node.js API for Google-based Authentication Login using Gmail
            </Heading>
            <Text>
              This Node.js-based API facilitates user authentication through
              Google, enabling login using Gmail email addresses. It streamlines
              the login process and enhances security by leveraging Google's
              robust authentication infrastructure.
            </Text>
            <Flex>
              <Tooltip label="Node.js">
                <Tag size="lg" colorScheme="blue">
                  <FaNodeJs />
                </Tag>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link
              href="https://github.com/GabrieleGVieira/nodejs-google-auth"
              isExternal
            >
              <IconButton icon={<FaGithub />} />
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="md">
        <CardBody>
          <Image src={BankingSystemhImg} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Banking System</Heading>
            <Text>
              To create a banking system with operations such as withdrawal,
              deposit, view statement, create an account, and create a user.
              This project aims to study object-oriented programming using the
              Python programming language.
            </Text>
            <Flex>
              <Tooltip label="Python">
                <Tag size="lg" colorScheme="blue">
                  <FaPython />
                </Tag>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link
              href="https://github.com/GabrieleGVieira/banking-system"
              isExternal
            >
              <IconButton icon={<FaGithub />} />
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="md">
        <CardBody>
          <Image src={CrudTypescriptImg} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">World Beauty System - Typescript CRUD</Heading>
            <Text>
              Develop a system of type CLI (command-line interface) with the
              objective to meet the needs of the group World Beauty
              (fictitious), of the area of aesthetics. Activity developed for
              the Programming Techniques course - FATEC Prof. Jessen Vidal
            </Text>
            <Flex>
              <Tooltip label="Typescript">
                <Tag size="lg" colorScheme="blue">
                  <BiLogoTypescript />
                </Tag>
              </Tooltip>
              <Tooltip label="Node.js">
                <Tag size="lg" colorScheme="blue">
                  <FaNodeJs />
                </Tag>
              </Tooltip>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link
              href="https://github.com/GabrieleGVieira/banking-system"
              isExternal
            >
              <IconButton icon={<FaGithub />} />
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

export default Projects;
