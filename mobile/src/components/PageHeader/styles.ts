import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5'
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        maxWidth: 160,
        fontSize:24,
        lineHeight: 32,
        marginVertical: 30
    },
    header: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  
})

export default styles