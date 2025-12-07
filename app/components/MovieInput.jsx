import { View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { globalSocket } from "./websocket";

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

      if (globalSocket && globalSocket.readyState === WebSocket.OPEN) {
        globalSocket.send(JSON.stringify({
          correct: true
        }));
        console.log("SENDING:", JSON.stringify({ correct: true }));

      }
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
      onSubmitEditing={handleAddMovie}
      returnKeyType="done" 
    />
    <View style={{ borderRadius: 2, width: "8%" }}>
      <Button title="GUESS" onPress={handleAddMovie} />
    </View>
  </View>
  );
};
