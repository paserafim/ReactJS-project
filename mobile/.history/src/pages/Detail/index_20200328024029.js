import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
//Deep link - link para aceder a apps dos telemoveis

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = 'Olá ${incident.}, estou entrar em contacto pois gostaria de ajudar no caso "Cadelinha Atropelada", com o valor de 120€';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        });
    }
    // Só funciona no telemovel ou emulador
    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=917911155&text=${message}`);
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
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>[{incident.description}]</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-pt', {
                    style: 'currency',
                    currency: 'PTR'
                }).format(incident.value)}</Text>
            </View>

            <View style={styles.contactbox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.!</Text>

                <Text style={styles.heroDescription}>Entre em contacto:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => { sendWhatsApp }}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => { sendMail }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    );
}