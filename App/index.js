import React from 'react';
import NavigationRouter from './Navigation';
import {StatusBar, Platform} from 'react-native';

export function App() {
    return (
        <>
            <StatusBar
                barStyle={
                    Platform.OS === 'ios' ? 'dark-content' : 'light-content'
                }
            />
            <NavigationRouter />
        </>
    );
}
