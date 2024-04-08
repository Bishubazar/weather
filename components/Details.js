import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import SearchInput from "./SearchInput";
import styles from "../utils/styles";
import { capitalizeFirstLetter } from "../utils/constants";
import icons from "../utils/icons";

export default function Details({ weatherData, wicon, setWicon }) {
  // const [wicon, setWicon] = useState();

  const {
    name,
    weather: [{ icon, description }],
    main: { temp, temp_min, temp_max, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;

  return (
    <View>
      <Image
        style={styles.largeIcon}
        // source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
        source={wicon}
      />
      <Text style={[styles.largeText, styles.textStyle]}>{name}</Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        {capitalizeFirstLetter(description)}
      </Text>
      {/* <Text style={[styles.smallText, styles.textStyle]}>
        {new Date(sunrise * 1000).toLocaleString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Text> */}

      <Text style={[styles.largeText, styles.textStyle]}>
        {Math.ceil(temp)}°
      </Text>

      {/* <View style={{ display: "flex" }}>
        <Text style={styles.textStyle}>
          {temp_max}° / {temp_min}° Feels like {feels_like}°
        </Text>
      </View> */}
    </View>
  );
}
