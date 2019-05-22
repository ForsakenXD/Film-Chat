import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'

class MessageList extends React.Component {

    componentWillUpdate(){
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }

    componentDidUpdate(){
      if(this.shouldScrollToBottom){
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
      }
    }




    render() {
      console.log(this.props.roomId)
      if(!this.props.roomId){
          return(
          <div className="message-list">
              <div className="join-room">
                &larr;Join a room!
              </div>
          </div>
        )
      }
        return (
            <div className="message-list">
                <h3 style={{textAlign:'center',borderBottom:'1px solid rgb(153, 170, 187)'}}>Username:temp123512</h3>
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={message.id} username={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList
