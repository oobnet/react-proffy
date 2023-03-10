import React, { ReactNode } from 'react'
import {BorderlessButton} from 'react-native-gesture-handler'
import styles from './styles'
import { View, Text, Image } from 'react-native'
import backImg from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'
import {useNavigation} from '@react-navigation/native'
interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode
}
const PageHeader: React.FC<PageHeaderProps> = ({title, headerRight, children}) => {
    
    const {navigate} = useNavigation()

    function hanldeGoBack(){
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View  style={styles.topBar}>
                <BorderlessButton onPress={hanldeGoBack}>
                    <Image  source={backImg} resizeMode="contain" />
                </BorderlessButton>
                <Image  source={logoImg} resizeMode="contain"/>
            </View>

            <View  style={styles.header}>
                <Text style={styles.title}> {title}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    )
}

export default PageHeader