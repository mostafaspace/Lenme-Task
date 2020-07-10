import React from 'react';
import {View, BackHandler, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Styles from './styles';
import {Images} from '../../Resources';
import {Header} from '../../Components/Header';
import {HeaderButton} from '../../Components/HeaderButton';
import CreditScore from './CreditScore';
import FinancialHealth from './FinancialHealth';
import OfferInfo from './OfferInfo';

export default function HomeScreen() {
    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onBack);
        return function () {
            BackHandler.removeEventListener('hardwareBackPress', onBack);
        };
    }, []);

    const onBack = () => {
        if (Actions.currentScene === 'Home') {
            BackHandler.exitApp();
            return true;
        }
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.container}>
                <Header>
                    <HeaderButton image={Images.arrowBack} onClick={onBack} />
                </Header>

                {/*Credit score, Financial health, Offer Information*/}
                <ScrollView bounces={false}>
                    <View style={Styles.mainContainer}>
                        <CreditScore />

                        <FinancialHealth />
                    </View>

                    <View style={Styles.offerContainer}>
                        <OfferInfo />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
