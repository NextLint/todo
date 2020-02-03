import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 0,
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    message: {
        fontSize: 18,
        color: 'orange',
        fontWeight: 'bold'
    },
    btn: {
        height: 30,
        width: 50,
    },
    btn__text: {
        fontSize: 15,
        color: 'green'
    }
})