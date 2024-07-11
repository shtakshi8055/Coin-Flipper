import React, { Component } from 'react'
import Coin from './Coin'
import './App.css';
class FlipCoin extends Component {
    static defaultProps = {
        coins: [

            {
                side: 'head',
                imgSrc:
                    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
            },
            {
                side: 'tail',
                imgSrc:
                    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
            }
        ]
    }

    constructor(props) {
        super(props)

        this.state = {

            currFace: null,
            totalFlips: 0,
            heads: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }


    choice(arr) {
        const randomIdx = Math.floor(Math.random() * arr.length)
        return arr[randomIdx]
    }

    flipCoin() {
        const newFace = this.choice(this.props.coins)
        this.setState(curState => {
            const heads = curState.heads +
                (newFace.side === 'head' ? 0 : 1)
            return {
                currFace: newFace,
                totalFlips: curState.totalFlips + 1,
                heads: heads
            }   
        })
    }
    handleClick() {
        this.flipCoin()
    }
    render() {
        const { currFace, totalFlips, heads } = this.state
        return (
            <div className='main-container'> 
            <div className='container'>
                <h2>Let's flip a coin</h2>

                {currFace && <Coin info={currFace} />}
                {totalFlips < 5 ? (
                      <button onClick={this.handleClick}>Flip Me!</button>
                ):(
                    <p>
                    The Winner is {(heads ) > (totalFlips - heads) ? "Heads" : "Tails"}
                </p>
                )}
                 <p>
                    Total Flips : {totalFlips}<br />
                    No of Heads : {heads}<br />
                    No of Tails : {totalFlips - heads}<br/>
                </p>
              
                
            </div>
            </div>
        )
    }
}

export default FlipCoin
