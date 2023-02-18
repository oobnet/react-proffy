import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#8257E5',
       justifyContent:'center',
       padding: 40
    },
    contents: {
        flex: 1,
        justifyContent: 'center'
     
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight:37,
        maxWidth: 180
    },
    description: {
        marginTop: 24,
        fontSize: 16,
        lineHeight: 26,
        color: '#fff',
        fontFamily: 'Poppins_600SemiBold',
        maxWidth: 240
    },
    button: {
        backgroundColor: '#04d361',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 58,
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16
    }
})

export default styles