import React from 'react';
import Styles from './styles';
import {Colors} from '../../../Constants';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {InfoCard} from '../../../Components/InfoCard';

export default function FinancialHealth() {
    return (
        <Grid style={Styles.infoCardContainer}>
            <Row>
                <Col>
                    <InfoCard
                        title={'Payment History'}
                        value={'1 yr 5 mos'}
                        color={Colors.malachite}
                        onPress={() => {}}
                    />
                </Col>
                <Col>
                    <InfoCard
                        title={'Credit Utilization'}
                        value={'100%'}
                        color={Colors.malachite}
                        onPress={() => {}}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InfoCard
                        title={'Total Accounts'}
                        value={'2'}
                        color={Colors.sunshade}
                        onPress={() => {}}
                    />
                </Col>
                <Col>
                    <InfoCard
                        title={'Total Accounts'}
                        value={'11%'}
                        color={Colors.sunshade}
                        onPress={() => {}}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <InfoCard
                        title={'Annual Income'}
                        value={'$53,000/yr'}
                        color={Colors.sunshade}
                        onPress={() => {}}
                    />
                </Col>
                <Col>
                    <InfoCard
                        title={'Derogatory Marks'}
                        value={'3'}
                        color={Colors.sunshade}
                        onPress={() => {}}
                    />
                </Col>
            </Row>
        </Grid>
    );
}
