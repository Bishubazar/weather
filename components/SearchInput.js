import { View, Text, Image, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "../utils/styles";

export default function SearchInput({ fetchWeatherData }) {
  const [cityName, setCityName] = useState("");
  return (
    <View>
      {/* <Text style={[styles.largeText, styles.textStyle]}>{name}</Text>
      <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
      <Image
        style={styles.largeIcon}
        source={{ uri: `http://openweatherapp.org/img/wn/${icon}.png` }}
      />
      <Text style={[styles.largeText, styles.textStyle]}>{temp}°</Text> */}

      <TextInput
        placeholder="Search City"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        style={styles.textInput}
        placeholderTextColor={"white"}
        enterKeyHint="enter"
        returnKeyType="search"
        onSubmitEditing={() => fetchWeatherData(cityName)}
      />
      {/* <Button onPress={() => fetchWeatherData(cityName)} title="Search" /> */}
    </View>
  );
}
