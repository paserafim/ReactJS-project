import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={()=>{}}>
                    
                </TouchableOpacity>
            </View>
        </View>
    );
}