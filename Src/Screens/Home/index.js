import React, { Component } from 'react'
import { View,Image,Text } from 'react-native'
import s from './style'
import logo from '../../Assets/Image/logo.png'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={s.contain}>
                <View style={s.iconContain}>
                    <Image
                    source={logo}
                    />
                    <Text style={s.iconContain_Text}>GDPT TAN THANH</Text>
                </View>
                <View style={s.bodyContain}>
                    <View style={s.bodyContain_Box}>
                        <Text style={s.bodyContain_Box_Text}>
                            Danh sach
                        </Text>
                    </View>
                    <View style={s.bodyContain_Box}>
                        <Text style={s.bodyContain_Box_Text}>
                            Danh sach
                        </Text>
                    </View>
                    <View style={s.bodyContain_Box}>
                        <Text style={s.bodyContain_Box_Text}>
                            Danh sach
                        </Text>
                    </View>
                    <View style={s.bodyContain_Box}>
                        <Text style={s.bodyContain_Box_Text}>
                            Danh sach
                        </Text>
                    </View>
                    
                </View>
            </View>            
        );
    }
}