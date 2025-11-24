import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice.js";
import { View, TextInput, Button } from "react-native";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };

  return (
    <View>
      <TextInput
        value={newMovie}
        onChangeText={setNewMovie}
        placeholder="Enter movie"
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Add Movie" onPress={handleAddMovie} />
    </View>
  );
};
