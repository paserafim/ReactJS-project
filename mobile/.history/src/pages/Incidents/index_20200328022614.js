import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }
    async function loadIncidents() {
        const response = await api.get('incidents');

        setIncidents(response.data);
    }

    useEffect(() => {
        loadIncidents();
    }, []);


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

            <FlatList
                keyExtractor={incident => String(incident.id)}
                style={styles.incidentList}
                data={[1, 2, 3, 4, 5, 6]}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{incident.value}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            opPress={() => { navigateToDetail }}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}