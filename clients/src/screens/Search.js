import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useEffect, useState } from 'react';


const Search = ({ navigation, route }) => {


    const { arr } = route.params;

    const [pass, setpass] = useState('');

    return (
        <>
            <View style={styles.hm}>
                

                <TextInput
                    style={{position:'relative',top:20,fontSize:18, borderBottomWidth:2,borderColor:'#00203FFF',width:'70%',paddingHorizontal:20,marginBottom:10}}
                    placeholder="Enter Name of Hall"
                    placeholderTextColor="#00203FFF"
                    onChangeText={setpass}
                />

                <View style={{ marginBottom: 10 }}>
                    <Text style={{
                        borderBottomColor: '#00203FFF',
                        borderBottomWidth: 2,
                        width: '100%', top: -5,
                        marginBottom: 10
                    }}>

                    </Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{}}>


                        {
                            arr.map((item, ind, key) => {


                                if ((item.Enam).includes(pass)) {

                                    return (
                                        <TouchableOpacity onPress={() => { navigation.navigate("details", { ind: ind, nm: arr[ind].Enam, add: arr[ind].add, oname: arr[ind].oname, phone: arr[ind].phone, bdates: arr[ind].bdates, data: arr[ind], totaldata: arr }) }}>
                                            <View style={{ marginBottom: 10, paddingBottom: 10 }}>
                                                <TouchableOpacity style={styles.cardLike}>
                                                    <Icon name='heart' size={20} color='white' />
                                                </TouchableOpacity>

                                                <View style={styles.cardImg}>
                                                    <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0012.jpg')} />
                                                </View>

                                                <View style={styles.dflex}>
                                                    <Text style={styles.cardTille}>{arr[ind].Enam}      {arr[ind].pass}<Icon name='star' size={18} style={{ color: '#e6d577' }} /></Text>
                                                    <Text style={styles.cardRating}></Text>
                                                </View>

                                                <Text style={styles.cardDtls}>{arr[ind].add}</Text>

                                            </View>
                                        </TouchableOpacity>
                                    );

                                }



                            })

                        }








                    </ScrollView>


                </View>
            </View>
        </>
    );
}

export default Search;