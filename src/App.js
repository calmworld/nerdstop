import React, { Component } from 'react'
import Quiz from './components/Quiz'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchURL: 'http://jservice.io/api/random',
      showAnswer: false,
      score: 0,
      showScore: true,
      quiz: {}
    }
    this.getRandomQ = this.getRandomQ.bind(this)
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
    this.reset = this.reset.bind(this)
  }

  getRandomQ(event) {
    event.preventDefault()
    fetch(this.state.searchURL)
    .then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        quiz: json[0]
      })
    })
  }

  incrementScore = () => {
    this.setState({ score: this.state.score + this.state.quiz.value})
  }

  decrementScore = () => {
    this.setState({ score: this.state.score - this.state.quiz.value})
  }

  reset = (event) => {
    event.preventDefault()
    this.setState({score: this.state.score = 0})
  }

  render() {
    return (
      <div className='container'><br/>
        <button className='btn-small black' onClick={this.getRandomQ}>New <i class="fas fa-question-circle"></i></button>
        { (this.state.quiz.question) ? <Quiz quiz={this.state.quiz}/> : ""}
        <div>
        <button className='btn-small black' onClick={this.incrementScore}>Score <i class="fas fa-plus-circle"></i></button>
        <button className='btn-small black' onClick={this.decrementScore}>Score <i class="fas fa-minus-circle"></i></button>
        <button className='btn-small black' onClick={this.reset}>Reset <i class="fas fa-redo-alt"></i></button>
        { this.state.showScore ? <h2>{this.state.score}</h2> : ''}
        </div>
      </div>
    )
  }
}

