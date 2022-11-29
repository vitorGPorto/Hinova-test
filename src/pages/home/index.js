import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView
} from 'react-native';

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Cell
} from 'react-native-table-component';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [tableHead, setTableHead] = useState(['Codigo Associação', 'Nome', 'Descrição Curta', 'Detalhes'])
  const [tableData, setTableData] = useState([
  ['601', 'Oficina Gecar', 'Lanternagem e Pintura', 'd'],
  ])

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getOficinas() {


      const [oficinaData] = await Promise.all([
        api.get("/Api/Oficina/", {
          params: {
            codigoAssociacao: "601",
            cpfAssociado: ""
          },
        })
      ]).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.error(error)
      })

      if (isActive) {
        setTableData(oficinaData)
      }
    }

   //getOficinas();


    return () => {
      isActive = false;
      ac.abort();
    }
  }, [])

 /* api.get('/Api/Oficina/', {
    params: {
      codigoAssociacao: "601",
      cpfAssociado: ""
    },
  }).then((response) => {
    console.log(response.data)
    //setTableData(response.data)
  }).catch((error) => {
    console.error(error)
  })
*/
  function navigationDetail() {
    navigation.navigate('EnviarIdicacao')
  }


  const element = () => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Ver</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <View style={styles.containerHeader}>
          <Text style={styles.message}>Lista das Oficinas</Text>
        </View>

        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>

          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {
            tableData?.map((data, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  data.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                  ))
                }
                <Text>{data.Nome}</Text>
              </TableWrapper>
            ))
          }

        </Table>
      </ScrollView>
      <Text style={styles.title}>Deseja fazer indicação de um amigo?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('EnviarIdicacao')}
        style={styles.buttonIndicacao}
      >
        <Text style={styles.buttonText}>Fazer indicação</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )

}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    paddingTop: 30,
    backgroundColor: '#E7E6E1'
  },
  containerHeader: {
    padding: 12
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    color: '#121212',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginStart: 10
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10
  },
  head: {
    backgroundColor: '#38a69d'
  },
  text: {
    margin: 6
  },
  row: {

    flexDirection: 'row',
    backgroundColor: '#ffff'
  },
  btn: {
    width: 58,
    height: 18,
    backgroundColor: '#78B7BB',
    borderRadius: 2,
    margin: 15
  },
  btnText: {
    textAlign: 'center',
    color: '#fff'
  },
  buttonIndicacao: {
    backgroundColor: '#38a69d',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',

  }
});