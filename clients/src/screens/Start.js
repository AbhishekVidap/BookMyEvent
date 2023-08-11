import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './Styles';
const Start = ({ navigation }) => {

    setTimeout(() => {
        navigation.navigate('login');
    }, 5000)

    return (
        <>
            <View style={styles.container1}>
                <Text style={styles.ddtitle}>BookMyEvent</Text>
                <Text style={{position:'relative',top:'40%',alignSelf:'center',fontSize:15}}>An Easy way to Book an Event Hall</Text>
            </View>
        </>
    );
}

export default Start;