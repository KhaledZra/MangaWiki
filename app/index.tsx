import { Link } from 'expo-router';
import React from "react";
import {Box, Button, Pressable, Text} from "native-base";

export default function App() {
  return (
    <Box>
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
          <Text>Berserk</Text>
        </Pressable>
      </Link>

      <Link href="/mangaTopTen" asChild>
        <Pressable
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.700"
          p="5">
          <Text>Top Ten</Text>
        </Pressable>
      </Link>

    </Box>
  );
}