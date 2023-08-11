import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/AntDesign'

const BottomNav = ({navigation}) => {

    // console.log(props)

    return (
        <>
            <View style={{ width: '99%', height: '7%', backgroundColor: '#00203FFF', alignSelf: 'center', position: 'absolute', bottom: 0, borderRadius: 10, display: 'flex', flexDirection: 'row' }}>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("photos") }}>
                    <Icon name='home' size={23} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("userdetails", { ind: props.ind, data: props.data}) }}>
                    <Icon name='user' size={23} color='white' />
                    </TouchableOpacity>
                </View>

                <View style={styles.abc}>
                    <TouchableOpacity onPress={() => { navigation.navigate("avail", { ind: ind, data: data, tdata: totaldata }) }}>
                    <Icon name='logout' size={23} color='white' />
                    </TouchableOpacity>
                </View>


            </View>
        </>
    );
}

export default BottomNav;