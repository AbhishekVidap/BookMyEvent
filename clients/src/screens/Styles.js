
import { StyleSheet , Dimensions} from 'react-native';

const wd = Dimensions.get('window').width;
const ht = Dimensions.get('window').height;
const styles = StyleSheet.create({

    container:{
        backgroundColor:'#ADEFD1FF',
        color:'##ADEFD1FF'
    },
    container1:{
        height:'100%',
        width:'100%',
        backgroundColor:'#ADEFD1FF',
        color:'##ADEFD1FF',
        fontSize:25,
        fontWeight:'bold',
        paddingVertical:20,
        paddingHorizontal:20,
        color:'#00203FFF',
        alignSelf:'center'
    },
    title:{
       top:80,
       fontSize:30,
       fontWeight:'bold',
       color:'#00203FFF',
       alignItems:'center',
       paddingLeft:50,
       top:100
    },
    incntr:{
        width:'100%',
        height:'85%',
        backgroundColor:'#00203FFF',
        top:'25%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingTop:30,
        paddingHorizontal:5,
        paddingBottom:30,
        alignItems:'center',
    },
    incntr1:{
        width:'100%',
        // height:'85%',
        backgroundColor:'#00203FFF',
        top:'20%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // paddingTop:30,
        // paddingHorizontal:5,
        // paddingBottom:30,
        alignItems:'center',
        paddingBottom:'75%'
    },
    ttl:{
        fontSize:30,
        fontWeight:'bold',
        paddingVertical:20,
        color:'#ADEFD1FF'
    },
    ttl1:{
        fontSize:30,
        fontWeight:'bold',
        paddingVertical:50,
        color:'#ADEFD1FF'
    },
    inpt:{
        width:'70%',
        height:40,
        borderBottomWidth:2,
        borderBottomColor:'#ADEFD1FF',
        marginVertical:10,color:'#ADEFD1FF'
    },
    iinpt:{
        width:'70%',
        height:40,
        borderBottomWidth:2,
        borderBottomColor:'#00203FFF',
        marginVertical:10,color:'#00203FFF',
        position:'relative',
        top:30
        
    },
    inptbtn:{
        marginVertical:10,
        width:'70%',
        height:40,
        alignItems:'center',
        backgroundColor:'#ADEFD1FF',
        justifyContent:'center',
        borderRadius:10
    },
    hm:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        paddingTop:20,
        height:'100%'
    },
    xd:{
        width:wd-30,
        marginBottom:20,
        height:50,
        color:'black',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        borderRadius:20,
        display:'flex',
        flexDirection:'row',
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
    },
    searchIn:{
        position:'absolute',
        right:20,
    },
    dflex:{
        display:'flex',
        flexDirection:'row'
    },
    cat:{
        marginHorizontal:8,
        width:'19%',
        alignItems:'center',
        padding:0,margin:0,
        justifyContent:'center',
        alignContent:'center'
    },
    pc:{
        width:40,
        height:30
    },
    searchtxt:{
        fontSize:18,
    },
    cardLike:{
        position:'absolute',
        borderColor:'white',
        zIndex:2,
        color:'white',
        right:15,
        top:15,zIndex:5
    },
    cardImg:{
        width:wd-50,
        height:ht/2-70,
        alignContent:'center',
        borderColor:'#fafafh',
        alignItems:'center'
    },
    cardTille:{
        marginTop:10,
        marginLeft:5,
        fontWeight:'bold',
        fontSize:18
    },
    cardRating:{
        marginTop:10,
        left:120,
        fontWeight:'bold',
        fontSize:18
        
    },
    cardDtls:{
        fontSize:15,
        marginLeft:5,
        
    },


    preCon:{
        backgroundColor:'#00203FFF',
        height:ht+50,
        width:wd,
        justifyContent:'center',
        alignItems:'center',
        color:'#ADEFD1FF'
    },
    preBtn:{
        width:100,
        backgroundColor:'#ADEFD1FF',
        marginHorizontal:20,
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',color:'#ADEFD1FF',fontSize:20
    },
    text:{
        fontSize:30,
        color:'#ADEFD1FF'
    },
    textOp:{
        fontSize:20,
        color:'#00203FFF'
    },

    // Details page
    
    brdr:{
        borderBottomColor: '#00203FFF',
        borderBottomWidth: 1,
        width: '92%',
        left:'4%',
        marginBottom:10
    },
    back:{
        backgroundColor:'#fFF',
        width:'100%',
        height:ht+50,

    },
    dpic:{
        position: 'relative',
        width:'100%',
        height:ht/3
    },
    dphotos:{
        position: 'relative',
        width:'100%',
        height:ht/3,
        padding:5,
        
    },
    dtitle:{
        fontSize:25,
        fontWeight:'bold',
        paddingVertical:20,
        paddingHorizontal:20,
        color:'#00203FFF'
    },
    ddddtitle:{
        fontSize:25,
        fontWeight:'bold',
        paddingVertical:10,
        paddingHorizontal:20,
        color:'#00203FFF',
        position:'relative',
        top:50,
        alignSelf:'center'
    },
    ddtitle:{
        fontSize:30,
        fontWeight:'bold',
        paddingVertical:20,
        paddingHorizontal:20,
        color:'#00203FFF',
        alignSelf:'center',
        position:'relative',
        top:'40%'
    },
    dbtm:{
        position:'absolute',
        width:wd,
        height:'9%',
        bottom:0,
        backgroundColor:'#00203FFF',zIndex:3,
        alignItems:'center',
        justifyContent:'center'
    },
    dttl:{
        fontSize:20,
        fontWeight:'bold',color:'#00203FFF',
        marginBottom:5
    },
    flex:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'auto'
    },
    dsbtn:{
        width:'40%',
        height:40,
        top:6,
        backgroundColor:'#00203FFF',
        marginHorizontal:10,
        borderRadius:8,
        marginBottom:2,
        color:'#ADEFD1FF',justifyContent:'center'
    },
    adsbtn:{
        width:'40%',
        height:40,
        top:6,
        backgroundColor:'#00203FFF',
        marginHorizontal:10,
        paddingHorizontal:10,
        marginBottom:2,
        color:'#ADEFD1FF',justifyContent:'center'
    },
    abc:{
        alignSelf:'center',
        width:'30%',
        marginLeft:30
    },

    centr:{
        textAlign:'center',
        color:'#ADEFD1FF',
        justifyContent:'center'
    }
    

  });

export default styles;