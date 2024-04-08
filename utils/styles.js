import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    // backgroundColor: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    objectFit: "cover",
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    // ...Platform.select({
    //   ios: {
    //     fontFamily: "AvenirNext-Regular",
    //   },
    //   android: {
    //     fontFamily: "Roboto",
    //   },
    // }),
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: "rgba(200,200,200,0.7)",

    color: "#ffffff",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  largeIcon: {
    width: 200,
    height: 200,

    resizeMode: "contain",
  },
});
