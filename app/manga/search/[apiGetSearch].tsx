import {useGlobalSearchParams} from "expo-router";
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import {MangaVerse} from "../../../src/data/manga";
import {Box, Text, Center, FlatList, Image} from "native-base";

// https://manga-api-70c3.onrender.com/api/search?keyword=berserk
// https://api.mangadex.org/docs/swagger.html#/Manga/get-manga-random
// https://myanimelist.net/apiconfig/references/api/v2#operation/manga_get
// https://nativebase.io/

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a78a47c0c3msh5eb9bdb3d41c8b6p14054djsn0ecf136b57fb',
    'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com'
  }
};



const MangaView = () => {
  const {apiGetSearch} = useGlobalSearchParams();
  const [isLoading, setLoading] = useState(true);
  const [mangaResult, setResult] = useState<MangaVerse>();
  const styles = useStyle();

  if (apiGetSearch == null) {
    return <Box>No results!</Box>
  }

  const urlParam = new URLSearchParams({
    text: apiGetSearch.toString()
  })
  const url = "https://mangaverse-api.p.rapidapi.com/manga/search?" + urlParam.toString();


  useEffect(() => {
    fetch(url, options)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json()
        }
        else {
          throw new Error('Not status code 200! Status: ' + resp.status)
        }
      })
      .then((json) => setResult(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // if (mangaResult == null) {
  //   return <Text fontSize={30}>Bad search!</Text>
  // }
  //
  // if (mangaResult.code != 200) {
  //   return <Text fontSize={30}>Was not successful!</Text>
  // }
  //
  // if (mangaResult.data.length < 1) {
  //   return <Text fontSize={30}>No results! :(</Text>
  // }

  return (
    <>
      <Center>{apiGetSearch}</Center>
      <Box style={styles.container}>
        {isLoading ? (
          <Center>
            <ActivityIndicator/>
          </Center>
        ) : (
          mangaResult ? (
              mangaResult.data.length > 0 ? (
            <FlatList
              data={mangaResult.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) =>
                <ScrollView style={styles.row} horizontal={true}>
                  <Image
                    source={{uri: item.thumb}}
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
                        Status:
                      </Text>
                      <Text> </Text>
                      <Text style={{fontWeight: "200"}}>
                        {item.status}
                      </Text>
                    </Text>

                    <Text style={styles.text}>
                      <Text style={{fontWeight: "bold"}}>
                        Authors:
                      </Text>
                      <Text> </Text>
                      <Text style={{fontWeight: "200"}}>
                        {item.authors.join(", ")}
                      </Text>
                    </Text>

                    <Text style={styles.text}>
                      <Text style={{fontWeight: "bold"}}>
                        Genres:
                      </Text>
                      <Text> </Text>
                      <Text style={{fontWeight: "200"}}>
                        {item.genres.join(", ")}
                      </Text>
                    </Text>

                    <Text style={styles.text}>
                      <Text style={{fontWeight: "bold"}}>
                        Summary:
                      </Text>
                      <Text> </Text>
                      <Text style={{fontWeight: "200"}}>
                        {item.summary}
                      </Text>
                    </Text>

                  </Box>
                </ScrollView>
              }
            />) : (<Text fontSize={30}>Bad search!</Text>) ) : (<Text fontSize={30}>No results! :(</Text>)
        )
        }
      </Box>
    </>
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