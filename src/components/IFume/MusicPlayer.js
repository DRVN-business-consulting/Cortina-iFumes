import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

const MusicPlayer = ({ children }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setDuration((prev) => {
        if (prev === 100) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: "#e5e7eb",
          }}
        >
          <View
            style={{
              padding: 2,
              backgroundColor: "#14b8a6",
              borderRadius: 100,
              width: `${duration}%`,
            }}
          ></View>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};

export default MusicPlayer;
