import {Text, View} from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/Berserk">Berserk</Link>
      <Link href="/mangaTopTen">Manga Top Ten</Link>
    </View>
  );
}