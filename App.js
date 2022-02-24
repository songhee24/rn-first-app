import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={{ padding: 40, marginTop: 20 }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <TextInput
          placeholder="Course Goal"
          style={{ width: '80%', borderColor: "black", borderWidth: 1, height: 50, paddingLeft: 6 }}
        />
        <Button title="ADD" />
      </View>
    </View>
  );
}
