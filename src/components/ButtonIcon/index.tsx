import React from "react";

import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
  Image,
} from "react-native";

import Discord from "../../assets/discord.png";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
