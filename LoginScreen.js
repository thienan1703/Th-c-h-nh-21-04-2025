import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (!userData) {
        Alert.alert("No user found. Please sign up.");
        return;
      }

      const user = JSON.parse(userData);
      if (email === user.email && password === user.password) {
        Alert.alert("Login successful!");
        // Điều hướng tiếp hoặc lưu trạng thái đăng nhập tại đây
      } else {
        Alert.alert("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 28, marginBottom: 20, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#3cb371', padding: 12, alignItems: 'center', borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { marginTop: 10, textAlign: 'center', color: 'blue' }
});
