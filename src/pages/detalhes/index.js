import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import api from '../../services/api';

const Detalhes = () => { 

  const [infOficina, setinfOficina] = useState([])
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

   getOficinas();


    return () => {
      isActive = false;
      ac.abort();
    }
  }, [])

  
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>Nome:{infOficina.Nome}</Text>
                <Text style={styles.userInfo}>Email:{infOficina.email}</Text>
                <Text style={styles.userInfo}>Endereço:{infOficina.endereco}</Text>
                <Text style={styles.userInfo}>Avaliação:{infOficina.AvaliacaoUsuario}</Text>
               
            </View>
          </View>
      <ScrollView>
          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Codigo Associação:{infOficina.CodigoAssociacao} </Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>              
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Descrição Curta:{infOficina.DescricaoCurta}</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Telefone:{infOficina.Telefone}</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Latitude:{infOficina.Latitude}</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Longitude:{infOficina.Longitude} </Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Descrição:{infOficina.Descricao}</Text>
              </View>
            </View>
            
          </View>
        </ScrollView>
      </View>
    );
  
}

export default Detalhes
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#38a69d",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:20,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:15,
    color:"#000",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#E7E6E1",
    height:600,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:3
  },
  iconContent:{
    
    alignItems:'flex-start',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:15,
    marginTop:20,
    color: "#000",
  }
});

                                            