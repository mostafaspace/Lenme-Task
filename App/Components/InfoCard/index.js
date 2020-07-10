import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import {Images} from '../../Resources';

export const InfoCard = ({title, value, color, onPress}) => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity
                style={Styles.subContainer}
                onPress={() => onPress()}>
                <View>
                    <Text style={Styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={Styles.value}>{value}</Text>
                    <Image
                        source={Images.exclamationMark}
                        style={Styles.exclamationImage}
                    />
                </View>
            </TouchableOpacity>
            <View style={[Styles.colorView, {backgroundColor: color}]} />
        </View>
    );
};

InfoCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
};
