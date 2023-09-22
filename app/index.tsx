import { Link } from 'expo-router';
import React from "react";
import { Box } from "native-base";

export default function App() {
  return (
    <Box>
      <Link href="/Berserk">Berserk</Link>
      <Link href="/mangaTopTen">Manga Top Ten</Link>
    </Box>
  );
}