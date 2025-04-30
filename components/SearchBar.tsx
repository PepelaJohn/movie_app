import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

type Props = {
    onPress: () => void;
    placeholder: string;
}

const SearchBar = ({onPress, placeholder}:Props) => {
  return (
    <View style={styles.container} className='w-full gap-2 flex-row items-center justify-between   py-4  rounded-full px-4'>
        <Image className='bg-transparent' source={icons.search}/>
        <TextInput 
        onChangeText={() => {}}
        onPress={onPress}
        placeholder={placeholder}
        placeholderTextColor='gray'
        className=' flex-1 py-4 h-full  color-white'
        ></TextInput>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#252525',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:8,
        paddingBottom:8,
        borderRadius: 50,
        marginTop:15,
        marginLeft: 10,
        marginRight: 10,
    },
})