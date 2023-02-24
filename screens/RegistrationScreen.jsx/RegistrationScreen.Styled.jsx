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

    backgroundColor: "#fff",
    borderRadius: 50,
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
    top: 310,
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

export default styles;
