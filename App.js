import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/pokemonCard";
export default function App() {
  const squirtleData = {
    name: "squirtle",
    image: require("./assets/p2.jpg"),
    type: "water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Water", "Rock"],
  };
  const bulbasaurData = {
    name: "bulbasaur",
    image: require("./assets/p4.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire ", "Ice", "Flying", "Psychic"],
  };
  const pikachuData = {
    name: "pikachu",
    image: require("./assets/p1.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "GrTail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  const charmanderData = {
    name: "Charmander",
    image: require("./assets/p3.jpg"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Enber", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...bulbasaurData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 50 : 30,
  },
});
