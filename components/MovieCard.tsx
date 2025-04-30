import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'
type Props = {
    id:string,
    title:string,
    poster_path:string,
    release_date:string,
    vote_average:string,
    original_language?:string,
}
const MovieCard = ({id, title, poster_path, release_date, vote_average, original_language}:Props) => {
  return (
    <Link className='' href={`/movies/${id}`} asChild>
      {/* <Text>MovieCard</Text> */}
      <TouchableOpacity className='w-[31%]'>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}} className='w-full h-52 rounded-lg' resizeMode='cover'/>
        <Text className='mt-2 text-sm text-white' numberOfLines={1}>{title}</Text>
        <View className='gap-x-1 items-center my-[2px] flex-row'>
          <Image source={icons.star} className='size-4'></Image>
          <Text className='text-white text-sm'>{vote_average}</Text>
        </View>
<View className='flex-row  items-center justify-between gap-x-1'>
{ release_date?.split("-")[0] && <Text className='text-gray-400 text-sm'>{release_date?.split("-")[0]}</Text>}
<Text className='text-gray-400 text-sm'>{original_language?.toUpperCase()}</Text>
  
  </View>     
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard