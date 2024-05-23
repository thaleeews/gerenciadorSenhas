import * as React from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../config/config';

class PaginaLogado extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            senhas: []
        };
    }

    componentDidMount() {
        this.fetchSenhas();
    }

    fetchSenhas = () => {
        const senhasRef = firebase.database().ref('tbl_senhas');
        senhasRef.on('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                const senhasArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                this.setState({ senhas: senhasArray });
            } else {
                this.setState({ senhas: [] });
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Acesso à plataforma</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => this.props.navigation.navigate('AdicionarSenha')}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.senhas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.senhaItem}>
                            <Text style={styles.senhaText}>Local: {item.localSenha}</Text>
                            <Text style={styles.senhaText}>Senha: {item.senha}</Text>
                            <Text style={styles.senhaText}>Observações: {item.observacoes}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditarSenha', {
                                id: item.id,
                                localSenha: item.localSenha,
                                senha: item.senha,
                                observacoes: item.observacoes,
                            })}>
                                <MaterialIcons name="edit" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
                <TouchableOpacity
                style={styles.gerarSenhaButton}
                    onPress={() => this.props.navigation.navigate('GerarSenha')}
                >
                <Text style={styles.addButtonText}>Gerar Senha</Text>
                </TouchableOpacity>

                <Image source={require('../assets/img1.png')} style={styles.footerImage} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
      marginTop: 40,
        fontSize: 22,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
    },
    gerarSenhaButton: {
      backgroundColor: 'blue',
      borderRadius: 50,
      padding: 10,
    },
    addButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 50,
        marginTop: 40
    },
    addButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    senhaItem: {
        padding: 10,
        marginVertical: 8,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    senhaText: {
        fontSize: 16,
    },
    footerImage: {
        marginTop: 20,
        alignSelf: 'center',
        width: 200,
        height: 100,
    },
});

export default PaginaLogado;
