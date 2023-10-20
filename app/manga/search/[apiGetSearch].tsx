import {useGlobalSearchParams} from "expo-router";
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {MangaVerse, Manga} from "../../../data/manga";
import {Box, Text, Center, FlatList} from "native-base";
import {useStyle} from "../../../components/MangaListStyles";
import {RenderMangaVerse} from "../../../components/renderViews/RenderMangaVerse";
import RenderManga from "../../../components/renderViews/RenderManga";

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
  const [mangaResult, setResult] = useState<Manga[]>([]); // MangaVerse, array
  const styles = useStyle();

  if (apiGetSearch == null) {
    return <Box>No results!</Box>
  }

  const urlParam = new URLSearchParams({
    text: apiGetSearch.toString()
  })
  // swap url with: https://mangaverse-api.p.rapidapi.com/manga/search?
  const url = "https://manga-api-70c3.onrender.com/api/search/?keyword=" + urlParam.toString();


  useEffect(() => {
    fetch(url) // Put back option if switching to other api
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json()
        }
        else {
          throw new Error('Not status code 200! Status: ' + resp.status)
        }
      })
      .then((json) => setResult(json))
      .catch((error) => console.warn(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Center>{apiGetSearch}</Center>
      <Box style={styles.container} safeAreaBottom={5}>
        {isLoading ? (
          <Center>
            <ActivityIndicator/>
          </Center>
        ) : (
          mangaResult ? (
            mangaResult.length > 0 ? ( // Data.
              <FlatList
                data={mangaResult} // .data
                keyExtractor={(item) => item.id.toString()} // <RenderMangaVerse {...item}/>
                renderItem={({item}) => <RenderManga {...item}/>} // RenderMangaVerse
              />) : (<Text fontSize={30}>Bad search!</Text>) ) : (<Text fontSize={30}>No results! :(</Text>)
        )
        }
      </Box>
    </>
  );
};