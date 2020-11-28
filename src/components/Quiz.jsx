import React, { Component } from 'react'
import Answer from './Answer'

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false,
        }
        this.toggleAnswer = this.toggleAnswer.bind(this)
    }

    toggleAnswer() {
        this.setState({showAnswer: !this.state.showAnswer})
    }

    render() {
        return (
            <div lassName='container'><br/>
                <h6 className='flow-text html-txt'>Category: </h6>
                <h6 className='flow-text'>{this.props.quiz.category.title}</h6>
                <h6 className='flow-text html-txt'>Question: </h6>
                <h4 className='flow-text'>{this.props.quiz.question}</h4>
                <h6 className='flow-text html-txt'>Possible Points: </h6>
                <h6 className='flow-text'>{this.props.quiz.value}</h6>
                <br />
                <div>
                    <button className='btn-small black' onClick={this.toggleAnswer}>Answer</button>
                    { (this.state.showAnswer) ? <h4><Answer showAnswer={this.props.quiz.answer}/></h4> : ''}
                </div>
            </div>
        )
    }
}
