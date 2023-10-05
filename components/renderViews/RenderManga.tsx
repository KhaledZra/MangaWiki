import {Manga} from "../../data/manga";
import {Box, Image, Text, ScrollView} from "native-base";
import React from "react";
import {useStyle} from "../MangaListStyles";

export default function RenderManga (manga: Manga) {
  const styles = useStyle();
  return (
    <ScrollView style={styles.row} horizontal={true}>
      <Image
        source={{uri: manga.cover}}
        style={styles.cover}
        alt={"Manga cover image"}
      />
      <Box style={styles.description} safeArea={3}>

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
            Chapters:
          </Text>
          <Text> </Text>
          <Text style={{fontWeight: "200"}}>
            {manga.chapters.total}
          </Text>
        </Text>

        <Text style={styles.text}>
          <Text style={{fontWeight: "bold"}}>
            Languages:
          </Text>
          <Text> </Text>
          <Text style={{fontWeight: "200"}}>
            {manga.chapters.lang}
          </Text>
        </Text>


        {manga.genres ? (
            <Text style={styles.text}>
              <Text style={{fontWeight: "bold"}}>
                Genres:
              </Text>
              <Text> </Text>
              <Text fontWeight={"200"}>
                {manga.genres.join(", ")}
              </Text>
            </Text>)
          : false}


        {manga.synopsis ? (
            <Text style={styles.text}>
              <Text style={{fontWeight: "bold"}}>
                Synopsis:
              </Text>
              <Text> </Text>
              <Text fontWeight={"200"}>
                {manga.synopsis}
              </Text>
            </Text>)
          : false}

      </Box>
    </ScrollView>
  )
}