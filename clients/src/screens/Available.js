import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles';
import { Calendar } from 'react-native-calendars';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Availabe({ navigation, route }) {

    const { ind, data, tdata } = route.params;

    const [selected, setSelected] = useState([data.bdates]);

    let mdates = {}

    let mstring =JSON.stringify(selected[0])

    let abc = mstring.split(',')

    let a = abc.length

    let b = abc[0];
    let c = abc[a-1];

    abc[0] = b.slice(1,14)
    abc[a] = c.slice(0, 13)

    // console.log(typeof(abc[0]))
    // text.slice(0, 5);


    console.log("splitting : "+abc)

    abc.map((item, index) => {
       mdates[item.slice(1,11)]={ selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
      // console.log(item+index)
    });

    // console.log(mdates)

    return (
        <>
           
            <Text></Text>
            <Text style={{ fontSize: 25, marginTop: 100, fontWeight: 'bold', textAlign: 'center' }}>Availabability</Text>
            <Calendar style={{ borderRadius: 10, elevation: 4, margin: 10, marginTop: 20 }}
                initialDate='2023-04-04'
                minDate={'2023-01-01'}
                maxDate={'2024-01-01'}
                hideExtraDays={true}

                onDayPress={(day) => {
                    const a = day.dateString;

                    // alert("  j  "+selected)
                    // let ab = selected
                    // ab.push(a)
                    // setSelected(ab);

                    navigation.navigate("booking", { ind: ind, data: data, day:a, tdata: tdata })

                    // select(a);
                    //alert("  j  "+JSON.stringify(selected))

                }}
                // markedDates={{
                //     [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                // }}

                markedDates={mdates}



            />
            <Text style={{ color: 'black', marginLeft: 30, fontWeight: 'bold', fontSize: 15,top:20 }}> 'Blue Circles' indicates<Text style={{ color: 'red' }}> Booked</Text> dates</Text>
            <Text style={{ color: 'black', marginLeft: 30, fontWeight: 'bold', fontSize: 15,top:20 }}> Other than that are<Text style={{ color: 'green' }}> Availabe</Text> for booking</Text>


        </>
    );
}

