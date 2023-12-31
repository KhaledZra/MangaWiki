import { Link, router, useGlobalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Manga } from "../../data/manga";
import {
  Box,
  Text,
  Center,
  FlatList,
  Image,
  VStack,
  Pressable,
  Heading,
} from "native-base";

export default function Random() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Manga>();
  const styles = useStyle();

  const url = "https://manga-api-70c3.onrender.com/api/random";

  useEffect(() => {
    Promise.race([
      fetch(url)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("Internal server Error");
          }
        })
        .then((json) => setData(json))
        .catch((error) => {
          console.log(error);
          router.replace("/manga/Random");
        })
        .finally(() => setLoading(false)),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`timeout after 10000`)), 10000)
      ).catch((error) => {
        console.log(error);
      }),
    ]);
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <Center>
          <ActivityIndicator />
        </Center>
      ) : data ? (
        <VStack safeArea={6} space={2}>
          <Pressable
            onPress={() => router.replace("manga/Random")}
            rounded="8"
            overflow="hidden"
            borderWidth="1"
            borderColor="coolGray.300"
            maxW="96"
            shadow="3"
            bg="coolGray.700"
            p="5"
          >
            <Center>
              <Heading>Randomize Again</Heading>
            </Center>
          </Pressable>

          <Center>
            <Image
              source={{ uri: data.cover }}
              style={styles.cover}
              alt={"Manga cover image"}
            />
          </Center>

          <Box>
            <Text fontSize={20}>
              <Text style={{ fontWeight: "bold" }}>Title:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "200" }}>{data.title}</Text>
            </Text>

            <Text fontSize={20}>
              <Text style={{ fontWeight: "bold" }}>Type:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "200" }}>{data.type}</Text>
            </Text>

            <Text fontSize={20}>
              <Text style={{ fontWeight: "bold" }}>Score:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "200" }}>{data.score}</Text>
            </Text>

            <Text fontSize={20}>
              <Text style={{ fontWeight: "bold" }}>Published:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "200" }}>{data.published}</Text>
            </Text>

            <Text fontSize={20}>
              <Text style={{ fontWeight: "bold" }}>Status:</Text>
              <Text> </Text>
              <Text style={{ fontWeight: "200" }}>{data.status}</Text>
            </Text>

            {data.genres ? (
              <Text fontSize={20}>
                <Text style={{ fontWeight: "bold" }}>Genres:</Text>
                <Text> </Text>
                <Text fontWeight={"200"}>{data.genres.join(", ")}</Text>
              </Text>
            ) : (
              false
            )}

            {data.synopsis ? (
              <Text fontSize={20}>
                <Text style={{ fontWeight: "bold" }}>Synopsis:</Text>
                <Text> </Text>
                <Text fontWeight={"200"}>{data.synopsis}</Text>
              </Text>
            ) : (
              false
            )}
          </Box>
        </VStack>
      ) : (
        <Text>Error loading random manga!</Text>
      )}
    </ScrollView>
  );
}

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
    },
    row: {
      padding: 7,
      borderBottomColor: "white",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderTopWidth: StyleSheet.hairlineWidth,

      flexDirection: "row",
    },
    description: {},
    text: {
      flex: 1,
      flexWrap: "wrap",
      width: useWindowDimensions().width,
      fontSize: 20,
    },
    cover: {
      width: useWindowDimensions().width / 1.2,
      height: useWindowDimensions().height / 1.7,
    },
    textSize: {},
  });
};
