import * as React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/AntDesign'

const Userdetails = ({ navigation, route }) => {

    const { ind, data } = route.params;

    let a = []
    a = data.bookings

    if(a.length==0){
        a = []
    }
    // alert(JSON.stringify(data.bookings))

    return (
        <>


            <View style={styles.back}>
                <Text style={styles.ddddtitle}>Welcome </Text>
                <Text style={styles.ddddtitle}>{data.nam}</Text>
                <View style={{ paddingHorizontal: 20, position: 'relative', top: 50 }}>
                    <Text style={styles.dttl}>Your Details</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Name : {data.nam}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Mail : {data.mail}</Text>
                    <Text style={{ fontSize: 15 }}><Icon name='check' size={17} style={{ color: 'green' }} /> Phone : {data.phone}</Text>
                </View>
                <View style={{ paddingHorizontal: 20, position: 'relative', top: 60 }}>
                    <Text style={styles.dttl}>Your Bookings</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>

                    {
                        a.map((ind, itm) => {
                            console.log(ind)
                            return (
                                <View style={{ width: '95%',alignItems:'center',paddingHorizontal:10,marginVertical:10,paddingHorizontal:20 }}>
                                    <Text style={{ color: 'green' }}> Booked :</Text>
                                    <Text> {ind.hnam} on {ind.date} </Text>
                                </View>
                            )

                        })
                    }
                </ScrollView>

                </View>
                

            </View>

            <View style={{ width: '99%', height: '7%', backgroundColor: '#00203FFF', alignSelf: 'center', position: 'absolute', bottom: 0, borderRadius: 10, display: 'flex', flexDirection: 'row' }}>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("home", { ind: ind, data: data }) }}>
                        <Icon name='home' size={23} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("userdetails", { ind: ind, data: data }) }}>
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

export default Userdetails;