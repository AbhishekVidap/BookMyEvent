import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Styles';

export default function Register( {navigation}) {
    return (
        <View style={styles.preCon}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.text}>Welcome</Text>
                <Text style={styles.text}>TO</Text>
                <Text style={{fontSize:35, marginBottom:50,color:'#ADEFD1FF'}}>BoookMyEvent</Text>
            </View>

            <Text style={{color:'blue',fontSize:30, marginBottom:30,color:'#ADEFD1FF'}}>Register as</Text>

            <View style={styles.dflex}>
                <TouchableOpacity style={styles.preBtn} onPress={()=>{navigation.navigate('register')}}><Text style={styles.textOp}>User</Text></TouchableOpacity>
                <TouchableOpacity style={styles.preBtn} onPress={()=>{navigation.navigate('owner')}}><Text style={styles.textOp}>Owner</Text></TouchableOpacity>
            </View>

        </View>
    );
}

