import React from "react";

import { View, Text, Image } from "react-native";

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import Discord from "../../assets/discord.png";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
