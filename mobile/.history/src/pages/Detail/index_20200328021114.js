import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá ';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: cadelinha do caso',
            recipients: ['paserafim@gmail.com'],
            body:
        });
    }

    function sendWhatsApp() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={() => { navigateBack }}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}> ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>120.50</Text>
            </View>

            <View style={styles.contactbox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.!</Text>

                <Text style={styles.heroDescription}>Entre em contacto:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    );
}