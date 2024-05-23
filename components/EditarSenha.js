import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert, Vibration } from 'react-native';
import firebase from '../config/config';
import { MaterialIcons } from '@expo/vector-icons';

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
        firebase.database().ref('tbl_senhas/'+id).update({
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

    deletarSenha = () => {
      const { id, localSenha, senha, observacoes } = this.state;
      firebase.database().ref('/tbl_senhas/'+id).remove().
      then(() => {
            Alert.alert('Sucesso', 'Senha excluída com sucesso!');
            Vibration.vibrate(500);
            this.props.navigation.navigate('PaginaLogado');
        })
        .catch((error) => {
            Alert.alert('Erro', 'Falha ao deletar senha: ' + error.message);
        });
    }

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
                
                <TouchableOpacity
                style={styles.gerarSenhaButton}
                    onPress={this.salvarSenha}
                >
                <Text style={styles.addButtonText}>Salvar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.deletarSenha} style={styles.botaoDelete}>
                                <MaterialIcons name="delete" size={32} color="red" />
                            </TouchableOpacity>
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
    botaoDelete: {
      backgroundColor: 'black',
      borderRadius: 50,
      padding: 10,
      marginLeft: 70,
      marginRight: 70,
      marginBottom: 15,
      marginTop: 15,
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    gerarSenhaButton: {
      backgroundColor: 'blue',
      borderRadius: 50,
      padding: 10,
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
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
