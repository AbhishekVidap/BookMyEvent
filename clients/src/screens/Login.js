import { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [pass, setpass] = useState('');
    const [error1, seterror] = useState('Error!');
    const handleSubmit = () => {
        if (user.length == 0) {
            seterror('Enter UserName and Pass!');
            showToast(1)
        }
        else {
            checkUser();
        }
    }

    const create = async (user,index,i) => {
        await AsyncStorage.setItem('logged', JSON.stringify([user,index,i]))
            .then((value) => {
                // alert('created!')
            })
            .catch((e) => { });
    }

    const checkUser = async () => {
        let flag = 0;
        let flag1 = 0
        let users = "";
        let owmers = "";

        await AsyncStorage.getItem('data1')
            .then((value) => {
               // alert(value)
                users = JSON.parse(value); 
                users.map((item, index) => {
                    if (users[index].mail == user && users[index].pass == pass) {
                        flag = 1
                        flag1 = 1
                        showToast(2);

                        if (flag1==1){
                            navigation.navigate("home", {index:index, data:item});
                        }
                        //navigation.navigate("home");
                        create(item,index,1);
                    }
                });

            })
            .catch((error) => {
                alert('Error retrieving data @:' + error);
            });




        await AsyncStorage.getItem('hdata')
            .then((value1) => {
                //alert(value)
                owmers = JSON.parse(value1);
                owmers.map((item, index) => {
                    if (owmers[index].mail == user && owmers[index].pass == pass) {
                        flag = 1
                        navigation.navigate("ownerh", {index:index, data:item,tdata:owmers})
                        showToast(2);
                        //navigation.navigate("home");
                        create(item,index,2);
                    }
                });

            })
            .catch((error) => {
                alert('Error retrieving data:' + error);
            });


        if (flag == 0) {
            seterror("Invalid User name and Pass");
            showToast(1);
        }


    }

    const showToast = (a) => {
        if (a == 1) {
            Toast.show({
                type: 'error',
                text1: error1
            });
        }
        else {
            Toast.show({
                type: 'success',
                text1: 'Logged In Successfully'
            });
        }

    }
   
    return (

        <View style={styles.container} >

            <Text style={styles.title}>Log In</Text>
            <View style={styles.incntr}>
                <Text style={styles.ttl1}>BookMyEvent</Text>
                <TextInput style={styles.inpt}
                    placeholder="Email"
                    placeholderTextColor="#ADEFD1FF"
                    onChangeText={setUser}
                />

                <TextInput style={styles.inpt}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ADEFD1FF"
                    onChangeText={setpass}
                />


                <TouchableOpacity style={styles.inptbtn} onPress={handleSubmit}>
                    <Text >Log In</Text>
                </TouchableOpacity>

                <Text style={{ color: '#ADEFD1FF' }}>don't have an account
                    <TouchableOpacity onPress={() => { navigation.navigate("prereg") }} >
                        <Text style={{ top: 4, color: 'pink' }}> Register </Text>
                    </TouchableOpacity>with us!</Text>
            </View>

            <Toast
                position='top'
                bottomOffset={20}
            />
        </View>
    );
}

export default Login;