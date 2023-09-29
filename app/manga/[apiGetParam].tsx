import {useGlobalSearchParams} from "expo-router";
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import {Manga} from "../../src/data/manga";
import {Box, Text, Center, FlatList, Image} from "native-base";

// https://manga-api-70c3.onrender.com/api/search?keyword=berserk
// https://api.mangadex.org/docs/swagger.html#/Manga/get-manga-random
// https://myanimelist.net/apiconfig/references/api/v2#operation/manga_get
// https://nativebase.io/

const MangaView = () => {
  const { apiGetParam} = useGlobalSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Manga[]>([]);
  const styles = useStyle();

  const url = "https://manga-api-70c3.onrender.com/api/" + apiGetParam;


  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box style={styles.container}>
      {isLoading ? (
        <Center>
          <ActivityIndicator/>
        </Center>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
            <ScrollView style={styles.row} horizontal={true}>
              <Image
                source={{uri: item.cover}}
                style={styles.cover}
                alt={"Manga cover image"}
              />
              <Box style={styles.description}>

                <Text style={styles.text}>
                  <Text style={{fontWeight: "bold"}}>
                    Title:
                  </Text>
                  <Text> </Text>
                  <Text style={{fontWeight: "200"}}>
                    {item.title}
                  </Text>
                </Text>

                <Text style={styles.text}>
                  <Text style={{fontWeight: "bold"}}>
                    Chapters:
                  </Text>
                  <Text> </Text>
                  <Text style={{fontWeight: "200"}}>
                    {item.chapters.total}
                  </Text>
                </Text>

                <Text style={styles.text}>
                  <Text style={{fontWeight: "bold"}}>
                    Languages:
                  </Text>
                  <Text> </Text>
                  <Text style={{fontWeight: "200"}}>
                    {item.chapters.lang}
                  </Text>
                </Text>


                {item.genres ? (
                    <Text style={styles.text}>
                      <Text style={{fontWeight: "bold"}}>
                        Genres:
                      </Text>
                      <Text> </Text>
                      <Text fontWeight={"200"}>
                        {item.genres.join(", ")}
                      </Text>
                    </Text>)
                  : false}


                {item.synopsis ? (
                    <Text style={styles.text}>
                      <Text style={{fontWeight: "bold"}}>
                        Synopsis:
                      </Text>
                      <Text> </Text>
                      <Text fontWeight={"200"}>
                        {item.synopsis}
                      </Text>
                    </Text>)
                  : false}

              </Box>
            </ScrollView>
          }
        />
      )
      }
    </Box>
  );
};

const useStyle = () => {
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
    description: {},
    text: {
      flex: 1,
      flexWrap: 'wrap',
      width: useWindowDimensions().width,
      fontSize: 20,
    },
    cover: {
      width: useWindowDimensions().width / 2.5,
      height: useWindowDimensions().height / 3.5,
      marginRight: 10
    },
    pageTitle: {
      fontSize: 30,
      justifyContent: "center",
    },
  })
}

export default MangaView;