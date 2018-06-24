import {StyleSheet, Platform, NativeModules} from 'react-native';
import AppConfig from './AppConfig.js';

const {StatusBarManager} = NativeModules;

const basePnl ={
  borderRadius:10,
  marginLeft:5,
  marginRight:5, 
  marginBottom:5
}
const AppStyles = StyleSheet.create({
    container: {
      flex: 1, //enable Flex layout
      flexDirection:'column', //direction by vertical(column)
      alignItems: 'stretch', //item stretch to fill width (in case COLUMN)
      paddingTop: Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT,//untested on Android,fixed size on ios
      backgroundColor: '#2D8633',
    },
    //==========Header Part========================================
    headerPnl: {...basePnl,
      flex:1,
      flexDirection:'row',
      height:'18%',
      backgroundColor: '#116416'
    },
    avatar:{
      width:'33%', flex:1,
      justifyContent:'center',
      flexDirection:'row',
      alignItems:'center'
    },
    avatarImage:{
      borderRadius:50,width:100,height:100
    },
    //===========================================================
    subContentPnl:{...basePnl,
      height:'18%',
      backgroundColor: '#54A759'
    },
    mainContentPnl:{...basePnl,
      height:'62%',
      backgroundColor:'#86C98A',
    },
    paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
    }
  });
  
export default AppStyles;


