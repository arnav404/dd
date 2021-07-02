import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import BarChart from './components/BarChart'
import RadarGraph from './components/RadarGraph'
import NavigationBar from './components/Nav'
import { ButtonGroup, Button, Row, Col } from 'react-bootstrap'

import { useState, useEffect } from 'react'

function App() {

  var [stat, setStat] = useState(0)
  var [avgs, setAvgs] = useState([0.0, 0.0, 0.0, 0.0,0.0,0.0])
  var [percentiles, setPercent] = useState([0.0,0.0,0.0,0.0,0.0,0.0])
  var [gameLog, setGL] = useState([[],[],[],[],[]])
  var [player, setP] = useState('LeBron James')
  var [imageString, setIS] = useState('https://nba-players.herokuapp.com/players/James/LeBron')
  var tempPlayer = ""

  useEffect(() => {
    fetch('https://digit-dynasty-api.herokuapp.com/getstats/' + player)
    .then(res => { return res.json(); })
    .then((data) => {
      setAvgs(data.avgs)
      setGL(data.gamelog)
      setPercent(data.percentiles)
    })
  }, [player])

  return (
    <div className="App center">
      <NavigationBar/>
      <div className="header">
        <h1 style={{"color": "white", "fontSize": "60px", "fontFamily": "Montserrat, sans-serif", "padding": "10px", "fontWeight": "200"}}>Player Search</h1>
        <div className="image-cropper">
          <img className = "playerpic" src={imageString}></img>
        </div>
        <p className = "player-name">{player}</p>
        <table>
          <tr>
            <th>PTS</th>
            <th>TRB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>|</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>FT%</th>
          </tr>
          <tr>
            <th>{avgs[0]}</th>
            <th>{avgs[1]}</th>
            <th>{avgs[2]}</th>
            <th>{avgs[3]}</th>
            <th>{avgs[4]}</th>
            <th>|</th>
            <th>{avgs[9]}</th>
            <th>{avgs[11]}</th>
            <th>{avgs[12]}</th>
          </tr>
        </table>
        <p></p>
          <div class="form-group" style={{alignItems: "center"}}>
            <input onKeyDown={(e) => {if(e.key === "Enter") {e.target.value=""; setP(tempPlayer); setIS('https://nba-players.herokuapp.com/players/'+tempPlayer.split(' ')[1] + '/' + tempPlayer.split(' ')[0])}}} className="butt" type="text" style={{width: "200px", textAlign: "center", margin: "auto", display: "block"}} onChange={(e) => {tempPlayer = e.target.value}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
          </div>
          <p></p>
          </div>
      <p></p>
        <div className="squish">
          <h3 className="gamelog">Percentiles:</h3>
          <Row>
            <p></p>
            <p></p>
            <Col><RadarGraph labels={["PPG", "RPG", "APG", "STL", "BLK"]} color={"#80008077"} player={player} avg={[percentiles[0], percentiles[1], percentiles[2], percentiles[3], percentiles[4]]}/></Col>
            <Col><RadarGraph labels={["FGA", "2PA", "3PA", "FTA", "FG%", "2P%", "3P%", "FT%"]} color={"#FF334C77"} player={player} avg={[percentiles[5], percentiles[6], percentiles[7], percentiles[8], percentiles[9], percentiles[10], percentiles[11], percentiles[12]]}/></Col>
            <Col><RadarGraph labels={["FG%", "2P%", "3P%", "FT%"]} color={"#ffa50077"} player={player} avg={[percentiles[9], percentiles[10], percentiles[11], percentiles[12]]}/></Col>
          </Row>
        </div>
        <p></p>
        <div className="squish">
          <h3 className="gamelog">Charts:</h3>
          <BarChart player={player} data={ gameLog[stat] }/>
          <p></p>
          <ButtonGroup aria-label="Basic example">
            <Button className="butt" onClick={ () => {setStat(0)}} variant="danger">PTS</Button>
            <Button className="butt" onClick={ () => {setStat(1)}} variant="danger">TRB</Button>
            <Button className="butt" onClick={ () => {setStat(2)}} variant="danger">AST</Button>
            <Button className="butt" onClick={ () => {setStat(3)}} variant="danger">STL</Button>
            <Button className="butt" onClick={ () => {setStat(4)}} variant="danger">BLK</Button>
            <Button className="butt" onClick={ () => {setStat(5)}} variant="danger">TOV</Button>
          </ButtonGroup>
          <p></p>
        </div>
    </div>
  );
}

export default App;
