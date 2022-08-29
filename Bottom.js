import React, { useRef } from "react";
import { View, Button,TouchableOpacity,Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import ProfileCard from "../modules/BottomBar/Profilecard";
import Style from "./Style";
import Icons from "../utils/Icons";
import MenuItems from "../modules/BottomBar/MenuItems";


  const Bottom=() => {
  const refRBSheet = useRef();
  return (
    <View
      style={Style.BottomView}
    >
      <TouchableOpacity onPress={() => refRBSheet.current.open()} >
      <Image  style={{width:22,height:22,elevation:5} } source={Icons.Group} />
      
      </TouchableOpacity>
      <RBSheet  
        ref={refRBSheet}
        height={630}
        closeOnDragDown={true}

        closeOnPressMask={true}
        customStyles={{
          container:{
            borderRadius:17,
            marginLeft:2,
            backgroundColor:"#fff"
          },
          wrapper: {
            backgroundColor: "#00000099",
         },
          draggableIcon: {
            backgroundColor: "#00000020",
            width:"22%"
          }
        }}
      >
        
      <ProfileCard/> 
       <MenuItems/>
      
    
       
       
       
      </RBSheet>
      
      
    </View>
  );
}
export default Bottom