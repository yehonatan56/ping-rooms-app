import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket, io } from "socket.io-client";

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
const socketLogic = (pPing: () => void) => {
  if (socket === null) socket = io("http://localhost:3000");
  socket.on("connection", () => {
    console.log("connected");
  });
  socket.on("ping", () => {
    console.log("ping");
    pPing();
  });
};
const ping = () => {
  console.log("pingsss");
  // @ts-ignore
  socket.emit("ping");
};
export { socketLogic, ping };
