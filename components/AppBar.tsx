import {Box, HStack, Icon, IconButton, Text, Menu, HamburgerIcon, Pressable} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import {Link, router, usePathname, useRouter} from "expo-router";
import {useContext} from "react";
import AppBarTitle from "./AppTitleHandler";

export default function AppBar() {
  const pathname = usePathname();

  return <>
    <Box safeAreaTop bg="#001543"/>
    <HStack bg="#001543" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="500">
      <HStack alignItems="center">
        <MyMenu/>
        <AppBarTitle/>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="home" size="lg" color="white"/>}
                  onPress={() => router.replace("/")}/>
      </HStack>
    </HStack>
  </>;
}

function MyMenu() {
  return (
    <Menu trigger={(triggerProps) => {
      return (
        <Pressable {...triggerProps}>
          <HamburgerIcon/>
        </Pressable>
      );
    }}>
      <Menu.Group title={"Categories"}>
        <Menu.Item onPress={() => router.replace("/manga/top-10")}>Top 10</Menu.Item>
        <Menu.Item onPress={() => router.replace("/manga/popular")}>Popular</Menu.Item>
        <Menu.Item onPress={() => router.replace("/manga/Random")}>Random</Menu.Item>
      </Menu.Group>
    </Menu>
  )
}