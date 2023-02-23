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
  Dimensions,
  SafeAreaView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const [formState, setFormState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onEmailFocus = () => {
    setIsShowKeyboard(true);
  };

  const onRegister = () => {
    console.log(formState);
    setFormState(initialState);
    keyboardHide();
  };

  const loginHandler = (value) =>
    setFormState((prevState) => ({ ...prevState, login: value }));
  const emailHandler = (value) =>
    setFormState((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setFormState((prevState) => ({ ...prevState, password: value }));
  const showPasswordHandler = () => setIsShowPassword(!isShowPassword);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/PhotoBG.jpg")}
      />
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View
          style={{
            ...styles.formContainer,
            marginBottom: isShowKeyboard ? 32 : 0,
          }}
        >
          <View style={styles.userImageWrapper}>
            <TouchableOpacity style={styles.userIcon} activeOpacity={0.8}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.pageTitle}>Реєстрація</Text>
          </View>

          <TextInput
            style={{
              ...styles.input,
              marginBottom: 16,
              backgroundColor: formState.login ? "#fff" : "#F6F6F6",
              borderColor: formState.login ? "#FF6C00" : "#E8E8E8",
            }}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
            onBlur={() => {
              //   setBorderInputColorName("#E8E8E8");
              setIsShowKeyboard(false);
            }}
            value={formState.login}
            onChangeText={loginHandler}
            placeholder={"Логін"}
            placeholderTextColor="#bdbdbd"
          />
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 16,
              backgroundColor: formState.email ? "#fff" : "#F6F6F6",
              borderColor: formState.email ? "#FF6C00" : "#E8E8E8",
            }}
            onFocus={onEmailFocus}
            onBlur={() => {
              //   setBorderInputColorName("#E8E8E8");
              setIsShowKeyboard(false);
            }}
            value={formState.email}
            onChangeText={emailHandler}
            placeholder={"Адреса електронної пошти"}
            placeholderTextColor="#bdbdbd"
          />
          <View style={{ position: "relative" }}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: formState.password ? "#fff" : "#F6F6F6",
                borderColor: formState.password ? "#FF6C00" : "#E8E8E8",
              }}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onBlur={() => {
                //   setBorderInputColorName("#E8E8E8");
                setIsShowKeyboard(false);
              }}
              value={formState.password}
              onChangeText={passwordHandler}
              placeholder={"Пароль"}
              placeholderTextColor="#bdbdbd"
              secureTextEntry={isShowPassword}
            />
          </View>
          {isShowPassword ? (
            <Text
              style={styles.showPasswordButton}
              onPress={showPasswordHandler}
            >
              Показати
            </Text>
          ) : (
            <Text
              style={styles.showPasswordButton}
              onPress={showPasswordHandler}
            >
              Приховати
            </Text>
          )}
          {/* <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={onRegister}
            >
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text style={styles.alreadySignedText}>
              Уже есть аккаунт? Войти
            </Text> */}
          {/* </View> */}

          {!isShowKeyboard && (
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.registerButton}
                activeOpacity={0.8}
                onPress={onRegister}
              >
                <View pointerEvents="none">
                  <Text style={styles.registerButtonTitle}>
                    Зареєструватися
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.6}
                //   onPress={onLoginPress}
              >
                <Text style={styles.loginButtonText}>
                  Вже маєш акаунт? Увійти.
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    flexGrow: 1,
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,

    resizeMode: "cover",
  },

  formContainer: {
    position: "relative",

    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    // paddingBottom: 32,

    borderColor: "#00000",
    border: 1,
  },

  wrapper: {
    backgroundColor: "#fff",
    // marginBottom: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  userImageWrapper: {
    position: "absolute",
    top: -10,
    left: "50%",

    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    transform: [{ translateX: -44 }, { translateY: -44 }],
  },

  userIcon: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
  },

  text: {
    color: "white",
    fontSize: 48,
    textAlign: "center",
  },

  header: {
    marginBottom: 33,

    // fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,

    color: "#212121",

    textAlign: "center",
  },

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
    width: "100%",
    padding: 16,
    // marginHorizontal: 16,
    borderRadius: 8,

    color: "#212121",
    backgroundColor: "#F6F6F6",

    fontSize: 16,
  },
  showPasswordButton: {
    position: "absolute",
    top: 310,
    right: 32,

    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    // paddingTop: 43,
    marginTop: 43,
    marginBottom: 78,
  },

  registerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 51,
    // marginBottom: 8,

    backgroundColor: "#ff6c00",

    borderRadius: 100,
  },

  registerButtonTitle: {
    // fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },

  loginButton: {
    paddingTop: 16,
  },

  loginButtonText: {
    color: "#1b4371",
  },

  //   button: {
  //     height: 51,
  //     width: "100%",
  //     marginTop: 43,
  //     padding: 16,
  //     borderRadius: 100,
  //     borderColor: "transparent",
  //     // borderWidth: 1,
  //     justifyContent: "center",
  //     alignItems: "center",

  //     ...Platform.select({
  //       ios: {
  //         backgroundColor: "#007AFF",
  //       },

  //       android: {
  //         backgroundColor: "#FF6C00",
  //       },
  //     }),
  //   },

  //   btnTitle: {
  //     color: "#FFFFFF",
  //     fontSize: 16,
  //   },

  //   buttonsContainer: {
  //     display: "flex",
  //     alignItems: "center",

  //     width: "100%",
  //     paddingTop: 11,
  //     paddingBottom: 105,
  //   },

  //   alreadySignedText: {
  //     fontSize: 16,
  //     // color: "#1B4371",
  //     color: "#FFFFFF",
  //     textAlign: "center",
  //     marginTop: 16,
  //     marginBottom: 78,
  //   },
});
