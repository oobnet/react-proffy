import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import heartImg from '../../assets/images/icons/heart.png';
import styles from './styles'
import {RectButton} from 'react-native-gesture-handler'
import api from '../../services/api'

export default function Landing(){

  const {navigate} = useNavigation()
  const [connection, setConnection] = useState(0)
  
  useEffect(() => {
    api.get('/connections').then( connections => {
      setConnection(connections.data.total)
    })
  }, [])
  
  function handleToNavigationClassesPage(){
    navigate('GiveClasses')
  }

  function handleToNavigationStudy(){
    navigate('StudyTab')
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg}  style={styles.banner}/>
      <Text style={styles.title}>
        Seja bem vindo,{`\n`}
          <Text style={styles.titleBold}>
            o que deseja fazer.
        </Text>
      </Text>

      <View style={styles.containerBotoes}>
        <RectButton onPress={handleToNavigationStudy} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyImg} />
          <Text style={styles.bottonText}>Estudar</Text>
        </RectButton>
        <RectButton onPress={handleToNavigationClassesPage} style={[styles.button, styles.buttonSecondary]}>
          <Image source={studyImg} />
          <Text style={styles.bottonText}>Dar autlas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de conexoes já realizadas {connection}{' '} <Image source={heartImg} />
      </Text>
    </View>
  );
}