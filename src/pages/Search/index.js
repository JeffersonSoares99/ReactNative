import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';



import api, { key } from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions/index';


export default function Search() {


    const navigation = useNavigation();

    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    async function handleSearch() {
        //weather?key=d8519103&city_name=Campinas,SP
        const response = await api.get(`/weather?key=${key}&city_name=${input}`);

        if (response.data.by === 'default') {
            setError('Hmm, cidade não encontrada! Tente novamente!');
            setInput('');
            setCity(null);
            Keyboard.dismiss();
            return;
        }

        setCity(response.data);
        setInput('');
        Keyboard.dismiss();

    }

    if (city) {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                    <Feather
                        name="chevron-left"
                        size={32}
                        color='#1ec9ff'
                    />
                    <Text style={{ fontSize: 22, color: '#1ec9ff' }}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.searchBox}>
                    <TextInput
                        value={input}
                        onChangeText={(valor) => setInput(valor)}
                        placeholder="Digite o nome da cidade"
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                        <Feather
                            name="search"
                            size={25}
                            color="#fff"
                        />

                    </TouchableOpacity>
                </View>

                <LinearGradient style={styles.header} colors={['#1ed6ff', '#97c1ff']}>
                    <Text style={styles.date}>{city.results.date}</Text>
                    <Text style={styles.city}>{city.results.city_name}</Text>

                    <View>
                        <Text style={styles.temp}>
                            {city.results.temp}°
                        </Text>
                    </View>

                    <Ionicons
                        name={icon.name}
                        color='#fff'
                        size={150}
                    />

                    <Conditions
                        weather={city}
                    />

                </LinearGradient>


            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                <Feather
                    name="chevron-left"
                    size={32}
                    color='#1ec9ff'
                />
                <Text style={{ fontSize: 22, color: '#1ec9ff' }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Digite o nome da cidade"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather
                        name="search"
                        size={25}
                        color="#fff"
                    />

                </TouchableOpacity>
            </View>

            {error && <Text style={{ marginTop: 25, textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: '#1ec9ff' }}>{error}</Text>}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#e8f0ff'

    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginRight: 300,
        marginBottom: 10,
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        width: '90%',
        height: 50,
        borderRadius: 8,
    },

    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingLeft: 10,

    },
    icon: {
        width: '15%',
        backgroundColor: '#1ec9ff',
        backgroundColor: '#1ec9ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    header: {
        marginTop: '5%',
        width: '90%',
        paddingBottom: '3%',
        paddingTop: '3%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,

    },
    date: {
        color: '#fff',
        fontSize: 17,
    },
    city: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    temp: {
        color: '#fff',
        fontSize: 80,
        fontWeight: 'bold'
    }

})