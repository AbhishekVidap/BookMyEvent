import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './Styles';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {

    const [user, setUser] = useState('');
    const [pass, setpass] = useState('');
    const [mail, setmail] = useState('');
    const [oname, setOname] = useState('');
    const [phone, setphone] = useState('');
    const [cpass, setcpass] = useState('');
    const [error, seterror] = useState('');
    const [add, setadd] = useState('');
    const str = "@gmail.com";
    const handleSubmit = () => {
        if (user.length == 0) {
            seterror('Enter Event Hall Name!');
            showToast(1);
        }
        else if (oname.length == 0) {
            seterror('Enter Owner Name!');
            showToast(1);
        }
        else if (!mail.includes(str)) {
            seterror('Enter Valid email address!');
            showToast(1);
        }
        else if (phone < 999999999 || phone > 9999999999) {
            seterror('Mobile Number Must be of 10 digits!');
            showToast(1);
        }
        else if (pass != cpass) {
            seterror("Password didn't matched");
            showToast(1);
        }
        else if (pass.length == 0 || cpass.length == 0) {
            seterror("Enter Password and Confirm Password");
            showToast(1);
        }
        else {
            settingData();
            showToast(2);
        }
    }

    const showToast = (a) => {
        if (a == 1) {
            Toast.show({
                type: 'error',
                text1: error,
            });
        }
        else {
            Toast.show({
                type: 'success',
                text1: 'Event Hall Registered Successfully',
                text2: 'You can log in',
            });
        }

    }

    const settingData = async () => {

        // const newObject = { name: nam, age: 30 };

        const newObject = {
            "Enam": user,
            "oname": oname,
            "pass": pass,
            "mail": mail,
            "phone": phone,
            "bdates": ['2023-04-03'],
            "add":add
        };

        const newObject1 = {
            "Enam": 'user',
            "oname": 'oname',
            "pass": 111,
            "mail": 'mail@gmail.com',
            "phone": 3698521470,
            "bdates": ['2023-04-03'],
            "add":'Solapur'
        };
        // Retrieve the existing array from async storage
        let existingArrayString = "";

        // Parse the retrieved string into a JavaScript array

        await AsyncStorage.getItem('hdata')
            .then((value) => {
                existingArrayString = value;
            })
            .catch((e) => {
                alert('Error retrieving data:', e);
            });


        let existingArray = JSON.parse(existingArrayString);
        // let existingArray = []

        // Append the new object to the array
        existingArray.push(newObject);

        const updatedArrayString = JSON.stringify(existingArray);


        await AsyncStorage.setItem('hdata',updatedArrayString)
            .then((value) => {
            })
            .catch((e) => { });


        setUser('');
        setpass('');
        setmail('');
        setOname('');
        setphone('');

        // await AsyncStorage.setItem('hdata', JSON.stringify([]))
        //     .then((value) => {
        //         alert('Done');
        //     })
        //     .catch((e) => { });

    }



    return (
        <>
            <View style={styles.container}><View>

            </View>
                <Text style={styles.title}>Register as Owner</Text>
                <ScrollView>
                    <View style={styles.incntr1}>

                        <Text style={styles.ttl}>BookMyEvent</Text>
                        <TextInput style={styles.inpt} placeholder="Event Hall Name" onChangeText={setUser} placeholderTextColor="#ADEFD1FF" />
                        <TextInput style={styles.inpt} placeholder="Owner Name" onChangeText={setOname} keyboardType='email-address' placeholderTextColor="#ADEFD1FF" />
                        <TextInput style={styles.inpt} placeholder="Email" onChangeText={setmail} keyboardType='email-address' placeholderTextColor="#ADEFD1FF" />
                        <TextInput style={styles.inpt} placeholder="Phone" onChangeText={setphone} keyboardType='decimal-pad' placeholderTextColor="#ADEFD1FF" />
                        <TextInput style={styles.inpt} placeholder="Password" onChangeText={setpass} secureTextEntry={true} placeholderTextColor="#ADEFD1FF" />
                        <TextInput style={styles.inpt} placeholder="Confirm Password" onChangeText={setcpass} secureTextEntry={true} placeholderTextColor="#ADEFD1FF" />
                        <TextInput style={styles.inpt} placeholder="Address" onChangeText={setadd}  placeholderTextColor="#ADEFD1FF" />
                        <View style={styles.inptbtn}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text> Register</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={{ color: '#ADEFD1FF' }}>Already have an account <TouchableOpacity onPress={() => { navigation.navigate("login") }} >
                            <Text style={{ top: 4, color: 'pink' }}>Log in </Text>
                        </TouchableOpacity></Text>

                    </View>
                </ScrollView>
            </View>
            <Toast
                position='top'
                bottomOffset={50}
            />
        </>
    );
}

