import { StyleSheet } from 'react-native'
import * as color from '../../Assets/Theme/Color'

const style = StyleSheet.create({
    contain:{
        flex:1, 
        backgroundColor: color.BGR_COLOR
    },
    iconContain:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    iconContain_Text:{
        marginTop:20,
        fontSize:30
    },
    bodyContain:{
        flex:2, 
        padding:20,
    },
    bodyContain_Box:{
        flex:1,
        backgroundColor:color.BGR_COLOR_MENU,
        borderRadius:20,
        borderWidth:1,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    bodyContain_Box_Text: {
        fontSize: 30,
    },
})

export default style;