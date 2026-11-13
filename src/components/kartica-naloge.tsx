
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { theme } from "../theme";

type Props = {
  naslov: string;
  opravljeno: boolean;
  onToggle: () => void;
};

export default function KarticaNaloge({
  naslov,
  opravljeno,
  onToggle,
}: Props) {
  return (
    <Pressable onPress={onToggle}>
      <View style={styles.kartica}>
        <View style={styles.vsebina}>
          <Text
            style={[
              styles.naslov,
              opravljeno && styles.precrtano,
            ]}
          >
            {naslov}
          </Text>

          <Text
            style={[
              styles.status,
              opravljeno && styles.opravljeno,
            ]}
          >
            {opravljeno ? "Opravljeno" : "V teku"}
          </Text>
        </View>

        <View
          style={[
            styles.krog,
            opravljeno && styles.krogOpravljen,
          ]}
        >
          {opravljeno && (
            <Text style={styles.kljukica}>✓</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  kartica: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  vsebina: {
    flex: 1,
    marginRight: 10,
  },

  naslov: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.text,
  },

  precrtano: {
    textDecorationLine: "line-through",
  },

  status: {
    marginTop: 8,
    fontSize: 15,
    color: theme.colors.secondary,
  },

  opravljeno: {
    color: theme.colors.success,
  },

  krog: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: theme.colors.border,
    justifyContent: "center",
    alignItems: "center",
  },

  krogOpravljen: {
    backgroundColor: theme.colors.success,
    borderColor: theme.colors.success,
  },

  kljukica: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: 17,
  },
});
