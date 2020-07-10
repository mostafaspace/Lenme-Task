import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants';

export default StyleSheet.create({
    container: {
        padding: 16,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'transparent',
    },
    image: {
        resizeMode: 'contain',
        width: 24,
        height: 18,
        tintColor: Colors.electricViolet,
    },
});
