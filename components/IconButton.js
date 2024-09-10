import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

function IconButton({ icon, iconColor='white', onPress }) {
const [color, setColor] = useState(iconColor);
function handleStateChange(){
  onPress();
  color === iconColor ? setColor('yellow') : setColor(iconColor);
}


  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={handleStateChange}
    >
      <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{scale: 1.25}]
  }
})

export default IconButton