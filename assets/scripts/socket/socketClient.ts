// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

//import FbSdk from "../FbSDK/FbSdk";
//import GameController from "../gamecontroller";

//const {ccclass, property} = cc._decorator;

// @ccclass
// export default class SocketClient extends cc.Component {

//     @property(cc.Node)
//     mainGameNode:cc.Node;
//     mainGame;

//     serverURL = 'https://fbmongochat.herokuapp.com/';
//     //serverURL = 'http://localhost:3000/';
//     // onLoad () {}
//     socket;
//     start(): void {

//         setTimeout(() => {
//             this.mainGame = this.mainGameNode.getComponent(GameController)
//             this.onConnect();
//         }, 1000);
//     }

//     onConnect(){
//         console.log('On connected');
//         var self = this;
//         let play = (io) => {
//             this.socket = io.connect(this.serverURL);
//             //listen server emit

//             this.socket.on('connect_error', function(err) {
//                 console.log('Connection failed',err);
//                 self.socket.disconnect();
//             });
//             this.onListenFromServer();
//         }
//         //
//         if (typeof io === 'undefined') {
//             play(require('socket.io'));
//         }
//         else {
//             play(io);
//         }
//     }
//     private onListenFromServer(){
//         //server say hello
//         console.log('start connecting server');
//         //fetch all chat
//         this.socket.on('init_saved_message',(data)=>{
//             console.log('Server say:',data);
//             this.mainGame.initChat(data);
//             //this.sendToServer('chat message', 'mynamexxxx');
//             //-> reg name
//         })
//         this.socket.on('chat_connection',(data)=>{
//             console.log('Server say:',data);
//             //this.sendToServer('chat message', 'mynamexxxx');
//             //-> reg name
//         })
//         //recieve chat message
//         this.socket.on('user_chat_message',(data)=>{
//             console.log('someone say:',data);
//             this.mainGame.addChat(data);

//         })

//     }
//     private sendToServer(connectionName: string,data: any){
//         this.socket.emit(connectionName, data);
//     }
//     public sendMessage(jsonMessage,callback){
//         this.socket.emit('user_chat_message', {sender:FbSdk.ins.fbPlayerName,locale:FbSdk.ins.fbLocale,photoURL:FbSdk.ins.fbPlayerPhotoURL,message:jsonMessage});
//         callback(true);
//     }
//     // update (dt) {}
// }

import { io } from "socket.io-client";

