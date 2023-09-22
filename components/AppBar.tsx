import {Box, HStack, Icon, IconButton, Text, StatusBar} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppBar() {
  return <>
    <Box safeAreaTop bg="#001543" />
    <HStack bg="#001543" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="500">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </>;
}