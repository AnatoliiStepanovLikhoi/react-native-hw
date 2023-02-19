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

export default function App() {
  // console.log(Platform.OS);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/PhotoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
          >
            <View style={styles.header}>
              <Text style={styles.pageTitle}>Реєстрація</Text>
            </View>
            <View
              style={{ ...styles.form, marginBottom: isShowKeyboard ? -32 : 0 }}
            >
              <TextInput
                style={{ ...styles.input, marginBottom: 16 }}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                placeholder={"Логін"}
              />
              <TextInput
                style={{ ...styles.input, marginBottom: 16 }}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                placeholder={"Адреса електронної пошти"}
              />
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                placeholder={"Пароль"}
                secureTextEntry={true}
              />
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={keyboardHide}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <Text style={styles.alreadySignedText}>
                Уже есть аккаунт? Войти
              </Text>
              {/* <Button
            onPress={null}
            title="Зареєструватися"
            color="#FF6C00"
            accessibilityLabel="Register"
            style={styles.button}
          /> */}
            </View>
            {/* <StatusBar style="auto" /> */}
          </KeyboardAvoidingView>
          {/* <Text style={styles.text}>Open up React native!</Text> */}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
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
