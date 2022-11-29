import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    
} from "react-native";

import api from "../../services/api"

import { useNavigation } from '@react-navigation/native'



export default function EnviarIdicacao() {

    const navigation = useNavigation();

    const [codigoAssociacao, setCodigoAssociacao] = useState('')
    const [cpfAssociado, setCpfAssociado] = useState('')
    const [emailAssociado, setEmailAssociado] = useState('')
    const [dataCriacao, setdataCriacao] = useState('')
    const [telefoneAssociado, setTelefoneAssociado] = useState('')
    const [nomeAssociado, setNomeAssociado] = useState('')
    const [placaVeiculoAssociado, setPlacaVeiculoAssociado] = useState('')
    const [nomeAmigo, setNomeAmigo] = useState('')
    const [telefoneAmigo, setTelefoneAmigo] = useState('')
    const [emailAmigo, setEmailAmigo] = useState('')

   

    const validar = () => {

          let error = false
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
     if(emailAmigo && telefoneAmigo  && telefoneAssociado == ''){
        alert("Você deve preecher as informaçõess")
     }else{
       if(!re.test(String(emailAmigo).toLowerCase())){
        alert("Preencha seu e-mail corretamente")
        error = true
       }
       if (!cpfField.isValid()){
        setErrorCpf("Preencha seu CPF corretamente")
        error = true
      }
      if (telefoneAmigo && telefoneAssociado == null){
        alert("Preencha seu telefone corretamente")
        error = true
      }
    }
       return !error
    }

    function handleCadastro() {

        if (validar()) {
            const data = {
                codigoAssociacao,
                cpfAssociado,
                emailAssociado,
                dataCriacao,
                telefoneAssociado,
                nomeAssociado,
                placaVeiculoAssociado,
                nomeAmigo,
                telefoneAmigo,
                emailAmigo

            }

            console.log(data)
            fazerIndicao(data)
        }
    }


    function fazerIndicao(data) {

        api.post("http://app.hinovamobile.com.br/ProvaConhecimentoWebApi/Api/Indicacao", data)
            .then((resopnse) => {
                console.log(resopnse.data)
                if(resopnse.status == 200){
                    alert("Idicação enviada")
                }
                
            }).catch((error) => {
                console.error(error)
            })
    }

    return (

        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <Text style={styles.message}>Vamos começar?</Text>
                    <Text style={styles.title}>Complete os dados para enviar uma indicação.</Text>
                </View>



                <Text style={styles.textInput}>Codigo Associação:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCodigoAssociacao}
                    value={codigoAssociacao}
                    placeholder="Digite codigo associação"
                />

                <Text style={styles.textInput}>CPF associado:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCpfAssociado}
                    value={cpfAssociado}
                    keyboardType="numeric"
                    returnKeyType="done"
                    placeholder="ex: 803.204.951-75"
                   

                />

                <Text style={styles.textInput}>Email associado:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailAssociado}
                    value={emailAssociado}
                    keyboardType="email-address"
                    placeholder="minhabula@tes.com"
                />
                <Text style={styles.textInput}>Data Criação:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setdataCriacao}
                    value={dataCriacao}
                    placeholder="00/00/0000"
                    keyboardType="numeric"
                />

                <Text style={styles.textInput}>Nome associado:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNomeAssociado}
                    value={nomeAssociado}
                    placeholder="Digite nome"
                    
                />

                <Text style={styles.textInput}>Telefone associado:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTelefoneAssociado}
                    value={telefoneAssociado}
                    placeholder="ex : (61) 2825-1287"

                />
                
                <Text style={styles.textInput}>Placa</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPlacaVeiculoAssociado}
                    value={placaVeiculoAssociado}
                    placeholder="ex : BBE 3R22"

                />

                <Text style={styles.textInput}>Nome Amigo:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNomeAmigo}
                    value={nomeAmigo}
                    placeholder=""

                />
                <Text style={styles.textInput}>Telefone associado:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTelefoneAmigo}
                    value={telefoneAmigo}
                   
                    keyboardType="phone-pad"
                    returnKeyType="done"
                    placeholder="ex : (61) 2825-1287"

                />

                <Text style={styles.textInput}>Email do amigo:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmailAmigo}
                    value={emailAmigo}
                    keyboardType="email-address"
                    placeholder="minhabula@tes.com"
                    
                    

                />
                

                <TouchableOpacity
                    onPress={handleCadastro}
                    style={styles.buttonCadastrar}>
                    <Text style={styles.buttonText}>Finalizar indicação</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFAFA',
        padding: 12

    },
    containerHeader: {
        padding: 12
    },
    title: {
        fontSize: 12,
        marginBottom: 5,
        color: '#121212',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginStart: 18
    },
    textInput: {
        fontSize: 13,
        marginEnd: 5,
        color: '#121212',
        alignSelf: 'flex-start',
        marginStart: 5,
        marginTop: 10

    },
    input: {
        width: '100%',
        height: 35,
        backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 15,
        padding: 5,
        margin: 6
    },
    buttonCadastrar: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bunttonVoltarLongin: {
        marginTop: 14,
        alignSelf: 'center'
    },
    loginVoltar: {
        color: '#a1a1a1'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    }
})