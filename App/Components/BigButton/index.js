import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Constants';

export const BigButton = ({text, onPress, gradient}) => {
    return (
        <TouchableOpacity
            style={Styles.container}
            onPress={() => onPress && onPress()}>
            {gradient ? (
                <LinearGradient
                    colors={[Colors.cornflowerBlue, Colors.electricViolet]}
                    start={{x: 0.0, y: 1.0}}
                    end={{x: 1.0, y: 1.0}}
                    style={Styles.contentContainer}>
                    <Text style={Styles.text} numberOfLines={1}>
                        {text}
                    </Text>
                </LinearGradient>
            ) : (
                <View
                    style={[Styles.contentContainer, Styles.regularContainer]}>
                    <Text
                        style={[Styles.text, Styles.regularText]}
                        numberOfLines={1}>
                        {text}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

BigButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    gradient: PropTypes.bool,
};
