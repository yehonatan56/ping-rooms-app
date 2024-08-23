import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Socket, io } from "socket.io-client";

let socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = null;
const socketLogic = (pPing: () => void) => {
  fetch("http://10.100.102.19:3000")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
  if (socket === null) socket = io("http://10.100.102.19:3000");
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
  socket.emit("ping", { message: "ping" });
};
// @ts-ignore
export { socketLogic, ping };
