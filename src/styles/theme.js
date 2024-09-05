import { StyleSheet } from "react-native";

export const PRIMARY_BLUE = "#22d3ee";
export const PRIMARY_GREEN = "#2dd4bf";
export const PRIMARY_ORANGE = "#44403c";

export const style = StyleSheet.create({
  dark: {
    backgroundColor: '#1f2937'
  },
  light: {
    backgroundColor: '#FFFFFF'
  },
  appContainer: {
    // height: "auto",
  },
  themeCOntainer: {
    // height: "auto",
    backgroundColor: 'black'
  },
  iFumeContainer: {
    height: "70%",
  },
  musicContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  musicList: {
    shadowColor: "black",
    marginVertical: 6,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    marginHorizontal: 20,
    overflow: "hidden",
  },
  musicTextContainer: {
    marginHorizontal: 6,
    overflow: "hidden",
  },
  musicImg: {
    height: 60,
    width: 60,
    borderRadius: 7,
  },
  musicTitle: {
    color: "#334155",
    fontSize: 18,
    fontWeight: "bold",
  },
  musicAlbum: {
    color: "#64748b",
    fontSize: 10,
    fontWeight: "600",
  },
});
