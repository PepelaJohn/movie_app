import React, { useState, useCallback, useEffect } from "react";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const [category, setCategory] = useState<"movie" | "tv">("movie");
  // For featured content
  const [featuredItem, setFeaturedItem] = useState<Movie | null>(null);
  const fetchData = useCallback(() => {
    return fetchMovies({ query: "", type: category });
  }, [category]);

  const { data: items, loading, error } = useFetch(fetchData, true, [category]);

  useEffect(() => {
    if (items && items.length > 0) {
      // Use first item with a backdrop path, or fall back to first item
      const itemWithBackdrop =
        items.find((item: Movie) => item.backdrop_path) || items[0];
      setFeaturedItem(itemWithBackdrop);
    }
  }, [items]);

  // Header animation for scroll effect
  //@ts-ignore
  // const headerOpacity = scrollY.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: [0, 1],
  //   extrapolate: 'clamp',
  // });

  const renderHeader = () => (
    <View className="w-full bg-black  px-4">
      <View
        className=""
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          marginBottom: 24,
        }}
      >
        
        <Image
        className="opacity-50"
          source={{
            uri: featuredItem
              ? `https://image.tmdb.org/t/p/w780${
                  featuredItem.backdrop_path || featuredItem.poster_path
                }`
              : undefined,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>
      {/* App Bar */}
      <View className="bg-" style={{ width: '100%', marginBottom: 8 }}>
      
        <View style={{ marginTop: 16 }}>
          <SearchBar
            onPress={() => router.push("/(tabs)/search")}
            placeholder={`Search for a ${category === "movie" ? "movie" : "TV show"}`}
          />
        </View>

        {/* Category Toggle - Improved */}
        <View style={{ 
          flexDirection: 'row', 
          justifyContent: 'center', 
          gap: 8, 
          marginTop: 24, 
          backgroundColor: '#252525', 
          padding: 4, 
          borderRadius: 28
        }}>
          <TouchableOpacity
            onPress={() => setCategory("movie")}
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 24,
              backgroundColor: category === "movie" ? "white" : "transparent"
            }}
          >
            <Text
              style={{
                color: category === "movie" ? "black" : "#D1D5DB",
                fontWeight: category === "movie" ? "bold" : "normal"
              }}
            >
              Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategory("tv")}
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
              borderRadius: 24,
              backgroundColor: category === "tv" ? "white" : "transparent"
            }}
          >
            <Text
              style={{
                color: category === "tv" ? "black" : "#D1D5DB",
                fontWeight: category === "tv" ? "bold" : "normal"
              }}
            >
              TV Shows
            </Text>
          </TouchableOpacity>
        </View>
       
      </View>
      


      <Text className="text-white text-md mb-3 uppercase mt-5">
        Popular {category === "movie" ? "Movies" : "TV Shows"}
      </Text>
    </View>
  );

  if (loading) {
    return (
<View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="white" />
        <Text style={{ marginTop: 16, color: 'white', fontSize: 16 }}>
          Discovering amazing content...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <Text className="text-red-500">{error.message}</Text>
      </View>
    );
  }

  return (
    <View className="bg-black flex-1">
      <Image source={images.bg} className="absolute w-full h-full" />
      <SafeAreaView className="flex-1 bg-black/50">
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 10,
            marginBottom: 10,
            paddingHorizontal: 10,
          }}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          renderItem={({ item }) => (
            <MovieCard
              id={item.id}
              poster_path={item.poster_path}
              title={item.title || item.name} // TV shows may use `name` instead of `title`
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
}
