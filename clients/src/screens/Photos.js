import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Photos({ navigation }) {
    return (
        <>
            <TouchableOpacity style={{ position: 'absolute', left: 5, top: 40, zIndex: 3 }} onPress={() => { navigation.navigate("home") }}>
                <Icon name='arrowleft' size={23} color='black' />
            </TouchableOpacity>

            <Text></Text>
            <Text></Text>
            <View style={{alignItems:'center'}}>
            <Text style={{ fontSize: 25 }}>Photos</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>

                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0004.jpg')} />
                    </View>

                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0005.jpg')} />
                    </View>

                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>

                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0006.jpg')} />
                    </View>

                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0007.jpg')} />
                    </View>

                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>

                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0008.jpg')} />
                    </View>

                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0009.jpg')} />
                    </View>

                </View>

                <View style={{ marginBottom: 20, alignItems: 'center' }}>

                    <View style={styles.cardImg}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 20 }} source={require('../components/photos/IMG-20230423-WA0004.jpg')} />
                    </View>

                </View>

            </ScrollView>
        </>
    );
}

