import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

export default function LocationScreen({ navigation }) {
  const [zone, setZone] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = () => {
    if (!zone || !area) {
      alert("Please select zone and area");
      return;
    }
    // Giả sử sau khi chọn location xong thì chuyển sang Login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Location</Text>
      <TextInput
        placeholder="Your Zone"
        style={styles.input}
        value={zone}
        onChangeText={setZone}
      />
      <TextInput
        placeholder="Your Area"
        style={styles.input}
        value={area}
        onChangeText={setArea}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#3cb371', padding: 12, alignItems: 'center', borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});
