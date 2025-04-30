import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
type Props = {
    id:string,
    title:string,
    poster_path:string,
}
const MovieCard = ({id, title, poster_path}:Props) => {
  return (
    <Link className='' href={`/movies/${id}`} asChild>
      {/* <Text>MovieCard</Text> */}
      <TouchableOpacity className='w-[31%]'>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}} className='w-full h-52 rounded-lg' resizeMode='cover'/>
        <Text className='mt-2 text-white'>{title}</Text>
     
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard