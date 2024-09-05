// import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import ThemeContext from "./src/components/ThemeContext";
import Container from "./src/components/IFume/Container";
import { useTheme } from "./src/components/ThemeContext";
import { style } from "./src/styles/theme";

export default function App() {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <ThemeContext>
        <Container />
      </ThemeContext>
    </SafeAreaView>
  );
}
