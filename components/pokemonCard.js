import { StyleSheet, View, Text, Platform, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#ffd700", emoji: " ⚡️ " };
    case "water":
      return { borderColor: "#6493EA", emoji: " 💧 " };
    case "fire":
      return { borderColor: "#FF5733", emoji: " 🔥 " };
    case "grass":
      return { borderColor: "#A0A0A0", emoji: " 🥬 " };
    default:
      return { borderColor: "A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={style.card}>
      <View style={style.nameContainer}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.hp}>❤️‍🔥{hp}</Text>
      </View>
      <Image
        source={image}
        style={style.image}
        accessibilityLabel={`${name}pokemon`}
        resizeMode="contain"
      />

      <View style={style.typeContainer}>
        <View style={[style.badge, { borderColor }]}>
          <Text style={style.typeEmoji}>{emoji}</Text>
          <Text style={style.typeText}>{type}</Text>
        </View>
      </View>

      <View style={style.movesContainer}>
        <Text style={style.movesText}>Moves: {moves.join(" , ")}</Text>
      </View>
      <View style={style.weaknessContainer}>
        <Text style={style.weaknessText}>
          Weaknesses: {weaknesses.join(" , ")}
        </Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, heght: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        evelation: 6,
      },
    }),
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },

  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },

  badge: {
    flexDirection: "row",
    alighnItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 5,
  },
  typeEmoji: {
    fontSize: 25,
    marginRight: 12,
  },
  typeText: {
    fontSize: 25,
    fontWeight: "bold",
  },

  movesContainer: {
    marginBottom: 18,
  },
  movesText: {
    fontSize: 21,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 21,
    fontWeight: "bold",
  },
});
