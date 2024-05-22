import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firebase from '../config/config';

class EditarSenha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id,
            localSenha: this.props.route.params.localSenha,
            senha: this.props.route.params.senha,
            observacoes: this.props.route.params.observacoes
        };
    }

    salvarSenha = () => {
        const { id, localSenha, senha, observacoes } = this.state;
        firebase.database().ref('tbl_senhas').child(id).update({
            localSenha,
            senha,
            observacoes
        })
        .then(() => {
            Alert.alert('Sucesso', 'Senha atualizada com sucesso!');
            this.props.navigation.navigate('PaginaLogado');
        })
        .catch((error) => {
            Alert.alert('Erro', 'Falha ao atualizar senha: ' + error.message);
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
                <Button title="Salvar" onPress={this.salvarSenha} />
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
});

export default EditarSenha;
