
import { useEffect } from "react";
import { store } from "../store";
import { addMovie } from "../movieSlice";

export let globalSocket = null;

export function useWebSocket() {
  useEffect(() => {
    globalSocket = new WebSocket("ws://localhost:8080/ws");

    globalSocket.onopen = () => console.log("Connected to Go WebSocket");

    globalSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received from backend:", data);

      store.dispatch(addMovie({ title: data.title, description: data.description }));
    };

    return () => globalSocket.close();
  }, []);
}
