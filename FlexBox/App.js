import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cor1}>
        <Text>cor1 #03fca1</Text>
      </View>
      <View style={styles.cor2}>
        <Text>cor2 #fc7b03</Text>
      </View>
      <View style={styles.cor3}>
        <Text>cor3 #fc7b03</Text>
      </View>
      <View style={styles.meio}>
        <View style={styles.cor4}>
          <Text>cor4 #6603fc</Text>
        </View>
        <View style={styles.cor5}>
          <Text>cor5 #6603fc</Text>
        </View>
      </View>
      <View style={styles.cor6}>
        <Text>cor6 #03fca1</Text>
      </View>
      <View style={styles.seisCaixas}>
        <View style={styles.cor7}>
          <Text>cor7 #fcad03</Text>
        </View>
        <View style={styles.cor7}>
          <Text>cor7 #fcad03</Text>
        </View>
        <View style={styles.cor7}>
          <Text>cor7 #fcad03</Text>
        </View>
        <View style={styles.cor7}>
          <Text>cor7 #fcad03</Text>
        </View>
        <View style={styles.cor7}>
          <Text>cor7 #fcad03</Text>
        </View>
        <View style={styles.cor7}>
          <Text>cor7 #fcad03</Text>
        </View>
      </View>
      <View style={styles.cor8}>
        <Text>cor8 #037bfc</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cor1: {
    backgroundColor: "#03fca1",
    height: "3%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cor2: {
    backgroundColor: "#fc7b03",
    height: "15%",
    width: "28%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "5%",
  },

  cor3: {
    backgroundColor: "#fc7b03",
    height: "5%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "5%",
  },
  meio: {
    flexDirection: "row",
    height: "10%",
    marginTop: "5%",
  },
  cor4: {
    backgroundColor: "#6603fc",
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  cor5: {
    backgroundColor: "#035efc",
    height: "100%",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  cor6: {
    backgroundColor: "#03fca1",
    height: "3%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  seisCaixas: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10%",
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
  },
  cor7: {
    backgroundColor: "#fcad03",
    width: "25%",
    height: "32%",
    alignItems: "center",
    justifyContent: "center",
  },
  cor8: {
    backgroundColor: "#037bfc",
    width: "100%",
    height: "10.5%",
    alignItems: "center",
    justifyContent: "center",
  },
});
