import React, { Component } from 'react'

export default class EightBall extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      randomIndex: null
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }
  ask(){
    if(this.state.inputValue){
      this.setState({
        randomIndex: Math.floor(Math.random() * 10),
        inputValue: ''
      });
    }
    console.log("Asking");
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const posAn = [
      'I hope for your own good', 'Healthy life, you shall expect',
      'Why so serious?', 'Yes you can!', 'Never give up', 'Please try again later', 'You bet!', "A millionaire is answer", "Be wise and don't worry", "Don't get distracted", "Your goal is up ahead", "Don't sweat", "I don't think so...", "Sorry", "Congratulations are in order", "I believe so", "Why not, why not indeed", "Be the captain of your soul", "Navigate your body upon the right path", "Do not deviate", "I think not"
    ];

    const answer = posAn[this.state.randomIndex];
    return (
      <div className="box1">
        <div className="box2">
          <div className="form-row">
            <div className="form-input">
            <div className="label-div">
              <label>Ask The EightBall</label>
            </div>
              <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </div>
            <div className="btn">
              <button onClick={this.ask}>Ask</button>
            </div>
          </div>
          <p>{answer}</p>
        </div>
      </div>
    )
  }
}
