/**
 * Stylesheet for the Workouts page.
 * 
 * Authors: Imran
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    gridStyle: { backgroundColor: '#f3ebe1' },
    backButtonView:
    {
        backgroundColor: '#f3ebe1'
    },
    backButton: { width: 75, height: 75 },
    mainFocusView: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#f3ebe1'
    },
    mainFocusViewText: { fontSize: 30 },
    selectMainFocusView: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#f3ebe1'
    },
    selectMainFocusViewText: { fontSize: 30 },
    pickerView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 0
    },
    picker: { height: 50, width: 150 },
    focusImageView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 0,
    },
    focusImage: { width: 180, height: 180, alignSelf: 'center', marginTop: "0%" },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#778899",
        borderRadius: 10,
        borderColor: '#fff',
    },
    whiteBox2: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: "90%",
        padding: "7%",
        paddingBottom: "40%",
        marginTop: "10%",
        marginBottom: "-5%",
        marginHorizontal: "5%",
        borderRadius: 20
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff'
    },
    topButton: {
        width: 55,
        height: 55,
        borderRadius: 150,
    },
    buttonView: {
        backgroundColor: '#e7e7e7',
        marginTop: "-50%",
        marginBottom: "10%",
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center'
    }
});