import React from 'react';
import {SafeAreaView, View} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

export const Header = ({children, containerStyle}) => {
    return (
        <SafeAreaView style={[Styles.safeArea]}>
            <View style={[Styles.container, containerStyle]}>{children}</View>
        </SafeAreaView>
    );
};

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    containerStyle: PropTypes.object,
    noShadow: PropTypes.bool,
};
