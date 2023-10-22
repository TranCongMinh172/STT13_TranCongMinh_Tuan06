import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput,ScrollView } from "react-native";
import Item from "../components/Item";

export default function Src1() {

    const imgs = ['ca_nau_lau','ga_bo_toi','xa_can_cau','do_choi_dang_mo_hinh','lanh_dao_gian_don','hieu_long_con_tre','trump 1','do_choi_dang_mo_hinh']
    const names = ['Ca nấu lẩu, nấu mì mini...','1KG KHÔ GÀ BƠ TỎI ...','Xe cần cẩu đa năng','Đồ chơi dạng mô hình','Lãnh đạo giản đơn','Hiếu lòng con trẻ','Donal Trump Thiên tài lãnh đạo']
    const shops = ['Devang','LTD Food','Thế giới đồ chơi','Thế giới đồ chơi','Minh Long Book','Minh Long Book']
    return (
      <View style={styles.container}>
        <View style =  {styles.top}>
            <View style={styles.top1}>
                <TouchableOpacity>
                    <Image source={require('../assets/back.png')} style={{width:24,height:24, marginLeft:15}} ></Image>
                </TouchableOpacity>
                <Text style ={{color:"white", fontSize:18, fontWeight:600}} >Chat</Text>
                <TouchableOpacity>
                <Image source={require('../assets/cart.png')} style={{width:24,height:24,marginRight:15}} ></Image>
                </TouchableOpacity>
            </View>
            <View style = {styles.top2}>
                <Text style={{fontSize:13, fontFamily:"arial", fontWeight:"500"}} >Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
            </View>
        </View>
        <View style={styles.content}>
            <ScrollView>
                {
                    imgs.map((e,i)=>{
                        return <Item img={imgs[i]} name={names[i]} shop={shops[i]}/>
                    })
                }
                {/* <Item img={''} name={''} shop={''}/> */}
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
        height:98,
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
    top2:{
        width:"90%",
        marginLeft:20,
        // justifyContent:"center",
        // alignItems:"center"
        marginTop:7
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
        borderBottomColor:"grey"
       
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
  });