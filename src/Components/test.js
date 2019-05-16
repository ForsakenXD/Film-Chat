import React from 'react'
import posed from 'react-pose';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 ,
    transition: {
                opacity: { ease: 'easeOut', duration: 600 },
                default: { ease: 'linear', duration: 100 },
              }
            }

});

class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />;
  }
}

export default Example
