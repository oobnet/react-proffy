import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#8257E5',
       justifyContent:'center',
       padding: 40
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        color: "#fff",
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
        fontFamily:'Poppins_400Regular'

    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    containerBotoes : {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button: {
        height: 100,
        width:'48%',
        backgroundColor: '#ccc',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        padding: 24
    },
    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    bottonText: {
        color:'#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 20
    },
    totalConnections: {
        color: '#fff',
        marginTop: 20,
        fontFamily: 'Archivo_400Regular'
    }
})

export default styles