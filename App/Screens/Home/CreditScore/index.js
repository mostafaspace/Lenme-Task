import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './styles';
import {Images} from '../../../Resources';

export default function CreditScore() {
    return (
        <View style={Styles.profileContainer}>
            <Image source={Images.profilePic} style={Styles.profileImage} />
            <View style={Styles.mainContainer}>
                <Text style={Styles.profileText}>{'IO'}</Text>

                <View style={Styles.scoreContainer}>
                    <View style={Styles.scoreSubContainer}>
                        <Text style={Styles.scoreText}>{'Lenme Score'}</Text>

                        <View style={Styles.scoreDetailsContainer}>
                            <Image
                                source={Images.lenmeScore}
                                style={Styles.lenmeImage}
                            />
                            <Text style={Styles.scoreNumberText}>{'73'}</Text>
                            <Image
                                source={Images.exclamationMark}
                                style={Styles.lenmeImage}
                            />
                        </View>
                    </View>

                    <View style={Styles.scoreSubContainer}>
                        <Text style={Styles.scoreText}>{'Credit Score'}</Text>

                        <View style={Styles.scoreDetailsContainer}>
                            <Image
                                source={Images.creditScore}
                                style={Styles.lenmeImage}
                            />
                            <Text style={Styles.scoreNumberText}>
                                {'500-630'}
                            </Text>
                            <Image
                                source={Images.exclamationMark}
                                style={Styles.lenmeImage}
                            />
                        </View>
                    </View>
                </View>

                <Text style={Styles.vantageText}>{'Vantage Score 4.0'}</Text>
            </View>
        </View>
    );
}
