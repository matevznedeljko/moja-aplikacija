
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import KarticaNaloge from "../components/kartica-naloge";
import { theme } from "../theme";

export default function HomeScreen() {
  const [naloge, setNaloge] = useState([
    {
      id: 1,
      naslov: "Narediti domačo nalogo",
      opravljeno: true,
    },
    {
      id: 2,
      naslov: "Učiti se React Native",
      opravljeno: false,
    },
    {
      id: 3,
      naslov: "Urediti projekt",
      opravljeno: false,
    },
  ]);

  function spremeniStatus(id: number) {
    setNaloge((stareNaloge) =>
      stareNaloge.map((naloga) =>
        naloga.id === id
          ? {
              ...naloga,
              opravljeno: !naloga.opravljeno,
            }
          : naloga
      )
    );
  }

  const opravljene = naloge.filter(
    (naloga) => naloga.opravljeno
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.naslov}>
        Moje naloge
      </Text>

      <Text style={styles.opis}>
        Organiziraj svoje vsakodnevne naloge.
      </Text>

      <View style={styles.seznam}>
        {naloge.map((naloga) => (
          <KarticaNaloge
            key={naloga.id}
            naslov={naloga.naslov}
            opravljeno={naloga.opravljeno}
            onToggle={() => spremeniStatus(naloga.id)}
          />
        ))}
      </View>

      <View style={styles.statistika}>
        <Text style={styles.stevilo}>
          Opravljene naloge
        </Text>

        <Text style={styles.rezultat}>
          {opravljene} / {naloge.length}
        </Text>

        <View style={styles.progBar}>
          <View
            style={[
              styles.progBarNapredek,
              {
                width: `${(opravljene / naloge.length) * 100}%`,
              },
            ]}
          />
        </View>
      </View>

      <Link href="/podrobnosti" asChild>
        <Pressable style={styles.gumb}>
          <Text style={styles.povezava}>
            Poglej podrobnosti →
          </Text>
        </Pressable>
      </Link>
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
    marginBottom: 10,
  },

  opis: {
    fontSize: 17,
    color: theme.colors.secondary,
    marginBottom: 25,
  },

  seznam: {
    marginTop: 5,
  },

  statistika: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 18,
    marginTop: 10,
  },

  stevilo: {
    fontSize: 15,
    color: theme.colors.secondary,
  },

  rezultat: {
    fontSize: 25,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginTop: 5,
  },

  progBar: {
    height: 9,
    backgroundColor: theme.colors.border,
    borderRadius: 10,
    marginTop: 15,
    overflow: "hidden",
  },

  progBarNapredek: {
    height: "100%",
    backgroundColor: theme.colors.success,
    borderRadius: 10,
  },

  gumb: {
    marginTop: 22,
    alignItems: "center",
    padding: 18,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
  },

  povezava: {
    color: theme.colors.primary,
    fontSize: 17,
    fontWeight: "bold",
  },
});
