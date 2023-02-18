import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
     backgroundColor:'#fff',
     borderWidth: 1,
     borderColor: '#e6e6f0',
     borderRadius: 8,
     marginBottom: 16,
     overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profInfo: {
        marginLeft: 16
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color:'#32264d',
        fontSize: 20
    },
    subject: {
        fontFamily: 'Poppins_600SemiBold',
        color:'#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    bio:{
        fontFamily: 'Poppins_400Regular',
        color:'#6a6180',
        fontSize: 14,
        marginHorizontal: 24,
        lineHeight: 24
    },
    footer: {
        alignItems: 'center',
        backgroundColor: '#fafafc',
        padding:24,
        marginTop: 24
    },
  
    bottonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },

    price: {
        fontFamily: 'Archivo_700Bold',
        color:'#6a6180',
        fontSize: 14,
    },
    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color:'#8257e5',
        fontSize: 16
    },
    favoriteBotton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:8
    },
    watzapBotton: {
        backgroundColor: '#04d361',
      
        flex: 1,
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:8
    },
    contentButtonText: {
        fontFamily: 'Archivo_700Bold',
        color:'#fff',
        fontSize: 16,
        marginLeft: 16
    },
    isFavorite: {
        backgroundColor: 'red'
    }
})

export default styles