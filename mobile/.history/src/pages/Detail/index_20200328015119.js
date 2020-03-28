import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={() => { }}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>120.50</Text>
            </View>

            <View style{}=></View>
        </View>
    );
}