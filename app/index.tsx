import { Text, View } from "react-native";
import {MovieList} from "./components/MovieList"
import {MovieInput} from "./components/MovieInput"
export default function Index() {
  return (
    <>
    {" "}
    <MovieInput/>
    <MovieList/>
    </>
  );
}
