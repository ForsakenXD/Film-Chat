import React, { Component } from 'react'
import { Button, Form, Overlay, Popover } from 'react-bootstrap'
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
import GetCookie from './CookiesManipulation/getCookie'

class Username extends Component {
    constructor(props){
      super(props)

      this.handleClick = ({ target }) => {
        this.setState(s => ({ target, show2: !s.show2 }));
      };

      this.state={
        username:'',
        show2:false,
        trigger:props.chatTrigger
      }
      if(GetCookie('username')){
        this.props.usernameUpdate(GetCookie('username'))
        this.props.onSubmit(GetCookie('username'))
      }
    }



    handleClose = () => {
      this.setState({ trigger: false });
      this.props.ModalbigClose()
    }

    handleChange = e => {
      this.setState({ username:e.target.value })
    }

     handleSubmit =  e => {
      e.preventDefault()
      if(this.state.username !== ''){
           this.props.usernameUpdate(this.state.username)
           this.props.onSubmit(this.state.username)
           document.cookie =  "username=" + encodeURIComponent(this.state.username) + ';path=/';
           this.setState({username:'',trigger:false})    
        }
    }

    random = () => {
      let username = []
      for(let i=0; i < 12; i++)
          {
          let rand_num = Math.floor(Math.random() * 38)
          if(rand_num <= 26) //if the random number is from 0-26 that means that the character pushed to the array will be a letter(since the alphabet has 26 letters,else it will be a number)
            username.push(String.fromCharCode(97 + rand_num))
          else
            username.push(rand_num)
          }
      return username.join("")
    }

    randomUsername = () => { this.setState({username:this.random()}) }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
      if(nextProps.chatTrigger !== this.state.trigger)
        this.setState({ trigger:nextProps.chatTrigger })
    }


    render () {
        let modal_trigger =  GetCookie('username') ? false : this.state.trigger 
        return (
          <div className="username-modal">
            <Rodal classname="modal" style={{padding:'1em'}}  visible={modal_trigger}   onClose={this.handleClose} width={40} height={40} measure={'%'} animation={'zoom'}>
              <Overlay
                show={this.state.show2}
                target={this.state.target}
                placement="top"
                container={this}
                containerPadding={90}
                className="modal"
              >
                <Popover id="popover-contained" title="Hey There">
                  <strong>Unfortunatly you have to enter a username before closing this window</strong>
                </Popover>
              </Overlay>
            <Form onSubmit={this.handleSubmit} style={{width: '80%'}} classname="modal">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={this.handleChange} value={this.state.username}/>
                <Form.Text className="text-muted" >
                  keep it simple :)
                </Form.Text>
            </Form>
            <Button variant="primary" type="submit" className="username-buttons" onClick={this.handleSubmit} style={{marginRight:'0.5em'}}>
              Submit
            </Button>
            <Button variant="info" type="submit"  className="username-buttons" onClick={this.randomUsername}>
              Random
            </Button>
          </Rodal>
        </div>
        )
    }
}

export default Username