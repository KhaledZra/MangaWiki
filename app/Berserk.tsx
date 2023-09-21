import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


// https://manga-api-70c3.onrender.com/redoc

const Berserk = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={styles.mainLogo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Berserk_anime_logo.png' }}
      />
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://cdnb.artstation.com/p/assets/images/images/024/649/921/large/hugo-tahar-berserk-guts.jpg?1583101312' }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 500,
    height: 700,
  },
  mainLogo: {
    width: 200,
    height: 100,
    marginBottom: 10
  },
});

export default Berserk;