// components/frontend.js
import { useEffect } from "react";
import { store } from "../store";
import { addMovie } from "../movieSlice";

export function useWebSocket() {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => console.log("Connected to Go WebSocket server");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);

      console.log("Received AI movie movie description:", data.description);
      store.dispatch(addMovie({title:data.movieTitle,description: data.description}));
    };

    return () => socket.close();
  }, []);
}
