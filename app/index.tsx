import {Link, router} from 'expo-router';
import React from "react";
import {Box, Center, Heading, Icon, Input, Pressable, Text, VStack} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {NativeSyntheticEvent, TextInputSubmitEditingEventData} from "react-native";

export default function App() {
  return (
    <Box>
      <VStack space={20}>
        <Center>
          <Heading size={"2xl"}>
            MangaWiki
          </Heading>
          <Text>A place to learn more about mangas!</Text>
        </Center>

        <VStack space={4}>
          <SearchBar/>

          <Link href="/manga/Random" asChild>
            <Pressable
              rounded="8"
              overflow="hidden"
              borderWidth="1"
              borderColor="coolGray.300"
              maxW="96"
              shadow="3"
              bg="coolGray.700"
              p="5">
              <Center>Random Manga</Center>
            </Pressable>
          </Link>

          <Link href="/manga/top-10" asChild>
            <Pressable
              rounded="8"
              overflow="hidden"
              borderWidth="1"
              borderColor="coolGray.300"
              maxW="96"
              shadow="3"
              bg="coolGray.700"
              p="5">
              <Center>Top 10 Mangas</Center>
            </Pressable>
          </Link>

          <Link href="/manga/popular" asChild>
            <Pressable
              rounded="8"
              overflow="hidden"
              borderWidth="1"
              borderColor="coolGray.300"
              maxW="96"
              shadow="3"
              bg="coolGray.700"
              p="5">
              <Center>Popular Mangas</Center>
            </Pressable>
          </Link>

        </VStack>
      </VStack>

    </Box>
  );
}

function SearchBar() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleChange = (text: string) => setSearchValue(text);

  const onSubmit = (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    if (event.nativeEvent.text.length > 0) {
      router.replace("/manga/search/" + event.nativeEvent.text);
    }
  }
  return (
    <VStack w="100%" space={5} alignSelf="center">
      <Center>
        <Heading fontSize="lg">Pick a category or search</Heading>
      </Center>
      <Input
        value={searchValue}
        onChangeText={handleChange}
        onSubmitEditing={onSubmit}
        placeholder="Search for a Manga!"
        variant="filled"
        width="100%"
        borderRadius="10" py="1" px="2"
        InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search"/>}/>}/>
    </VStack>
  )
}