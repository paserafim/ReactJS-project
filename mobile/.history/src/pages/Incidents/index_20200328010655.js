import React from 'react';
import { View } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}
                     
            </View>
        </View>
    );
}