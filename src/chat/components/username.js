import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';

class Username extends React.Component {
    constructor(){
      super()
      this.state={
        username:'',
        show:false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

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
      console.log(this.state.username)
      this.setState({username:''})
      this.handleClose()

    }

    componentDidMount(){
      this.handleShow()
      console.log('1')

    }

    render () {

        return (
          <div >
          <Button variant="primary" onClick={this.handleShow}>
                    Change Username
          </Button>
          <Rodal className="modall" visible={this.state.show} onClose={this.handleClose.bind(this)} width={40} height={40} measure={'%'} animation={'zoom'}>
          <Form onSubmit={this.handleSubmit} style={{width: '80%'}}>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" onChange={this.handleChange} value={this.state.username}/>
              <Form.Text className="text-muted" >
                We'll never share your email with anyone else.
              </Form.Text>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Rodal>

        </div>

        )
        console.log(this.state.username)
    }
}

export default Username
