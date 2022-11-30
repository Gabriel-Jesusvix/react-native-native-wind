import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg"> Login NativeWind!</Text>
        <TextInput
          className="w-[90%] px-4 m-2 rounded-md h-11 bg-slate-300 "
          value={name}
          onChangeText={(name) => {
            setName(name);
          }}
          placeholder="Seu nome"
        />
        <TextInput
          className="w-[90%] px-4 m-2 rounded-md h-11 bg-slate-300 "
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry
          placeholder="Digite sua senha..."
        />
        <TouchableOpacity
          title="Login"
          className="w-[90%] items-center justify-center h-10 mt-5 rounded-md bg-lime-300"
          onPress={() => alert("Login")}
        >
          <Text className="text-lg text-gray-900">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
