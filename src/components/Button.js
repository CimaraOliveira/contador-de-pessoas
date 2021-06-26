import React from 'react'

import {StyleSheet, Text, Dimensions, TourchableHighlight} from 'react-native'

const style = StyleSheet.create({
    button: {
                fontSize:40 ,
                height:Dimensions.get('window').width  /  4,
                width: Dimensions.get('window').width  /  4,
                padding: 20,
                backgroundColor: '#f0f0f0',
                textAlign: 'center',
                borderWidth: 1,
                borderColor: '#888'
,
    }
})

export default props => {
     return (
           <TourchableHighlight  onPress={props.onClick}>
                  <Text style={styles.button}>{props.label}</Text>
           </TourchableHighlight>

     )
}