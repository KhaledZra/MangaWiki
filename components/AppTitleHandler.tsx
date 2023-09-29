import {Text} from "native-base";
import {usePathname} from "expo-router";

export default function AppBarTitle() {
  return (
    <Text color="white" fontSize="20" fontWeight="bold" marginLeft={2}>
      {getProperTitleName()}
    </Text>
  );
}

function getProperTitleName() {
  let pathname = usePathname();

  if (pathname === "/") {
    return "Home"
  }
  else if (pathname === "/manga/top-10") {
    return "Top Ten Mangas"
  }
  else if (pathname === "/manga/popular") {
    return "Popular Mangas"
  }
  else if (pathname.includes("/manga/search/")) {
    return "Searching"
  }
  else if (pathname === "/randomManga") {
    return "Random Manga"
  }
  else if (pathname === "/Berserk") {
    return "Berserk"
  }
  else {
    return "Unknown Page"
  }
}