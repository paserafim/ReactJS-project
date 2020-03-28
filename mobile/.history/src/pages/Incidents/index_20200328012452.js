import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons/Feather';

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
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o seu animal</Text>

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>120.50</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        opPress={() => { }}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        >Feather
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}