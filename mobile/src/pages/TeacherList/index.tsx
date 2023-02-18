import React, {useState, useEffect} from 'react'
import { View, ScrollView, Text, TextInput} from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import api from '../../services/api';
import {TeacherInterface} from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage';
export default function  Favorites(){
    const [isFilterVisible, setIsFilterVisible] = useState(true)
    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<any[]>([])
    const [week_day, setWeekDay] = useState('1')
    const [time, setTime] = useState('9:00')
    const [subject, setSubject] = useState('PHP')
    
    


   async function loadFavi(){
        const favis = await   AsyncStorage.getItem('favorites')
        if(favis){
            console.log('JSON.parse(favis): ', JSON.parse(favis));
            setFavorites(JSON.parse(favis))
        }
    }

    async function handeleFilterSubmit(){
        await  loadFavi()
        const response = await api.get('/classes',{
            params: {
                week_day, subject, time
            }
        })
 
        setTeachers(response.data.classes)
        setIsFilterVisible(false)
        
    }

    function handleToggleFilter(){
        setIsFilterVisible(!isFilterVisible)
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponiveis" headerRight={(
                <BorderlessButton onPress={handleToggleFilter}>
                    <Feather name="filter" size={28} color="#fff" />
                </BorderlessButton>
            )}>
               {
                   isFilterVisible && (
                    <>
                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Materia</Text>
                            <TextInput value={subject} onChangeText={ text => setSubject(text)} placeholderTextColor="#c1bccc" placeholder="Qual a materia"  style={styles.input}/>
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput value={week_day} onChangeText={ text => setWeekDay(text)} placeholderTextColor="#c1bccc" placeholder="Dia da semana"  style={styles.input}/>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horario</Text>
                                <TextInput value={time} onChangeText={ text => setTime(text)} placeholderTextColor="#c1bccc" placeholder="Qual horario"  style={styles.input}/>
                            </View>
                        </View>
                        <RectButton style={styles.submitButton} onPress={handeleFilterSubmit}>
                            <Text style={styles.textFiltar}>Filtrar</Text>
                        </RectButton>
                    </>
                   )
               }
               
            </PageHeader>
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
                    favoritos={favorites.find( (resp:any) => resp.id == teacher.id )}
                /> )
            }

            </ScrollView>
        </View>
      );
}

