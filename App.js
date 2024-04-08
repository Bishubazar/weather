import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SearchInput from "./components/SearchInput";

import React, { useEffect, useState } from "react";
import { API_KEYS } from "./utils/constants";
import styles from "./utils/styles";
import Details from "./components/Details";
import icons from "./utils/icons";
import bg from "./assets/bg.jpg";
export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [wicon, setWicon] = useState();

  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`
      );

      // Condition Icon
      if ((response.status = 200)) {
        const data = await response.json();

        if (data.weather[0].icon === "01d") {
          setWicon(icons._01d);
        } else if (data.weather[0].icon === "01n") {
          setWicon(icons._01n);
        } else if (data.weather[0].icon === "02d") {
          setWicon(icons._02d);
        } else if (data.weather[0].icon === "02n") {
          setWicon(icons._02n);
        } else if (
          data.weather[0].icon === "03d" ||
          data.weather[0].icon === "03n"
        ) {
          setWicon(icons._03);
        } else if (
          data.weather[0].icon === "04d" ||
          data.weather[0].icon === "04n"
        ) {
          setWicon(icons._04);
        } else if (
          data.weather[0].icon === "09d" ||
          data.weather[0].icon === "09n" ||
          data.weather[0].icon === "10d" ||
          data.weather[0].icon === "10n"
        ) {
          setWicon(icons._09);
        } else if (
          data.weather[0].icon === "13d" ||
          data.weather[0].icon === "13n"
        ) {
          setWicon(icons._13);
        } else if (
          data.weather[0].icon === "50d" ||
          data.weather[0].icon === "50n"
        ) {
          setWicon(icons._50);
        } else {
          setWicon(icons._01d);
        }

        // Condition Icon
        setWeatherData(data);
        console.log(data.timezone);
        if (data.timezone) {
        }
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error", "Байхгүй газар байна");
    }
  };

  useEffect(() => {
    fetchWeatherData("London");
  }, []);
  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size={"large"} color="red" />
      </View>
    );
  }
  var currentTime = new Date().getHours();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={bg}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.detailsContainer}>
          <Details
            weatherData={weatherData}
            wicon={wicon}
            setWicon={setWicon}
          />
          <SearchInput
            weatherData={weatherData}
            fetchWeatherData={fetchWeatherData}
          />
        </View>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </KeyboardAvoidingView>
  );
}
