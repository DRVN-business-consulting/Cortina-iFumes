import React from "react";
import { SafeAreaView, Text, Image, View, StyleSheet } from "react-native";
import { useTheme } from "../ThemeContext";

const MusicList = ({ children }) => {

  const { theme } = useTheme()

  return (
    <View>
      <View style={[style.band, {
        backgroundColor: theme === 'dark' ? '#4b5563' : '#f59e0b'
      }]}>
        <Image
          style={style.bandImage}
          source={require("../../../assets/images/IFume/shinedown.jpg")}
        ></Image>
        <Text style={style.bandName}>Shinedown</Text>
      </View>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  band: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f59e0b',
    padding: 20
  },
  bandName: {
    color: "#f8fafc",
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 6
  },
  bandImage: {
    height: 100,
    width: 100,
    borderRadius: 7,
  },
});

export default MusicList;
