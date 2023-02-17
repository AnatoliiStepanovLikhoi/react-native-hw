import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function App() {
  // console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/PhotoBG.jpg")}
      >
        {/* <Text style={styles.text}>Open up React native!</Text> */}
        <View style={styles.form}>
          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            placeholder={"Логін"}
          />
          <TextInput
            style={{ ...styles.input, marginBottom: 16 }}
            placeholder={"Адреса електронної пошти"}
          />
          <TextInput
            style={styles.input}
            placeholder={"Пароль"}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.btnTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          {/* <Button
            onPress={null}
            title="Зареєструватися"
            color="#FF6C00"
            accessibilityLabel="Register"
            style={styles.button}
          /> */}
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
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
    // justifyContent: "flex-end",
    justifyContent: Platform.OS === "ios" ? "flex-end" : "center",
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
    backgroundColor: Platform.OS === "ios" ? "#007AFF" : "#FF6C00",
    borderRadius: 100,
    borderColor: "transparent",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
