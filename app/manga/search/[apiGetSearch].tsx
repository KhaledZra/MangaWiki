import {useGlobalSearchParams} from "expo-router";
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {MangaVerse} from "../../../src/data/manga";
import {Box, Text, Center, FlatList} from "native-base";
import {useStyle} from "../../../components/MangaListStyles";
import {RenderMangaVerse} from "../../../components/renderViews/RenderMangaVerse";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a78a47c0c3msh5eb9bdb3d41c8b6p14054djsn0ecf136b57fb',
    'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com',
  }
};

export default function MangaView()  {
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
                keyExtractor={(item) => item.id.toString()} // <RenderMangaVerse {...item}/>
                renderItem={({item}) => <RenderMangaVerse {...item}/>}
              />) : (<Text fontSize={30}>Bad search!</Text>) ) : (<Text fontSize={30}>No results! :(</Text>)
        )
        }
      </Box>
    </>
  );
};