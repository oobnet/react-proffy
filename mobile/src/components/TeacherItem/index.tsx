import  React, {useState, useEffect}  from 'react';
import styles from './styles';
import { View, Image,Text, Linking } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'
import heartImg from '../../assets/images/icons/heart-outline.png'
import unfavoriteImg from '../../assets/images/icons/unfavorite.png'
import AsyncStorage from '@react-native-community/async-storage';

import watzapImg from '../../assets/images/icons/whatsapp.png'

export interface TeacherInterface {
    id: number;
    subject: string;
    cost: string;
    user_id: string;
    name: string;
    avatar?: string;
    whatapp: string;
    bio: string;
}

interface TeacherInterfaceProps {
    teacher: TeacherInterface,
    favoritos: boolean;
}

const TeacherItem: React.FC<TeacherInterfaceProps> = ({teacher,favoritos}) => {
    
   
    const [isFav, setIsFav] = useState(favoritos)

    useEffect( ()=> {
        console.log(teacher.id,favoritos);
    },[])

    function handleLinkWhatapp(){
        Linking.openURL(`whatsapp://send?phone=${teacher.whatapp}`)
    }

   async function handleFavorite(){
        const favoritoSin = await AsyncStorage.getItem('favorites')
        let currentFav = []
        console.log('favoritoSin: ', favoritoSin);
       
        if(favoritoSin){
            currentFav = JSON.parse(favoritoSin)
        }
        
        console.log('isFav: ', isFav);
        if(isFav){
            console.log('currentFav: ', currentFav);
            await AsyncStorage.setItem('favorites', JSON.stringify([])) 
            currentFav = currentFav.filter( (resp: TeacherInterface) => resp.id != teacher.id)
            console.log('currentFav: ', currentFav);
            setIsFav(false)     
        }else{
            currentFav.push(teacher)
            setIsFav(true)     
        }
        
        await AsyncStorage.setItem('favorites', JSON.stringify(currentFav)) 
    }
   
    return (
        <View  style={styles.container}>
            <View style={styles.profile}>
              
                
                <Image

                source={{
                    uri: teacher.avatar
                }}  

                style={styles.avatar}
                />

                <View style={styles.profInfo}>
            <Text style={styles.name}>{teacher.name}</Text>
            <Text style={styles.subject}>{teacher.subject}</Text>
                </View>

            </View>
            <Text style={styles.bio}>{teacher.bio}</Text>

             <View style={styles.footer}>
            <Text style={styles.price}>Preço/Hora {'   '} <Text style={styles.priceValue}>{teacher.cost}</Text></Text>
                <View style={styles.bottonContainer}>
                    <RectButton style={[styles.favoriteBotton,
                   isFav ? styles.isFavorite : null
                    ]} onPress={handleFavorite}>
                       
                       <Image source={ !isFav ? heartImg : unfavoriteImg}  />  
                     
                       
                       
                        
                    </RectButton>
                    <RectButton style={styles.watzapBotton} onPress={handleLinkWhatapp}>
                        <Image source={watzapImg}  />
                        <Text style={styles.contentButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View> 
            </View>

            
        </View>
    )
}

export default TeacherItem
 