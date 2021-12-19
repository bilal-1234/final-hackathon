import React, { Component, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword} from './Firebase';
import RadioButtonGroup from 'expo-radio-button';
import { RadioButtonItem } from 'expo-radio-button';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

function Signup (navigation){

    const [Email,setEmail] =useState('');
    const [Password,setPassword]=useState('');
    const [current, setcurrent] = useState("test");

    const sign_up= async()=>{     
      try{
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, Email, Password);
     
        console.log(Email,Password)
  
      }catch(err){
        console.log(err.message)
  
      }
  }
   

 

    return (
      <View style={styles.container}>
          <View>
          <Image  source={require('../screens/image/main2.png')} style={styles.MainImage}/>

          </View>
       
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://www.nicepng.com/png/detail/518-5185628_email-icon-symbol-of-email-black.png'}}/>
          <TextInput style={styles.inputs}

              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(Email)=>{setEmail(Email)}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATEAAAClCAMAAAADOzq7AAAAh1BMVEX+/v7t7e3////s7OwAAAD7+/v29vbw8PD39/fy8vK/v78nJyfNzc0qKira2tojIyObm5tvb29nZ2daWlqrq6uQkJBUVFQYGBhfX1+amprR0dHh4eGwsLA4ODjFxcUODg6FhYVFRUVNTU17e3t2dnZra2s9PT24uLgcHBwwMDATExOjo6OCgoLCrmX9AAANkUlEQVR4nO1dC1fjKhDmISRU7fqqj1aru+rqXv3/v+824TmEENImbVLD2T1n2a8k4YMMM8MwQQQVhQhcFl5WCZM1HASRApGs8gRQyAshKqssBJIoiAGYy1qWAmYA9HqmwDzWbQ+UPdEolf1GTD49TQKpCyIIchpgjLIQSKIgBmBOA4wpEIXBHLkPDxmLg7DbXTAGwJEyRiLgxNjE2PgYOwY51oYxIougZeGyxmSNBkGkQJQAclkT6kIKZOlgFgRzCOIQiIMgg2Amq3mw20EQI1GWjMmSZ7KuqgrMewVZEOQA1M/HJbpfED4f0jOaOO8C9ac7cd6FOGhmNHWmO/GnewikWgty3/IouIV8oDH5UAFJACSGMSA9ggIiSXq0UXTC0iMsNKMgCoHbS9Q4ODE2MTYxNjzGel3TvZU5ZU0XcmliUFvRIFBldMsUPUcAVWYHJQjlPC//qFL8e/PX1sq6Qd3f5hJ1MA/MXZA7F4I3UVctqht9I6fz2c3DYrF4ePi6mc1XfDOVnJY5fFpwFx+EXfF+6z+CD9ZeqDMNNmXwNBgevEzg5dfV0wksT/cXS1YzoaOz3QO3mO1ZiJPB2JWbR5q9/jqpKZezjGctJeqA7coOGNuM58VdHV2yvC43nE2MKZDQ1zhdZbldbwyXibFNyflLAl9FuV8S1yQ7lO9C9TvZmiM+Y2FrLmSTBQw2mvGv50TCNmVRrB9VC5e6lw2DwIiNmr8+CLuNUdh6F8Bc7xHMV3/S+dqU8yWxl4XuDqEdJf2CKLoy0xgYdTylrunrVnyV00zgnpWgBg0WyIB9W0lkEeLk8+n26vLt9fL6b1DduN68yT/UrmTkskLH78VsTjeatZCjT5eL68pvnlbsZzKG+a1P183mvS1VVSNvkeD00SftefUjGcuoJ/Pf54WUCKgygs9fg5SNmjFSw1i9oiMgYbdnStcKKX8Zx9+QsvIh+vZaB0HPz69iFvw9r6jeCNSVLMRYxc9f3OIdMPAodEvAmG1J5n+BLCtuG5xjuIYx0DOflHSQHGT3rQC/3P7f53VrutVzMgFMg9sMH2T3TY3A3nd4yZnb+4tSkY9Jj3JC85nbaMF/kl1JxH9O32elBEvYExfLT6fZWvwkxlwhtlYP2MwYFvSfbfcrHGJwlIwB22jG0hmjKHPcaN/5SBlrLccwc6yfR94qUoWsHLKXB2HsAGuleHDld9tIFWfNuD7AWolRJotycOSypvwdcVDIag5BFAKZuhCS2LPTZwRBxlRLDlsyA+aOkrEWLshjLVNAkQJ2HKkSnu5QgyUXtsub/2kdqSKs9P/DW8qH3XX+A3h7CLOaxQ1BFenRuCcunPfyLHMZAy2Hble2YOzD9Pcv8cEUxjB/M1d44z+BMWuBr7djLJvbSUaPnzFCTW9/k+0Yw9w6f27E/hlLW9OdZXvHSBVrgn/E1vSYnoOtUnYv2ilBXUSqyOLGm8DYj45BZhyvd9tflt0bygTzwfCFtge9aunvQc74oNqRlYOHnPFBjaAzPqgcWWxfyhcGQDCyKDLsm9+yR7tawtmOIpEqyJ3tqPxxFga92e5ysne7UliPzZJBQyjJStIS1VzlgYzPrmzHmLWQdjkBYTdVro+dMW4k0P0ujAmz0XleBJcdM2Pir32ddmAss/4ium/GItYcrTP1SrVRB6NAEEGwYrCtjH9r7RtsmrFQS0KpC+bYKrFzss9IFVoTqeKFbLQAGyJVuNWk5jUt89hlDZgb4/QDhUNKwi3DD98G3LcGaxe5OW4RfVrVc0y87IU46kgVstQdfaZ4l3h+YhbLB3HUdqX1oN7xnU5A2CCXxcTYxFg/jBmF7GIIjFUc01HG3DW9yWsdYSx+hNIHrUCcZ3v2WusEGmqmyJoAdHpgpsBgSw/Uc0yDLmMeqJVpHW/SABK1QXLBG1qq5+MAREEw3G0P3PPuW2YM8c8dz4ljUWywPM1S9Zzudt/0jMahdyEJbH4XrICwjN2RXaykAtyow0xGbADwyOxK0SFjNeDEWISxnxDbMzF2SDn2M3KqdLdWuuAhIlWsVqXiTWRJAXMAZkGQaTCsj4GWoqxarUpeKAXkQZClg0Yfi4FpOj9Q6zvS+cVOOj8AUQg8kkiVzuzKIGMAnCzxibFaS3xirIaxPNNJQFRIoFqhVEhgFMz1auZK/qOLVMkE52Jug8fWZ8u5LGeyqNpS1lqAc5Kg53Tn5+94L0mD/o4QIquLdueb25TfiyXLeXgvKbgjtAPo7FfK8SlrRpXTIHVAJxil2tIDeQEWL8qyerC02/L0VU4YKTzkq6CEh57tqmdYvgpKeHgghWCAk/3YlWJ139zl3TlTuR2Gb1c2MsYfm7vbSXlwUjuMmTEePD7fS7kqKBs9Y8kZU7oo90XUZd++C9VvINytER8AK5I/AnIqvpr72WF5dZQgxVhcuDeDvuTvOQ42nzf3stPyiLqOg/XAnjVYRnwl7HRTfqlyKkuwlgz6WX9W445UQR9OX56/l0gGGyv/kzIIlDtKa+7Ks6afD4C8CmK8/Dp37nLJxmxXYuYk+XvXo2+/vKAYUy0VYwkg90DmnD88WY2ZMSf48uSbZ71lNwUZkx7GzBi3iXkucx/s1D9GrJb86wCMdXa+khux/EldkDqMpSX7joIldOW/liHG0hzTUdAc05XHa72TuClgHgRL+S2savFQymzvgK9sCc/wapC3AIsKsff6IOWPHXDzW+62tCBywXC3PbDf3Td7dhQ3L9tBMFnPwdgsMi8iqOe4PTtsThUAgnfBHj59kjZATEDsusPLTQ6NS14Bx2JXkhvdiWsgWnphzB4juZoYmxj76YyBBf8HMNbrWukw5q54LezfdJ+Aw1i/a6Ukzo8cBuPjBwd7pmM9aH1jt9wdPG06qmHHOASqY/fYfReMXQlbSszYlpeBlq2Cg6NgB1ZSvc5fx1jwXXAMIcHpiopibFtEqthULZc76vyJeRS3Z0xeZ2fGzBzLxMfV6abN3fUjq5hQeDfGhm6Jb8VYvnaysj3qu0yM1TMG9wUuJ8YaGLPLq1n4BsdYbNluXtOjudMdxsCCH1nTqxspF6JWz4HagMNYvRLUV6RKRyn4XX0srSX7W2HshDotIwebc6OPvTP3LsGWu5x6Di3b238Dgph3gYBXzNP5iTPdXT+eCcV+WeVzPWcWctjdlqHD857O3983IHS/6wXEHu1KnVlsthEBmM/l6fl/ZFhW0qAYUwn/XomMP1DNhZ82ZWLMMJbJXy8lY9nKVifGwoxh+WssGcMqw/DAGEtYtrcPMPV8F/Hvvm2Eu5pjZzKbFjZzrKXvggeUoBbffatk0wJgr5EqzOhj1yipJZOT6pKUNaQIp5WkbKF72n3xd9ZpV/yMbdFIlfZf9APj016DVQkSb/IiAF1NsXOBB6XBQgFxYCvJZBh4O6Mr3XghBmYlDYkxRH6fVMoqmxiLMBayK/HEWMx34cdlvw/Pd6FQYOptHakCbbJaxgLWnCEFunteBQD34rWO547TsR/KXIcJ5VkKmNeD3DKWi9qWXnJ3trSBoJ8fBD5CJGe8uzMSuGxnqegPsvvWFKlyJo/k/LuhIrzgH3D3bWhWUgkSFeFyzwa5wztAxnRM0D2fGJsYmxgbSKTKsBk7xFrZaP8qxsSAI1Xso5Q18yhRkLqg2VXQd8MhDdYBsX0UeRczPFhIpq+CoBx20FKOgKOPybFzQauHNoNWgw2BQ7OSShGgPiQyI22yN+yu84/TrpSkiMK6XBDUOWNHaIkrUgSdyyecGEtkDOPa4LKJsW7OJe2Tsdiy3bymdx2pkpw7vQr+zEiVJjAcUrJ9pEoLUFc7jlRJ1PmJM90TvwEBwF4jVXzH56AjVepBIDTHbldGGDNO+32c5DKnX8d8kss9Ldg3Y5kJ1vsW42XMfoflpm/GsqW9V7+MJSzbO6RCM6eeTxlpjlRJBqt6jvPpqpNlFlCCuotU4X0W9Ga68U3y5t/vcCe7z3nK+rxRv5EqTorh4qQ4TtJgW8x247JyPgmh4mZHGqmCMXPOf7wVHa1KD18LMklAgNCMgRkBxybmAYk6FrvSy0Jz8jKX0yoXxfQWRoaWs12PYRRkEmQuSJc3zrhsNP5RM8a8YJ2786KoPEWn5+duFdbSwU9wh5N5LD/h8BnLA8E6/ZYvsS/GgDWXFqlCA2DFYKscNOq3XPGgZljrtW5v4SJorm9v2teCZJ9ZAf/wrv0vFbBnDZYXyWD3R9k1q+o5o4pU2czoosL3lUrxpdReRp+rs6Bs3l+CZlv+Wx9NBt1C4zzrm7PTr0x5R4+CsULIrR7++EkiOytPbzMsMNRzBswYbWSsXJmLRWK+nhVFZZCXldlaVWVtC5CuMp41qY09eHsUqtYF+eMg6MUsREEvZkF9tUabPCr6VC9NCSACoL6sMTDK0jo8xI8AiYO97r618kptsfuGUsCge2Kwvott3oWEHV7fsZEuUYceqdIXYzutQRNjE2MTY8fH2IjXyjYOg+7WSu3g2PXYTk+gCIKtT0ilgSwFDEaqVN6FIIhCYF8nziCYcgovFqkSP4V3wEiVVgJiNN9InRjbP2PNb+XwGYuBFUvcJQXrdxaDphDUqSz152oSQMgYZiGQREEMQC8xaBTMAOj1zHyNItJtD/wfvD8VCDrYWRcAAAAASUVORK5CYII='}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(Password)=>{setPassword(Password)}}/>
        </View>
        <RadioButtonGroup
        containerStyle={{ marginBottom: 10 , marginLeft:5}}
        selected={current}
        onSelected={(current)=>{setcurrent(current)}}
       
        style={{radioBackground:"#A4FA4F" , marginLeft:2, }}


      >
        <RadioButtonItem value="test2" label="Public user"/>
        </RadioButtonGroup>
  

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={sign_up}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>

        
      </View>
    );
  }
export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#DDF9CC',
  
  },

  MainImage:{
        height: 200,
        width:200,
        marginTop:-50,
        
        
  },
  inputContainer: {
    
      backgroundColor: '#FBFDF9',
      borderRadius:30,
    
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderColor:'red',
    //   borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor:'#A3EE75',
  },
  signUpText: {
    color: 'Signup',
  }
});
