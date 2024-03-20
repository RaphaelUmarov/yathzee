
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Text, View, Pressable,ScrollView } from 'react-native';
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons';
import styles from '../style/style';
import {NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  MAX_NBR_OF_SCOREBOARD_ROWS} from "../constant/Game";
import { Container, Row, Col } from 'react-native-flex-grid';

let board = [];

export default function Gameboard({ route, navigation }) {
  
  const [nbrOfThrowsLeft,setNbrOfThrowsLeft]=useState(NBR_OF_THROWS);
  const [status,setStatus]= useState('Throw dices');
  const [gameEndStatus,setGameEndStatus]= useState(false);
  const [reset,setReset]=useState(false);

  // If dices are selected or not
  const [selectedDices,setSelectedDices]=
    useState(new Array(NBR_OF_DICES).fill(false));
  // Dice spots
  const [diceSpots,setDiceSpots]=
    useState(new Array(NBR_OF_DICES).fill(0));

  // if Doces points are selected or not for spots
  const [selectedDicePoints,setSelectedDicePoints]=
    useState(new Array(MAX_SPOT).fill(false));
  
  // Total points for different spots
  const [dicePointsTotal, setDicePointsTotal]=
    useState(new Array(MAX_SPOT).fill(0));

  const [playerName,setPlayerName] = useState('');
  
  let totalPoints=0;

  useEffect(()=>{
    if (playerName===''&& route.params?.player){
      setPlayerName(route.params.player);
    }
    throwDices();
  },[])
  const row = [];
  for (let dice = 0; dice < NBR_OF_DICES; dice++) {
    row.push(
      <Col key={"dice"+ dice}>
        <Pressable 
            key={"dice" + dice}
            onPress={() => selectDice(dice)}
            >
          <MaterialCommunityIcons
            name={board[dice]}
            key={"dice" + dice}
            size={50} 
            color={getDiceColor(dice)}
            >
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    );
  }

  const pointsRow =[];
  for(let spot = 0; spot<MAX_SPOT; spot++){
    totalPoints+=getSpotTotal(spot);
    pointsRow.push(
      <Col key={"pointsRow" + spot}>
        <Text style={styles.header2} key={"pointsRow"+spot}>{getSpotTotal(spot)}</Text>
      </Col>
      
    );
    
  }

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT;diceButton++){
    pointsToSelectRow.push(
      <Col key={"buttonsRow" + diceButton}>
        <Pressable key={"buttonsRow" + diceButton} 
          onPress={()=>selectDicePoints(diceButton)}
        >
          <MaterialCommunityIcons
          key={"buttonsRow" + diceButton}
          name={"numeric-" +(diceButton+1)+ "-circle"}
          size={35}
          color={getDicePointsColor(diceButton)}
          >
          
          </MaterialCommunityIcons>
        </Pressable>
      </Col>
    )
  }

  const selectDice = (i) => {
    if(nbrOfThrowsLeft<NBR_OF_THROWS && !reset){
      let dices = [...selectedDices];
      dices[i] = selectedDices[i] ? false : true;
      setSelectedDices(dices);
    }else{
      setStatus("Throw first");
    }
    
  }

  function getDiceColor(i){
    return selectedDices[i] ? "black" : "#ff6f3c"
  }

  function getDicePointsColor(i){
    return selectedDicePoints[i] ? "black" : "#ff6f3c"
  }
  const selectDicePoints =(i) => {
    if(nbrOfThrowsLeft===0){
      let selected = [...selectedDices];
      let selectedPoints =[...selectedDicePoints];
      let points = [...dicePointsTotal];
      if (!selectedPoints[i]){
        selectedPoints[i] = true;
        let nbrOfDices = 
          diceSpots.reduce(
            (total,x)=>(x===(i+1) ? total +1 : total),0);
        points[i]=nbrOfDices * (i+1);
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        setSelectedDices(selectedDices.fill(false));

        let test=true;
        for(let i = 0; i<selectedPoints.length; i++){
          if(selectedPoints[i]==false){
            test=false;
          }
        }
        if(test==true){
          setReset(true);
          setStatus("You can now reset !");
        }
        return points[i];
        }
        else{
          setStatus("You already selected Points for "+(i+1));
        }
      }
    else{
      setStatus("Throw " +NBR_OF_THROWS +" times before setting points")
    }
  }
  const throwDices = () => {
    let spots = [...diceSpots];
    if (nbrOfThrowsLeft>0){
      for (let i = 0; i < NBR_OF_DICES; i++) {
        if (!selectedDices[i]) {
          let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
          spots[i]=randomNumber;
          board[i] = 'dice-'+ randomNumber;
        }
      }
      setDiceSpots(spots);
      setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
      setStatus("Throw dices")
      
    }
    else{
      setStatus("No more throws left please select a number to save below")
    }
    
  }
 
  function getSpotTotal(i){
    return dicePointsTotal[i];
  }
  const resetGame = () => {
    if(reset==false){
      setStatus("You can't reset for now");
    }
    else{
      setNbrOfThrowsLeft(NBR_OF_THROWS);
      setStatus('Throw dices');
      setGameEndStatus(false);
      setReset(false);

      setSelectedDices(new Array(NBR_OF_DICES).fill(false));
      setDiceSpots(new Array(NBR_OF_DICES).fill(0));
      setSelectedDicePoints(new Array(MAX_SPOT).fill(false));
      setDicePointsTotal(new Array(MAX_SPOT).fill(0));
      throwDices();
      let totalPoints=0;
    }
  }
 return(
  <>
    <Header/>
    <ScrollView>
      <Container>
        <Row>{row}</Row>
      </Container>
      <Text style={styles.header}>Throws Left : {nbrOfThrowsLeft}</Text>
      <Text style={styles.header1}>{status}</Text>
      <Container>
      <Pressable  height={50} style={styles.button}
        onPress={()=> throwDices()}>
        <Text>THROW DICES</Text>
      </Pressable>
      </Container>
      <Container >
        <Row>{pointsRow}</Row>
      </Container>
      <Container>
        <Row>{pointsToSelectRow}</Row>
      </Container>
      <Container>
        <Row><Text style={styles.header2}> Total Score : {totalPoints} </Text></Row>
      </Container>
      <Text style={styles.header1}>Player : {playerName} </Text>
      <Pressable  height={50} style={styles.button}
        onPress={()=> resetGame()}>
        <Text>Reset</Text>
      </Pressable>
    </ScrollView>
    <Footer/>
  </>
 )
}