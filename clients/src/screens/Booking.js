import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Availabe({ navigation, route }) {

    const { ind, data, day, tdata } = route.params;

    let users = []
    let log = []

    AsyncStorage.getItem('data1')
        .then((value) => {
            // alert(value)
            users = JSON.parse(value);

        })
        .catch((error) => {
            alert('Error retrieving data @:' + error);
        });

    AsyncStorage.getItem('logged')
        .then((value) => {
            log = JSON.parse(value);
        })
        .catch((error) => {
            alert('Error retrieving data @:' + error);
        });

    const makeSelect = async () => {

        let a = data.bdates

        a.push(day)

        data.bdates = a


        tdata[ind] = data;

        let b = users[log[1]]

        // alert(JSON.stringify(b))

        let newobj = {hnam:data.Enam,date:day}

        let abc = []

        abc = b.bookings

        abc.push(newobj)

        b.bookings = abc

        users[log[1]] = b

        const updatedArrayString1 = JSON.stringify(users);

        // alert(updatedArrayString1)

        await AsyncStorage.setItem('data1', updatedArrayString1)
            .then((value) => {
                alert('Done1')
            })
            .catch((e) => { });


        const updatedArrayString = JSON.stringify(tdata);

        await AsyncStorage.setItem('hdata', updatedArrayString)
            .then((value) => {
                alert('Done')
            })
            .catch((e) => { });

        navigation.navigate("home",{  ind: log[1], data:b })

    }

    return (
        <>
            <View style={{ width: '100%', position: 'relative', top: 50, alignItems: 'center' }}>
                <Text style={styles.dtitle}>Booking Page</Text>

                <Text style={styles.dttl}>Selected date : <Text style={{ color: 'blue' }}>{day}</Text></Text>

                <Text style={{
                    borderBottomColor: '#00203FFF',
                    borderBottomWidth: 2,
                    width: '92%',
                    marginBottom: 10
                }}></Text>
            </View>


            <ScrollView style={{ marginBottom: '25%', top: 50 }}>


                <View style={{ paddingHorizontal: 20, alignItems: 'center', color: '#00203FFF', position: 'relative' }}>

                    <Text style={styles.dttl}>Details :</Text>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Features :</Text>
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
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Capability :</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='square' size={15} style={{ color: 'green' }} />  1000+ Guests</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='square' size={15} style={{ color: 'green' }} />  500+ Chairs</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='square' size={15} style={{ color: 'green' }} />  30+ Sofasets for VIP's</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='square' size={15} style={{ color: 'green' }} />  10+ Jumbo Fans</Text>
                </View>

                <Text style={styles.brdr}></Text>



                {/* <View style={styles.flex}>
                    <View style={styles.dsbtn}><TouchableOpacity onPress={() => { navigation.navigate("photos") }}><Text style={styles.centr}>Show Photos</Text></TouchableOpacity></View>
                    <View style={styles.dsbtn}><TouchableOpacity onPress={() => { navigation.navigate("avail", { ind: ind, data: data, tdata: totaldata }) }}><Text style={styles.centr}>See Availability</Text></TouchableOpacity></View>
                </View> */}


                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Manager Details :</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='user' size={15} style={{ color: 'green' }} />  {data.oname}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='phone' size={15} style={{ color: 'green' }} />  +91 {data.phone}</Text>
                </View>

                <View style={{ paddingVertical: 20, position: 'relative', alignItems: 'center' }}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10, width: '60%', alignItems: 'center', backgroundColor: '#00203FFF', borderRadius: 10 }}>
                        <TouchableOpacity onPress={() => { makeSelect(); }} >
                            <Text style={{ color: '#ADEFD1FF' }} >Proceed For Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ScrollView>
        </>
    );
}

