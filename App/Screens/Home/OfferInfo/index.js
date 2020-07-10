import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import {Colors} from '../../../Constants';
import {BigButton} from '../../../Components/BigButton';
import Slider from 'react-native-slider';
import LinearGradient from 'react-native-linear-gradient';

export default function OfferInfo() {
    return (
        <View style={Styles.container}>
            <View style={Styles.amountsContainer}>
                <View>
                    <Text style={Styles.amountHeadText}>
                        {'Investment Amount'}
                    </Text>
                    <View style={Styles.amountTextContainer}>
                        <Text style={Styles.amountSmallText}>{'$'}</Text>
                        <Text style={Styles.amountBigText}>{'970'}</Text>
                    </View>
                </View>
                <View>
                    <Text style={Styles.amountHeadText}>
                        {'Payback Period'}
                    </Text>
                    <View style={Styles.amountTextContainer}>
                        <Text style={Styles.amountBigText}>{'1'} </Text>
                        <Text style={Styles.amountSmallText}>{'month'}</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={Styles.amountHeadText}>{'Annual Interests'}</Text>
                <Text style={Styles.recommendedText}>
                    {'Recommended interest rate: 3%'}
                </Text>
            </View>

            <View style={Styles.amountTextContainer}>
                <Text style={Styles.amountBigText}>{'4'}</Text>
                <Text style={Styles.amountSmallText}>{'%'}</Text>
            </View>

            <Slider
                value={20}
                minimumValue={1}
                maximumValue={100}
                step={1}
                maximumTrackTintColor="#D8D8D8"
                trackStyle={Styles.trackStyle}
                customMinimumTrack={
                    <LinearGradient
                        start={{x: 0.0, y: 1.0}}
                        end={{x: 1.0, y: 1.0}}
                        colors={[Colors.cornflowerBlue, Colors.electricViolet]}
                        style={Styles.gradientStyle}
                    />
                }
                customThumb={<View style={Styles.customThumb} />}
            />

            <View style={Styles.percentageTextContainer}>
                <Text style={Styles.percentageText}>{'0%'}</Text>
                <Text style={Styles.percentageText}>{'100%'}</Text>
            </View>

            <BigButton text={'Dismiss'} onPress={() => {}} />

            <BigButton text={'Make Offer'} gradient />
        </View>
    );
}
