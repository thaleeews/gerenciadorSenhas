import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

class GerarSenha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            senha: this.gerarSenha(),
        };
    }

    gerarSenha = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let senha = '';
        for (let i = 0; i < 15; i++) {
            senha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return senha;
    };

    handleGerarSenha = () => {
        this.setState({ senha: this.gerarSenha() });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.senhaText}>{this.state.senha}</Text>
                <Button title="Gerar" onPress={this.handleGerarSenha} />
                <Image source={require('../assets/img3.png')} style={styles.footerImage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    senhaText: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default GerarSenha;
