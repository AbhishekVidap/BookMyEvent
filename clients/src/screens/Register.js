import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './Styles';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function Register({ navigation }) {

    const [user, setUser] = useState('');
    const [pass, setpass] = useState('');
    const [mail, setmail] = useState('');
    const [phone, setphone] = useState('');
    const [cpass, setcpass] = useState('');
    const [error, seterror] = useState('');

    // const [adata, setadata] = useState([]);

    const str = "@gmail.com";
    const handleSubmit = () => {
        if (user.length == 0) {
            seterror('Enter Full Name and Pass!');
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
            // navigation.navigate("login");
            settingData();
            handleClear();
            showToast();
        }
    }

    const handleClear = ()=>{
        setUser("");
        setpass('');
        setmail('');
        setphone('');
    }

    const showToast = (a) => {
        if (a == 1) {
            Toast.show({
                type: 'error',
                text1: error,
                text2: error
            });
        }
        else {
            Toast.show({
                type: 'success',
                text1: 'Registered Successfully',
                text2: 'You can log in!'
            });
        }

    }

    const settingData = async () => {


        // const newObject = { name: nam, age: 30 };

        const newObject = {
            "nam": user,
            "pass": pass,
            "mail": mail,
            "phone": phone,
            "bookigs":[]
        };

        const newObject1 = {
            "nam": 'user',
            "pass": 'pass',
            "mail": 'mail@gmail.com',
            "phone": 3698521470,
        };
        // Retrieve the existing array from async storage
        let existingArrayString = "";
        
        // Parse the retrieved string into a JavaScript array

        await AsyncStorage.getItem('data1')
            .then((value) => {
                existingArrayString = value;
            })
            .catch((e) => {
                alert('Error retrieving data:', e);
                AsyncStorage.setItem('data1',JSON.stringify(newObject1)).then((value1)=>{
                    existingArrayString = value1;
                }).catch((e1)=>{
                    alert(e1)
                })
            });

    
        const existingArray = JSON.parse(existingArrayString);

        // Append the new object to the array
        existingArray.push(newObject);

        const updatedArrayString = JSON.stringify(existingArray);


        await AsyncStorage.setItem('data1',updatedArrayString)
            .then((value) => {
               
            })
            .catch((e) => {});

        
        // AsyncStorage.setItem('data1',JSON.stringify([]))
        //     .then((value) => {
        //         alert('Done')
        //     })
        //     .catch((e) => {
        //         alert('Error retrieving 1 data:', e);
        //     });
            


    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Register As User</Text>
            <View style={styles.incntr}>
                <Text style={styles.ttl}>BookMyEvent</Text>
                <TextInput style={styles.inpt} placeholder="Full name" onChangeText={setUser} placeholderTextColor="#ADEFD1FF" />
                <TextInput style={styles.inpt} placeholder="Email" onChangeText={setmail} keyboardType='email-address' placeholderTextColor="#ADEFD1FF" />
                <TextInput style={styles.inpt} placeholder="Phone" onChangeText={setphone} keyboardType='decimal-pad' placeholderTextColor="#ADEFD1FF" />
                <TextInput style={styles.inpt} placeholder="Password" onChangeText={setpass} secureTextEntry={true} placeholderTextColor="#ADEFD1FF" />
                <TextInput style={styles.inpt} placeholder="Confirm Password" onChangeText={setcpass} secureTextEntry={true} placeholderTextColor="#ADEFD1FF" />
                <View style={styles.inptbtn}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <Text> Register</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#ADEFD1FF' }}>Already have an account <TouchableOpacity onPress={() => { navigation.navigate("login") }} >
                    <Text style={{ top: 4, color: 'pink' }}>Log in </Text>
                </TouchableOpacity></Text>
            </View>
            <Toast
                position='top'
                bottomOffset={50}
            />
        </View>
    );
}

