import React from 'react'
import Chatkit from '@pusher/chatkit-client' 
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import Username from './components/username.js'
import 'rodal/lib/rodal.css';

class ChatApp extends React.Component {

    constructor() {
        super()
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            show:false,
            usersWhoAreTyping:[]
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)

    }
    updateText1 = username => {this.setState({ username })}



    onUsernameSubmitted = username => {
      fetch('/users',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify({username})
      })
        .then(response => {
          this.setState({
            currentUsername: username
          })
          const chatManager = new Chatkit.ChatManager({
              instanceLocator: process.env.REACT_APP_INSTANCE_LOCATOR,
              userId:username,
              tokenProvider: new Chatkit.TokenProvider({
                  url: '/authenticate'
              })

          })
          chatManager.connect()
          .then(currentUser => {
              this.currentUser = currentUser
              this.getRooms()
          })
          .catch(err => console.log('error on connecting: ', err))
        console.log('success')
      })
        .catch(err => {
        console.log(err)
      })

    }


    handleClose = () => { this.setState({ show: false })}
    handleShow = () => { this.setState({ show: true })}



    // when a user clikcs to chat for a certain movie this component lifecycle method gets called
     componentWillReceiveProps =  nextProps => {
        if( (typeof this.state.currentUsername !== 'undefined' )){
          this.setState({ roomName:nextProps.roomName})
          this.createRoom(nextProps.roomName)
        }
    }




    getRooms = () => {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('error on joinableRooms: ', err))
    }

    subscribeToRoom = roomId => {
        console.log(roomId)
        this.setState({messages:[]})
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message],
                    })
                },

            },
        })
        .then(room => {
            this.setState({ roomId: room.id })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage = text => {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

     createRoom = name => {

            let index = false
            let id = ''
            this.state.joinableRooms.forEach((movie) => {
            if(name === movie.name){
              index = true
              id = movie.id
              }
          })
          this.state.joinedRooms.forEach((movie) => {
          if(name === movie.name){
            index = true
            id = movie.id
            }
        })
          if(typeof name !== 'undefined'){
            if(!index){  //ensures there isn't a chatroom for the same movie
              this.currentUser.createRoom({ name })
              .then(room => this.subscribeToRoom(room.id))
              .catch(err => console.log('error with create room ',err.message))
              }
            else     
              this.subscribeToRoom(id)
            }
        }

    render() {
        return (
            <div className="app">
                <RoomList
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    roomSet={this.props.roomSet} />
                <MessageList
                roomId={this.state.roomId}
                messages={this.state.messages}
                username={this.state.currentUsername}
                />
                <SendMessageForm
                disabled={!this.state.roomId}
                sendMessage={this.sendMessage}
                />
              <NewRoomForm createRoom={this.createRoom}/>
              <Username   createRoom={this.createRoom} roomName={this.props.roomName} onSubmit={this.onUsernameSubmitted} usernameUpdate={this.updateText1} chatTrigger={this.props.chatTrigger} ModalbigClose={this.props.ModalbigClose} />
            </div>
        );
    }
}

export default ChatApp
