import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/AntDesign'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation, route }) => {


    const { index, data } = route.params;

    // console.log(ind,data)
    
        
    

    const [arr, setarr] = useState([]);

    let a = "";

    const getting = async () => {

        let existingArrayString = "";



        await AsyncStorage.getItem('hdata')
            .then((value) => {
                existingArrayString = value;
                //alert('aaya')
            })
            .catch((error) => {
                alert('Error retrieving data:' + error);
            });



        a = JSON.parse(existingArrayString);

        setarr(a)

        // alert(JSON.stringify(a))

    }

   

    getting();

   

    return (
        <>
            <View style={styles.hm}>
                <Text></Text>
                <TouchableOpacity onPress={() => { navigation.navigate("search", { arr: arr }) }}>
                    <Text style={{ position: 'relative', top: 10, borderWidth: 2, borderColor: '#00203FFF', borderRadius: 10, paddingHorizontal: 110, paddingVertical: 5, fontSize: 20, color: '#00203FFF' }}>Search  <Icon name='search1' style={{ position: 'relative', top: 7 }} size={20} color='#00203FFF' /></Text>
                </TouchableOpacity>

                <View style={{ marginBottom: 100 }}>
                    <Text style={{
                        borderBottomColor: '#fff',
                        borderBottomWidth: 2,
                        width: '100%', top: -5,
                        marginBottom: 10
                    }}>

                    </Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>


                        {
                            arr.map((item, ind, key) => {
                                return (
                                    <TouchableOpacity onPress={() => { navigation.navigate("details", { ind: ind, nm: arr[ind].Enam, add: arr[ind].add, oname: arr[ind].oname, phone: arr[ind].phone, bdates: arr[ind].bdates, data: arr[ind], totaldata: arr }) }}>
                                        <View style={{ marginBottom: 10, paddingBottom: 10 }}>
                                            <TouchableOpacity style={styles.cardLike}>
                                                <Icon name='heart' size={20} color='white' />
                                            </TouchableOpacity>
                                            
                                            <View style={styles.cardImg}>
                                                {/* {arrr[(Math.floor(Math.random() * arrr.length))]} */}
                                                <Image style={{ width: '100%', height: '100%', borderRadius: 10 }} source={require('../components/photos/IMG-20230423-WA0012.jpg')} />
    
                                                {/* {imgrarr[ind]} */}
                                            </View>

                                            <View style={styles.dflex}>
                                                <Text style={styles.cardTille}>{arr[ind].Enam}      {arr[ind].pass}<Icon name='star' size={18} style={{ color: '#e6d577' }} /></Text>
                                                <Text style={styles.cardRating}></Text>
                                            </View>

                                            <Text style={styles.cardDtls}>{arr[ind].add}</Text>

                                        </View>
                                    </TouchableOpacity>
                                );

                            })

                        }








                    </ScrollView>


                </View>
            </View>
            {/* <BottomNav ind={index} data={data}/> */}

            <View style={{ width: '99%', height: '7%', backgroundColor: '#00203FFF', alignSelf: 'center', position: 'absolute', bottom: 0, borderRadius: 10, display: 'flex', flexDirection: 'row' }}>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("home", { ind: index, data: data }) }}>
                        <Icon name='home' size={23} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("userdetails", { ind: index, data: data }) }}>
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

export default Home;