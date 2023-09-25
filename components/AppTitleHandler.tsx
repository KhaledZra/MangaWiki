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
  else if (pathname === "/mangaTopTen") {
    return "Top Ten"
  }
  else if (pathname === "/Berserk") {
    return "Berserk"
  }
  else {
    return "Unknown Page"
  }
}