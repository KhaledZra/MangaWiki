import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { Manga } from '../src/data/manga';

const url = "https://manga-api-70c3.onrender.com/api/top-10"
// https://manga-api-70c3.onrender.com/api/search?keyword=berserk
// https://api.mangadex.org/docs/swagger.html#/Manga/get-manga-random
// https://myanimelist.net/apiconfig/references/api/v2#operation/manga_get
// https://nativebase.io/

const MangaView = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Manga[]>([]);
  const styles = useStyle();

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <ScrollView style={styles.row} horizontal={true}>
              <Image
                source={{ uri: item.cover }}
                style={styles.cover}
              />
              <View style={styles.description}>
                <Text style={styles.text}>Title: {item.title}</Text>
                <Text style={styles.text}>Chapters: {item.chapters.total}</Text>
                <Text style={styles.text}>Languages: {item.chapters.lang}</Text>
                <Text style={styles.text}>Synopsis: {item.synopsis}</Text>
              </View>
            </ScrollView>
          }
        />
      )
      }
    </View>
  );
};

const useStyle = () => {
  const dimensions = useWindowDimensions();
  console.log('Logging dimensions', dimensions)

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between'
    },
    row: {
      padding: 7,
      borderBottomColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,

      flexDirection: 'row',
    },
    description: {
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
      width: useWindowDimensions().width * 1,
      fontSize: 20,
    },
    cover: {
      width: useWindowDimensions().width / 2.5,
      height: useWindowDimensions().height / 3.5,
      marginRight: 10
    },
  })
}

export default MangaView;