import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import MusicList from "./MusicList";
import MusicPlayer from "./MusicPlayer";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  View,
  Button,
  Switch,
} from "react-native";
import { useTheme } from "../ThemeContext";
import {
  style,
  PRIMARY_BLUE,
  PRIMARY_GREEN,
  PRIMARY_ORANGE,
} from "../../styles/theme";

const Container = () => {
  const [music, setMusic] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [primary, setPrimary] = useState(null);
  const [playing, setPlaying] = useState(null);

  const { theme, setTheme } = useTheme();

  const SONGLIST = [
    {
      id: 1,
      title: "Sound of Madness",
      album: "The Sound of Madness",
      img: require("../../../assets/images/IFume/The_Sound_Of_Madness.jpg"),
    },
    {
      id: 2,
      title: "Cut the Cord",
      album: "Threat to Survival",
      img: require("../../../assets/images/IFume/Cut_the_Cord.jpg"),
    },
    {
      id: 3,
      title: "A Symptom Of Being Human",
      album: "Planet Zero",
      img: require("../../../assets/images/IFume/A_Sympto_Of_Being_Human.jpg"),
    },
    {
      id: 4,
      title: "DEVIL",
      album: "ATTENTION ATTENTION",
      img: require("../../../assets/images/IFume/DEVIL.png"),
    },
    {
      id: 5,
      title: "Second Chance",
      album: "The Sound of Madness",
      img: require("../../../assets/images/IFume/The_Sound_Of_Madness.jpg"),
    },
    {
      id: 6,
      title: "45",
      album: "Leave a Whisper (Deluxe Edition)",
      img: require("../../../assets/images/IFume/45.jpg"),
    },
    {
      id: 7,
      title: "State of My Head",
      album: "Threat to Survival",
      img: require("../../../assets/images/IFume/Cut_the_Cord.jpg"),
    },
    {
      id: 8,
      title: "MONSTERS",
      album: "ATTENTION ATTENTION",
      img: require("../../../assets/images/IFume/DEVIL.png"),
    },
    {
      id: 9,
      title: "Enemies",
      album: "Amaryllis",
      img: require("../../../assets/images/IFume/Enemies.jpg"),
    },
    {
      id: 10,
      title: "Diamond Eyes (Boom-Lay Boom-Lay Boom)",
      album: "The Sound of Madness",
      img: require("../../../assets/images/IFume/Diamond_Eyes.jpg"),
    },
  ];

  useEffect(() => {
    if (isEnabled) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isEnabled]);

  useEffect(() => {
    if (music !== null) {
      const [playing] = SONGLIST.filter((el) => el.title === music);
      setPlaying(playing.img);
    }
  }, [music]);

  return (
    <SafeAreaView
      style={[
        {
          height: "100%",
        },
        style[theme],
      ]}
    >
      <StatusBar animated={true} backgroundColor="#FFFFFF" />
      <SafeAreaView style={style.iFumeContainer}>
        <View
          style={{
            marginTop: 30,
            paddingVertical: 6,
            paddingHorizontal: 14,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  {
                    marginRight: 6,
                    fontWeight: "bold",
                    color: isEnabled ? "#f8fafc" : "#1f2937",
                  },
                ]}
                onPress={() => setPrimary(null)}
              >
                Themes
              </Text>
              <TouchableOpacity
                style={{
                  height: 15,
                  width: 15,
                  padding: 15,
                  borderRadius: 100,
                  backgroundColor: "#22d3ee",
                }}
                onPress={() => setPrimary(PRIMARY_BLUE)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 15,
                  width: 15,
                  padding: 15,
                  borderRadius: 100,
                  backgroundColor: "#2dd4bf",
                  marginLeft: 5,
                }}
                onPress={() => setPrimary(PRIMARY_GREEN)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 15,
                  width: 15,
                  padding: 15,
                  borderRadius: 100,
                  backgroundColor: "#44403c",
                  marginLeft: 5,
                }}
                onPress={() => setPrimary(PRIMARY_ORANGE)}
              ></TouchableOpacity>
              {music !== null && (
                <TouchableOpacity
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 15,
                    width: 15,
                    borderRadius: 100,
                    marginLeft: 10,
                  }}
                  onPress={() => setMusic(null)}
                >
                  <Image
                    style={{
                      position: "absolute",
                      height: 30,
                      width: 30,
                      margin: "auto",
                      tintColor: isEnabled ? "#f8fafc" : "#1f2937",
                    }}
                    source={require("../../../assets/images/icon/home.png")}
                  ></Image>
                </TouchableOpacity>
              )}
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                setIsEnabled((previousState) => !previousState)
              }
              value={isEnabled}
            />
          </View>
        </View>
        {music === null ? (
          <MusicList>
            <FlatList
              data={SONGLIST}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    style.musicList,
                    {
                      backgroundColor: isEnabled ? "#4b5563" : "#f8fafc",
                    },
                    primary !== null && {
                      backgroundColor: primary,
                    },
                  ]}
                  onPress={() => setMusic(item.title)}
                >
                  <View style={style.musicContainer}>
                    <Image style={style.musicImg} source={item.img}></Image>
                    <View style={style.musicTextContainer}>
                      <Text
                        ellipsizeMode="tail"
                        style={[
                          style.musicTitle,
                          {
                            color: isEnabled ? "#FFFFFF" : "#334155",
                          },
                          primary !== null && {
                            color: '#FFFFFF',
                          },
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          style.musicAlbum,
                          {
                            color: isEnabled ? "#FFFFFF" : "#64748b",
                          },
                          primary !== null && {
                            color: '#FFFFFF',
                          },
                        ]}
                      >
                        Album: {item.album}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </MusicList>
        ) : (
          <MusicPlayer>
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#f59e0b",
                  padding: 20,
                }}
              >
                <Image
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 7,
                  }}
                  source={playing}
                ></Image>
                <View>
                  <Text
                    style={{
                      color: "#f8fafc",
                      fontSize: 15,
                      fontWeight: "bold",
                      marginHorizontal: 6,
                    }}
                  >
                    Now Playing
                  </Text>
                  <Text
                    style={{
                      color: "#f8fafc",
                      fontSize: 25,
                      fontWeight: "bold",
                      marginHorizontal: 6,
                    }}
                  >
                    {music}
                  </Text>
                </View>
              </View>
            </View>
            <FlatList
              data={SONGLIST}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    style.musicList,
                    {
                      backgroundColor: isEnabled ? "#4b5563" : "#f8fafc",
                    },
                    primary !== null && {
                      backgroundColor: primary,
                    },
                  ]}
                  onPress={() => setMusic(item.title)}
                >
                  <View style={[style.musicContainer, {
                    opacity: item.title === music ? 0.3 : 1
                  }]}>
                    <Image style={style.musicImg} source={item.img}></Image>
                    <View style={style.musicTextContainer}>
                      <Text
                        ellipsizeMode="tail"
                        style={[
                          style.musicTitle,
                          {
                            color: isEnabled ? "#FFFFFF" : "#334155",
                          },
                          primary !== null && {
                            color: '#FFFFFF',
                          },
                        ]}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={[
                          style.musicAlbum,
                          {
                            color: isEnabled ? "#FFFFFF" : "#64748b",
                          },
                          primary !== null && {
                            color: '#FFFFFF',
                          },
                        ]}
                      >
                        Album: {item.album}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            ></FlatList>
          </MusicPlayer>
        )}
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Container;
