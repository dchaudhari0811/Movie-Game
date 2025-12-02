import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../movieSlice.js";
import { View, TextInput, Button, Alert } from "react-native";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const movies = useSelector((state) => state.movies.movies);

  const handleAddMovie = () => {
    if (!newMovie) return;
    const matchedMovie = movies.find(
      (movie) => movie.title.toLowerCase() === newMovie.toLowerCase()
    );

    if (matchedMovie) {
      console.log("Correct guess:", matchedMovie.title); 
      Alert.alert("Correct!", `You guessed the movie: ${matchedMovie.title}`);
    } else {
      console.log("No match found for:", newMovie);
      Alert.alert("Try Again", "No match found for that title.");
    }

    setNewMovie("");
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        value={newMovie}
        onChangeText={setNewMovie}
        placeholder="Enter movie"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          marginTop: 30,
          width: "60%",
          borderRadius: 6,
        }}
      />
      <View style={{ borderRadius: 2, width: "8%" }}>
        <Button title="GUESS" onPress={handleAddMovie} />
      </View>
    </View>
  );
};
