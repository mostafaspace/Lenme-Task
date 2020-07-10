import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../../Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    amountsContainer: {
        paddingVertical: 24,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    amountHeadText: {
        color: Colors.electricViolet,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.h6,
    },
    amountTextContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    amountBigText: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size.h3,
    },
    amountSmallText: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size.h6,
        lineHeight: 20,
    },
    recommendedText: {
        marginTop: 12,
        color: Colors.dustyGray,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.h6,
    },

    trackStyle: {
        height: 6,
        borderRadius: 50,
    },
    gradientStyle: {
        width: '100%',
        height: 6,
        borderRadius: 50,
    },
    customThumb: {
        width: 22,
        height: 22,
        margin: 8,
        borderRadius: 20 / 2,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },

    percentageTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    percentageText: {
        marginTop: -8,
        color: Colors.dustyGray,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.medium,
    },
});
