import { View, Text } from "react-native";
import {useSelector} from "react-redux";

export function MovieList() {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center"}}>
      <h1>My Movies</h1>
      {movies.map((movie) => (
          <div key = {movie.id}>{movie.name}</div>
      ))}

    </View>
  );
}