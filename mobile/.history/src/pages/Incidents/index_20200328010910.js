import React from 'react';
import { View } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.descrition}>Escolha um dos casos abaixo e salve o se/Text>

        </View>
    );
}