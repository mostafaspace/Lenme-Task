import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants';

export default StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.alabaster,
    },
    container: {
        height: 56,
        backgroundColor: Colors.alabaster,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
