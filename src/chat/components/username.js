import React from 'react'
import {Button,Form,Overlay,Popover} from 'react-bootstrap'
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

class Username extends React.Component {
    constructor(){
      super()

      this.handleClick = ({ target }) => {
        this.setState(s => ({ target, show2: !s.show2 }));
      };

      this.state={
        username:'',
        show:false,
        show2:false,
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.randomUsername = this.randomUsername.bind(this);
    }



    handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}





    handleChange(e){
      this.setState({
        username:e.target.value
      })
      // this.props.createRoom('x3')
    }

    handleSubmit(e){
      e.preventDefault()
      if(this.state.username !== '')
        {

          console.log(this.state.username)
                this.props.usernameUpdate(this.state.username)
          this.props.onSubmit(this.state.username)

                this.setState({username:''})
          this.handleClose()
        }
      else {
        console.log('you need to enter a username')
      }

    }

    componentDidMount(){
      this.handleShow()
    }

    random(){
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

randomUsername(){
  this.setState({username:this.random()})

}

    render () {
        return (
          <div >
          <Rodal className="modall" visible={this.state.show}   onClose={this.handleClick} width={40} height={40} measure={'%'} animation={'zoom'}>
            <Overlay
              show={this.state.show2}
              target={this.state.target}
              placement="top"
              container={this}
              containerPadding={20}
            >
              <Popover id="popover-contained" title="Hey There">
                <strong>Unfortunatly you have to enter a username before closing this window</strong>
              </Popover>
            </Overlay>
          <Form onSubmit={this.handleSubmit} style={{width: '80%'}}>
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
