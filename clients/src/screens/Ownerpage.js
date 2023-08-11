import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles';
import { useState } from 'react';

export default function Ownerpage({ navigation, route }) {
    const { index, data, tdata } = route.params;
    return (
        <>
            <View style={styles.back}>
                <Text style={styles.ddddtitle}>Welcome </Text>
                <Text style={styles.ddddtitle}>{data.oname}</Text>
                <View style={{ paddingHorizontal: 20, position: 'relative', top: 50 }}>
                    <Text style={styles.dttl}>Your Details</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Name : {data.Enam}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Owner : {data.oname}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Email : {data.mail}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Phone : {data.phone}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Address : {data.add}</Text>
                </View>
                <View style={{ paddingHorizontal: 20, position: 'relative', top: 90 }}>
                    <Text style={{ fontSize: 15 }}>For booking status, click on Calendar below</Text>
                </View>

            </View>

            <View style={{ width: '99%', height: '7%', backgroundColor: '#00203FFF', alignSelf: 'center', position: 'absolute', bottom: 0, borderRadius: 10, display: 'flex', flexDirection: 'row' }}>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("avail", { ind: index, data: data, tdata: tdata }) }}>
                        <Icon name='calendar' size={23} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("ownerh", { ind: index, data: data, tdata: tdata }) }}>
                        <Icon name='user' size={23} color='white' />
                    </TouchableOpacity>
                </View>

                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("login") }}>
                        <Icon name='logout' size={23} color='white' />
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}

