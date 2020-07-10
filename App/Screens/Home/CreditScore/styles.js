import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../../Constants';

export default StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 8,
        marginBottom: 24,
    },
    profileImage: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    },
    mainContainer: {
        flex: 1,
        marginHorizontal: 8,
    },
    profileText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size.h5,
        margin: 8,
    },
    scoreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
    scoreSubContainer: {
        flexGrow: 1,
    },
    scoreText: {
        flex: 1,
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size.small,
        color: Colors.dustyGray,
        textTransform: 'uppercase',
    },
    scoreDetailsContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    scoreNumberText: {
        marginHorizontal: 8,
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size.h6,
    },
    lenmeImage: {
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
    vantageText: {
        marginHorizontal: 8,
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size.xs,
        color: Colors.dustyGray,
    },
});
