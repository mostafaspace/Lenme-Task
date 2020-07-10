import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Constants';

export default StyleSheet.create({
    container: {
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        borderRadius: 4,
        backgroundColor: Colors.white,
    },
    contentContainer: {
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
    },
    regularContainer: {
        backgroundColor: Colors.white,
    },
    text: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.regular,
        color: Colors.white,
        textAlign: 'center',
    },
    regularText: {
        color: Colors.flamingo,
        fontFamily: Fonts.type.bold,
    },
});
