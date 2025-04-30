import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Link, RelativePathString } from 'expo-router'

const Onboarding = () => {
    const movies = [
        {
            id: 1,
            title: 'Movie 1',
            description: 'Description 1',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            title: 'Movie 2',
            description: 'Description 2',
            image: 'https://picsum.photos/200/150'
        },
        {
            id: 3,
            title: 'Movie 3',
            description: 'Description 3',
            image: 'https://picsum.photos/200/25r0'

        }
    ]
  return (
    <View>
      {/* <Text>Movies</Text> */}
        {movies.map((movie) => (
            <View key={movie.id} className="p-4 border-b border-gray-200">
            <Text className="text-lg font-bold">{movie.title}</Text>
            <Text className="text-gray-500">{movie.description}</Text>
            <Image source={{ uri: movie.image }}  className="w-full h-32 rounded-md" />
            <Link className="text-primary  py-3 px-6 rounded-md bg-gray-200" href={`/movies/${movie.id.toString()}` as RelativePathString }>View Movie</Link>
            </View>
        ))}
     
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({})