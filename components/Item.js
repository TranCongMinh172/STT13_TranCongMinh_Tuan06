import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
export default function Item(props) {
    const { navigation, img, name, shop} = props
    return (
        <View style={styles.Items1}>
        <View style={{flexDirection:"row",}}>
            <Image source={require(`../assets/${img}.png`)} style={{width:80, height:80}} ></Image>
            <View style={{marginTop:7, width:"50%", marginLeft:15}}>
                <Text>{name}</Text>
                <Text>Shop {shop}</Text>
            </View>
            <TouchableOpacity style = {styles.btnChat}>
                <Text style={{color:"white"}}>Chat</Text>
            </TouchableOpacity>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    btnChat:{
        width:80,
        height:30,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        marginTop:19,
       
    },

})