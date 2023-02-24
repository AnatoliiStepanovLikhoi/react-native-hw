import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
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
import styles from "./RegistrationScreen.Styled";

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
    <TouchableWithoutFeedback onPress={keyboardHide}>
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
    </TouchableWithoutFeedback>
  );
}
