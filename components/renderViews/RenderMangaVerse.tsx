import {MangaVerseData} from "../../src/data/manga";
import {Box, Image, Text} from "native-base";
import {ScrollView} from "react-native";
import React from "react";
import {useStyle} from "../MangaListStyles";

export function RenderMangaVerse (manga: MangaVerseData) {
  const styles = useStyle();

  return (
    <ScrollView style={styles.row} horizontal={true}>
      <Image
        source={{uri: manga.thumb}}
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
            {manga.title}
          </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>
            Status:
          </Text>
          <Text> </Text>
          <Text style={{fontWeight: "200"}}>
            {manga.status}
          </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>
            Authors:
          </Text>
          <Text> </Text>
          <Text style={{fontWeight: "200"}}>
            {manga.authors.join(", ")}
          </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>
            Genres:
          </Text>
          <Text> </Text>
          <Text style={{fontWeight: "200"}}>
            {manga.genres.join(", ")}
          </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>
            Summary:
          </Text>
          <Text> </Text>
          <Text style={{fontWeight: "200"}}>
            {manga.summary}
          </Text>
        </Text>

      </Box>
    </ScrollView>
  )
}
