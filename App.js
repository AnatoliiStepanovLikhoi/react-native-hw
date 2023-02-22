import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  // Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import RegistrationScreen from "./screens/RegistrationScreen.jsx/RegistrationScreen";

export default function App() {
  // console.log(Platform.OS);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <RegistrationScreen />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 48,
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // justifyContent: Platform.OS === "ios" ? "flex-end" : "center",
  },
  // innerContainer: {
  //   // position: "relative",
  //   backgroundColor: "#fff",
  //   // marginTop: 90,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   borderTopLeftRadius: 25,
  //   borderTopRightRadius: 25,
  // },
  form: {
    marginHorizontal: 16,
    // marginBottom: 32,
  },

  header: { marginBottom: 33 },

  pageTitle: {
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",

    height: 50,
    padding: 16,
    // marginHorizontal: 16,
    borderRadius: 8,

    color: "#212121",
    backgroundColor: "#F6F6F6",

    fontSize: 16,
  },

  button: {
    height: 51,
    marginTop: 43,
    padding: 16,
    borderRadius: 100,
    borderColor: "transparent",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",

    ...Platform.select({
      ios: {
        backgroundColor: "#007AFF",
      },

      android: {
        backgroundColor: "#FF6C00",
      },
    }),
  },

  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  alreadySignedText: {
    fontSize: 16,
    // color: "#1B4371",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 78,
  },
});
