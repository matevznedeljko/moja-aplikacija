
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";

export default function PodrobnostiScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.naslov}>
        O aplikaciji
      </Text>

      <Text style={styles.opis}>
        Moje naloge je mobilna aplikacija za
        organizacijo vsakodnevnih opravil.
      </Text>

      <View style={styles.kartica}>
        <Text style={styles.podnaslov}>
          Kaj omogoča aplikacija?
        </Text>

        <Text style={styles.besedilo}>
          • Pregled vsakodnevnih nalog{"\n\n"}
          • Označevanje opravljenih nalog{"\n\n"}
          • Spremljanje napredka{"\n\n"}
          • Preprosta uporaba
        </Text>
      </View>

      <View style={styles.kartica}>
        <Text style={styles.podnaslov}>
          Uporabljene tehnologije
        </Text>

        <Text style={styles.besedilo}>
          React Native{"\n"}
          Expo{"\n"}
          TypeScript{"\n"}
          Expo Router
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  },

  naslov: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 15,
  },

  opis: {
    fontSize: 17,
    color: theme.colors.secondary,
    lineHeight: 25,
    marginBottom: 25,
  },

  kartica: {
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  podnaslov: {
    fontSize: 19,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: 15,
  },

  besedilo: {
    fontSize: 16,
    lineHeight: 25,
    color: theme.colors.secondary,
  },
});
