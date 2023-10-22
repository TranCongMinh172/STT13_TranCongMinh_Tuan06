import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput,ScrollView } from "react-native";
import Item1 from "../components/Item1";

export default function Src2() {
    const imgs=['giacchuyen 1a','dauchuyendoipsps2 1','carbusbtops2 1','giacchuyen 1a','dauchuyendoipsps2 1','carbusbtops2 1']
    const imgs1=['daynguon 1','dauchuyendoi 1','daucam 1','daynguon 1','dauchuyendoi 1','daucam 1']

    return (
      <View style={styles.container}>
        <View style =  {styles.top}>
            <View style={styles.top1}>
                <TouchableOpacity>
                    <Image source={require('../assets/back.png')} style={{width:24,height:24, marginLeft:15}} ></Image>
                </TouchableOpacity>
                <View style={{width:200,height:30,backgroundColor:"white",justifyContent:"flex-start",flexDirection:"row", alignItems:"center",marginRight:15}}>
                     <Image source={require('../assets/timkiem.png')} style={{width:24,height:24, marginLeft:15}} ></Image>
                     <View>
                        <TextInput style={styles.txtip} placeholder="Dây cáp USB" ></TextInput>
                     </View>
                </View>
                <TouchableOpacity>
                <Image source={require('../assets/cart.png')} style={{width:24,height:24,marginRight:15}} ></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source={require('../assets/3cham.png')} style={{width:18,height:4.36,marginRight:15}} ></Image>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.content}>
            <ScrollView >
                {
                    imgs.map((e,i)=>{
                        return <Item1 img={imgs[i]} img1 ={imgs1[i]}/>
                    })                     
                }
                {/* <Item1 imgs imgs1  /> */}
            </ScrollView>
        </View>
        <View style =  {styles.bottom}>
            <View style={styles.bottom1}>
                <TouchableOpacity>
                    <Image source={require('../assets/Group 10.png')} style={{width:23,height:13.85, marginLeft:15}} ></Image>
                </TouchableOpacity>
                <Image source={require('../assets/Vector (Stroke).png')}style={{width:24,height:24}} ></Image>
                <TouchableOpacity>
                <Image source={require('../assets/aaaa.png')} style={{width:26.29,height:24.93,marginRight:15}}></Image>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    top:{
        borderWidth:1,
        // borderColor:"black",
        width:"100%",
        height:78,
        borderBottomColor:"grey"
       
    },
    top1:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // borderWidth:1,
        // borderColor:"black",
    
        height:50,
        backgroundColor:"#1BA9FF"
    },

    content:{
        // borderWidth:1,
        // borderColor:"black",
        width:"100%",
        height:510,
        marginTop:3
    },
    bottom:{
        borderWidth:1,
        // borderColor:"black",
        width:"100%",
        borderBottomColor:"grey",
        marginTop:20
       
    },
    bottom1:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // borderWidth:1,
        // borderColor:"black",
        height:50,
        backgroundColor:"#1BA9FF"
    },
    txtip:{
        width:162,height:30,backgroundColor:"white", borderColor:"white", marginLeft:10
    }

  });