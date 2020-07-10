import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import {Images} from '../../Resources';

export const HeaderButton = ({image, onClick}) => {
    return (
        <TouchableOpacity style={Styles.container} onPress={() => onClick()}>
            <Image
                source={image ? image : Images.arrowBack}
                style={Styles.image}
            />
        </TouchableOpacity>
    );
};

HeaderButton.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    onClick: PropTypes.func,
};
