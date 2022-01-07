import {
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  useColorMode,
  VStack,
  Text,
  MenuList,
  MenuItem,
  Button,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import styles from "../styles/navBar.module.scss";
import Image from "next/image";
import { MotionGreenButton } from "../pages";
import { Fragment, useEffect, useRef, useState } from "react";
import { CaretDown, List, Moon, Sun } from "phosphor-react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";
function TopNavBar() {
  const [menuOpenNum, setMenuOpenNum] = useState(0);

  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const [isPhone, setIsPhone] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const mq = useMediaQuery("(max-width: 800px)");
  useEffect(() => {
    setIsPhone(mq);
  }, [mq]);

  return (
    <Fragment>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody bg="#212324">
            <Flex
              flexDir="column"
              alignItems="center"
              marginTop="25%"
              gap="40px"
            >
              <PhoneWhoWeHelpMenu />
              <Button
                size="lg"
                // variant="ghost"
                onMouseEnter={() => {
                  setMenuOpenNum(2);
                }}
              >
                Why Younion
              </Button>
              <PhoneGrowMenu menuOpenNumObj={{ menuOpenNum, setMenuOpenNum }} />
              <Button
                // variant="ghost"
                size="lg"
                onMouseEnter={() => {
                  setMenuOpenNum(4);
                }}
              >
                Partner
              </Button>
              <Button
                // variant="ghost"
                size="lg"
                onMouseEnter={() => {
                  setMenuOpenNum(5);
                }}
              >
                In The News
              </Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter bg="#212324"></DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex
        className={styles.navBarBox}
        bg={colorMode == "dark" ? "darkBg" : "#FFFFFF"}
        gap="2%"
        height={isPhone ? "15%" : "10%"}
      >
        <IconButton
          aria-label="Open Drawer"
          icon={<List />}
          display={isPhone ? "flex" : "none"}
          onClick={onOpen}
        ></IconButton>
        <img
          onClick={() => {
            router.push("/");
          }}
          style={{
            width: isPhone ? "50%" : "12%",
            cursor: "pointer",
            marginRight: "auto",
            marginLeft: isPhone ? "auto" : "",
          }}
          src="https://jointheyounion.com/wp-content/themes/jointheyounion/assets/images/YOUnion-Powered_shield-left.svg"
        ></img>
        <Flex>
          <WhoWeHelpMenu
            menuOpenNumObj={{ menuOpenNum, setMenuOpenNum }}
            display={isPhone ? "none" : "inline-block"}
          />
          <Button
            display={isPhone ? "none" : "inline-block"}
            variant="ghost"
            onMouseEnter={() => {
              setMenuOpenNum(2);
            }}
          >
            Why Younion
          </Button>
          <GrowMenu
            menuOpenNumObj={{ menuOpenNum, setMenuOpenNum }}
            display={isPhone ? "none" : "inline-block"}
          />
          <Button
            display={isPhone ? "none" : "inline-block"}
            variant="ghost"
            onMouseEnter={() => {
              setMenuOpenNum(4);
            }}
          >
            Partner
          </Button>
          <Button
            display={isPhone ? "none" : "inline-block"}
            variant="ghost"
            onMouseEnter={() => {
              setMenuOpenNum(5);
            }}
          >
            In The News
          </Button>
        </Flex>
        <Tooltip label="Change Theme">
          <IconButton
            aria-label="Change Theme"
            icon={
              colorMode == "dark" ? (
                <Moon weight="fill" />
              ) : (
                <Sun weight="fill" />
              )
            }
            onClick={() => toggleColorMode()}
          />
        </Tooltip>
        <MotionGreenButton
          text={isPhone ? "Join" : "Join Now"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, backgroundColor: "#4cb064" }}
          onClick={() => router.push("/join-now")}
          size={"lg"}
          display={isPhone ? "none" : "inline-block"}
          // onClick={() => toggleColorMode()}
        ></MotionGreenButton>
      </Flex>
    </Fragment>
  );
}

export default TopNavBar;

const WhoWeHelpMenu = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu
      isOpen={menuOpen && props.menuOpenNumObj.menuOpenNum == 1}
      onClose={() => setMenuOpen(false)}
    >
      <MenuButton
        {...props}
        as={Button}
        bg="transparent"
        onMouseEnter={() => {
          setMenuOpen(true);
          props.menuOpenNumObj.setMenuOpenNum(1);
        }}
        // onMouseLeave={() => setMenuOpen(false)}

        textAlign="left"
      >
        Who We Help
      </MenuButton>
      <MenuList
        onMouseLeave={() => setMenuOpen(false)}
        bg={colorMode == "dark" ? "#191d1f" : "#dadeed"}
      >
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>Overview</MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Small Restaurants and Café
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Professional and Home Services
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Local Sales events
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Business Education
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
const GrowMenu = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu
      isOpen={menuOpen && props.menuOpenNumObj.menuOpenNum == 3}
      onClose={() => setMenuOpen(false)}
    >
      <MenuButton
        as={Button}
        bg="transparent"
        onMouseEnter={() => {
          setMenuOpen(true);
          props.menuOpenNumObj.setMenuOpenNum(3);
        }}
        // onMouseLeave={() => setMenuOpen(false)}
        {...props}
        textAlign="left"
      >
        Grow
      </MenuButton>
      <MenuList
        onMouseLeave={() => setMenuOpen(false)}
        bg={colorMode == "dark" ? "#191d1f" : "#dadeed"}
      >
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>Download</MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Create a Copy
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Mark as Draft
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>Delete</MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const PhoneWhoWeHelpMenu = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu
      isOpen={menuOpen}
      onClose={() => setMenuOpen(false)}
      // placement="right-end"
      placement="bottom"
    >
      <MenuButton
        {...props}
        as={Button}
        // bg="transparent"
        // onMouseLeave={() => setMenuOpen(false)}
        onClick={() => setMenuOpen(!menuOpen)}
        textAlign="left"
        size="lg"
      >
        Who We Help
      </MenuButton>
      <MenuList
        // onMouseLeave={() => setMenuOpen(false)}
        bg={colorMode == "dark" ? "#191d1f" : "#dadeed"}
      >
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>Overview</MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Small Restaurants and Café
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Professional and Home Services
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Local Sales events
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Business Education
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

const PhoneGrowMenu = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu
      isOpen={menuOpen}
      onClose={() => setMenuOpen(false)}
      placement="bottom"
    >
      <MenuButton
        as={Button}
        // bg="transparent"
        onClick={() => setMenuOpen(!menuOpen)}
        // onMouseLeave={() => setMenuOpen(false)}
        {...props}
        textAlign="left"
        size="lg"
      >
        Grow
      </MenuButton>
      <MenuList bg={colorMode == "dark" ? "#191d1f" : "#dadeed"}>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>Download</MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Create a Copy
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Mark as Draft
        </MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>Delete</MenuItem>
        <MenuItem _hover={{ backgroundColor: "#4cb064" }}>
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
