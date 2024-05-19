import React, { useState } from 'react';
import { Button, View, StyleSheet, Text, TextInput, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === ''|| Password === '') {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
        } else {
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Você está em Login</Text>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="Email-address"
                autoCapitalize="none"
            />
            <Text>Senha</Text>
            <TextInput
                style={styles.input}
                value={Password}
                onChangeText={setPassword}
                placeholder="Senha"
                secureTextEntry
            />
            <Button
                title="Acessar"
                onPress={handleLogin}
            />
            <Button
                title="Recuperar senha"
                onPress={() => navigation.navigate('Recuperar senha')}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafad2",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    input: {
        width: '40%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8
    }
});
