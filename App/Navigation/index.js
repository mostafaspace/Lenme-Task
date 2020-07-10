import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';

// screens identified by the router
import {HomeScreen} from '../Screens';

export default function NavigationRouter() {
    return (
        <Router>
            <Stack key="root" gesturesEnabled={false}>
                <Scene key="Home" component={HomeScreen} hideNavBar initial />
            </Stack>
        </Router>
    );
}
