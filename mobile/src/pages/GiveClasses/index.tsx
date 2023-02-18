import React from 'react';
import { Text, View, ImageBackground} from 'react-native';
import bgImg from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles'
import {useNavigation} from '@react-navigation/native'





export default function GiveClasses(){
  const {goBack} = useNavigation()

  function handleBackLandingPage(){
    goBack()
  }
  return (
    <View style={styles.container}>
     <ImageBackground    resizeMode="contain" source={bgImg} style={styles.contents}>
      <Text style={styles.title}>Quer ser um Proffy</Text>
      <Text style={styles.description}>Para começar voce precisa se cadastrar na nossa plataforma web</Text>
     </ImageBackground>

     <RectButton onPress={handleBackLandingPage} style={styles.button}>
       <Text style={styles.buttonText}>Tudo bem</Text>
     </RectButton>
    </View>
  );
}