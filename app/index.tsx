import { ScrollView, View } from "react-native";
import { MovieList } from "./components/MovieList";
import { useWebSocket } from "./components/websocket";
import { MovieInput } from "./components/MovieInput";

export default function Index() {
  useWebSocket();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }} 
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <MovieList />
        <MovieInput />
      </View>
    </ScrollView>
  );
}
