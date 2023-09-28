import { Link } from 'expo-router';
import React from "react";
import {Center, Pressable, Text, VStack} from "native-base";

export default function App() {
  return (
    <VStack space={4}>
      <Link href="/Berserk" asChild>
        <Pressable
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.700"
          p="5">
          <Center>Berserk</Center>
        </Pressable>
      </Link>

      {/*<Link href="/mangaTopTen" asChild>*/}
      {/*  <Pressable*/}
      {/*    rounded="8"*/}
      {/*    overflow="hidden"*/}
      {/*    borderWidth="1"*/}
      {/*    borderColor="coolGray.300"*/}
      {/*    maxW="96"*/}
      {/*    shadow="3"*/}
      {/*    bg="coolGray.700"*/}
      {/*    p="5">*/}
      {/*    <Center>Top Ten</Center>*/}
      {/*  </Pressable>*/}
      {/*</Link>*/}

      <Link href="/randomManga" asChild>
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
  );
}