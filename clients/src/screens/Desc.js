import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles';
import { useState } from 'react';

export default function Details({ navigation, route }) {
    const { ind, nm, add, img, oname, phone, bdates, data, totaldata } = route.params;
    const imgg = "../components/photos/IMG-20230423-WA00" + img + ".jpg";
    //alert(JSON.stringify(data))

    return (
        <View style={styles.back}>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 40, zIndex: 3 }} onPress={() => { navigation.navigate("home") }}>
                {/* <Icon name='arrowleft' size={23} color='white' /> */}
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', right: 20, top: 40, zIndex: 3 }} >
                <Icon name='heart' size={23} color='white' />
            </TouchableOpacity>

            <ScrollView style={{ marginBottom: '20%' }}>
                <Image style={styles.dpic} source={require('../components/photos/IMG-20230423-WA0008.jpg')} />

                <Text style={styles.dtitle}>{nm}</Text>

                <View style={{ paddingHorizontal: 20 }}>


                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}><Icon name='star' size={17} style={{ color: 'green' }} /> 3.5 (best rating)</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}><Icon name='eye' size={17} style={{ color: 'green' }} /> 500 reviews</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='enviroment' size={17} style={{ color: 'green' }} /> {add}</Text>
                </View>

                <Text style={styles.brdr}></Text>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.dttl}>Features</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  Two Special Rooms(Dress Change Room)</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  AC Environment</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  Customised Menu</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  Customised Decoration</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  Doulby Sound System</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  Seperate Dinning Hall</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} />  Special Kitchen</Text>
                </View>

                <Text style={styles.brdr}></Text>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.dttl}>Capability</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='pluscircle' size={15} style={{ color: 'green' }} />  1000+ Guests</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='pluscircle' size={15} style={{ color: 'green' }} />  500+ Chairs</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='pluscircle' size={15} style={{ color: 'green' }} />  30+ Sofasets for VIP's</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='pluscircle' size={15} style={{ color: 'green' }} />  10+ Jumbo Fans</Text>
                </View>

                <Text style={styles.brdr}></Text>

                <View style={styles.flex}>
                    <View style={styles.dsbtn}><TouchableOpacity onPress={() => { navigation.navigate("photos") }}><Text style={styles.centr}>Show Photos</Text></TouchableOpacity></View>
                    <View style={styles.dsbtn}><TouchableOpacity onPress={() => { navigation.navigate("avail", { ind: ind, data: data, tdata: totaldata }) }}><Text style={styles.centr}>See Availability</Text></TouchableOpacity></View>
                </View>

                <Text style={styles.brdr}></Text>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.dttl}>Manager Details</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='user' size={15} style={{ color: 'green' }} />  {oname}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='phone' size={15} style={{ color: 'green' }} />  +91 {phone}</Text>
                </View>

            </ScrollView>

            <View style={styles.dbtm}>
                <TouchableOpacity onPress={() => { navigation.navigate("avail", { ind: ind, data: data, tdata: totaldata }) }}><Text style={{ color: '#ADEFD1FF', fontSize: 20, top: -8 }}>Proceed To Booking</Text></TouchableOpacity>
            </View>

        </View>
    );
}

