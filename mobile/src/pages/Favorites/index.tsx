import React, { useState, useEffect } from 'react'
import {  View , ScrollView} from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles';
import TeacherItem, { TeacherInterface } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';

export default function  Favorites(){
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<any>([])
 
    
 
    useEffect(() => {
        loadFavi()
        teachersCjange()
      }, [])

    async function loadFavi(){
        const favis = await   AsyncStorage.getItem('favorites')
        if(favis){
            console.log('JSON.parse(favis): ', JSON.parse(favis));
            setFavorites(JSON.parse(favis))
        }
    }

    function teachersCjange(){
        // const finds = favorites.filter(  resp =>  )
        setTeachers(favorites)
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Favoritos" />
            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
            >
           
           {
                teachers.map( (teacher: TeacherInterface) => <TeacherItem 
                    key={teacher?.id} 
                    teacher={teacher}
                    favoritos={favorites.find( (resp:TeacherInterface) => resp.id == teacher.id )}
                /> )
            }
                

            </ScrollView>
        </View>
      );
}

