import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 8,
        marginBottom: 16,
    },
    subContainer: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        borderRadius: 6,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    exclamationImage: {
        position: 'absolute',
        right: -4,
        top: -2,
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
    colorView: {
        position: 'absolute',
        width: 5,
        height: '100%',
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: Fonts.size.xs,
        fontFamily: Fonts.type.semibold,
        color: Colors.dustyGray,
        textTransform: 'uppercase',
        textAlign: 'left',
        paddingRight: 16,
    },
    value: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size.h5,
        color: Colors.black,
        textAlign: 'left',
        marginTop: 8,
    },
});
