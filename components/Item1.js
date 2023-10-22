import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
export default function Item1(props) {
    const { navigation, img,img1} = props
    return (
        <View style ={styles.Items}>
        <View style={{width:"45%"}} >
            <Image source={require(`../assets/${img}.png`)} style={{width:155,height:90,}} ></Image>
            <Text style={{width:"80%",marginTop:5}}> Cáp chuyển từ Cổng USB sang PS2...</Text>
            <Image source={require('../assets/sao.png')} style={{width:130,height:16,marginTop:5}} ></Image>
            <View style={{flexDirection:"row",marginTop:5   }}>
                <Text>69.900d</Text>
                <Text style={{color:"grey", marginLeft:25}} >-39%</Text>
            </View>
        </View>
        <View  style={{ width:"45%"}}>
            <Image source={require(`../assets/${img1}.png`)} style={{width:155,height:90}} ></Image>
            <Text style={{width:"80%",marginTop:5}}> Cáp chuyển từ Cổng USB sang PS2...</Text>
            <Image source={require('../assets/sao.png')} style={{width:130,height:16,marginTop:5}} ></Image>
            <View style={{flexDirection:"row",marginTop:5   }}>
                <Text>69.900d</Text>
                <Text style={{color:"grey", marginLeft:25}} >-39%</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    
    Items:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:15
    },
    Items1:{
        borderWidth:1,
        borderTopColor:"grey",
        borderBottomColor:"grey",
        justifyContent:"space-between",
    }
})