import {useGlobalSearchParams} from "expo-router";
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import {Manga} from "../../data/manga";
import {Box, Center, FlatList} from "native-base";
import RenderManga from "../../components/renderViews/RenderManga";

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
    <Box style={styles.container} safeAreaBottom={5}>
      {isLoading ? (
        <Center>
          <ActivityIndicator/>
        </Center>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <RenderManga {...item}/>
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
    }
  })
}

export default MangaView;