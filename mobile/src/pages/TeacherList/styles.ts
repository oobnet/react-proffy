import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
        marginTop: -40
    },

    searchForm: {
        marginBottom: 2,
        marginTop:-20
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 2,
        marginBottom: 4
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },
    inputBlock: {
        width: '48%'
    },
    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 4
    },
    textFiltar:{
        fontFamily: 'Archivo_700Bold',
        color:'#fff',
        fontSize: 16,
    }
})

export default styles