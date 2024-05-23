import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';

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
                <TouchableOpacity
                style={styles.gerarSenhaButton}
                    onPress={this.handleGerarSenha}
                >
                <Text style={styles.addButtonText}>Gerar Senha</Text>
                </TouchableOpacity>
                <Image source={require('../assets/img3.png')} style={styles.imagem} />
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
    addButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    senhaText: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    gerarSenhaButton: {
      backgroundColor: 'blue',
      borderRadius: 50,
      padding: 10,
    },
    imagem: {
      padding: 10,
      margin: 10,
      height: 150,
      width: 150,
    }
});

export default GerarSenha;
