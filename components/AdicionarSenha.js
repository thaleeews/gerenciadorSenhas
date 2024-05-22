import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import firebase from '../config/config';

class AdicionarSenha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localSenha: '',
            senha: '',
            observacoes: ''
        };
    }

    gravarSenha = () => {
        const { localSenha, senha, observacoes } = this.state;
        firebase.database().ref('tbl_senhas').push({
            localSenha,
            senha,
            observacoes
        })
        .then(() => {
            Alert.alert('Sucesso', 'Senha salva com sucesso!');
            this.props.navigation.navigate('PaginaLogado');
        })
        .catch((error) => {
            Alert.alert('Erro', 'Falha ao salvar senha: ' + error.message);
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Local da Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ localSenha: text })}
                    value={this.state.localSenha}
                />
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ senha: text })}
                    secureTextEntry
                    value={this.state.senha}
                />
                <Text style={styles.label}>Observações:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ observacoes: text })}
                    value={this.state.observacoes}
                />
                <Button title="Salvar" onPress={this.gravarSenha} />
                <Image source={require('../assets/img2.png')} style={styles.footerImage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginVertical: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
        borderRadius: 4,
    },
    footerImage: {
        marginTop: 20,
        alignSelf: 'center',
        width: 200,
        height: 100,
    },
});

export default AdicionarSenha;
