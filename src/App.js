import React from "react"
import './App.css';


const ProgressBar = ({ value }) => {

  return (
    <div className='progress-bar'>
      <div style={{ width: `${value * Math.pow(10, 2)}%` }}></div>
    </div>
  )
}


const Item = ({ index, d }) => {
  return (
    <div className='item' key={index}>
      <div className='box'></div>
      <div className='txt'>{`第${d}天`}</div>
    </div>
  )
}
const days = new Array(7).fill(0).map((d, index) => index)

let timer = 0
export default class App extends React.Component {

  state = {
    count: 0
  }
  componentDidMount() {
    let timer_count = 0
    timer = setInterval(() => {
      timer_count++
      if (timer_count === days.length) clearTimeout(timer)
      this.setState({
        count: timer_count
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearTimeout(timer)
  }

  render() {
    const { count } = this.state
    console.log(count);

    return (
      <div className="App">
        <div className='wraper'>
          <div className='list-box'>
            <ProgressBar value={count / days.length} />
            {
              days.map((d, index) => {
                return (
                  <Item key={index} d={d} index={index} />
                )
              })
            }
            {
              count===days.length && <div className='right-line'></div>
            }
          </div>
        </div>
      </div>
    );
  }
};
