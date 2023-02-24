import { StyleSheet, Dimensions } from "react-native";

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

    paddingTop: 32,
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

  header: {
    marginBottom: 33,

    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,

    color: "#212121",

    textAlign: "center",
  },

  pageTitle: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
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
    fontFamily: "Roboto-Regular",
  },
  showPasswordButton: {
    position: "absolute",
    top: 183,
    right: 32,

    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",

    color: "#1B4371",
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "center",

    width: "100%",
    // paddingTop: 43,
    marginTop: 43,
    marginBottom: 144,
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },

  loginButton: {
    paddingTop: 16,
  },

  loginButtonText: {
    color: "#1b4371",
    fontFamily: "Roboto-Regular",
  },
});

export default styles;
