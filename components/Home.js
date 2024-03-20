import React, { useState } from 'react'
import { Text, View, TextInput, Pressable, Keyboard, Button,ScrollView } from 'react-native'
import styles from '../style/style'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import {
  NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  MAX_NBR_OF_SCOREBOARD_ROWS
} from "../constant/Game";
import Header from './Header';
import Footer from './Footer';
export default function Home({ navigation }) {
  const [playerName, setPlayerName] = useState('');
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
    }
  }
  return (
    <>
      <Header />
      <ScrollView>
        <MaterialCommunityIcons
          name="information"
          size={90}
          color="#ff9a3c"
        />
        {!hasPlayerName ?
          <>
            <Text style={styles.header}>For scoreboard enter your name...</Text>
            <Pressable height={60}>
            <TextInput style={styles.input}
              onChangeText={setPlayerName}
              autoFocus={true}
            />
            </Pressable>
            <Pressable onPress={() => handlePlayerName(playerName)}>
              <Text style={styles.button}>OK</Text>
            </Pressable>
          </>
          :
          <>
            <Text style={styles.header1}>Rules of the game</Text>
            <Text multiline="true" style={styles.header2}>
              THE GAME: Upper section of the classic Yahtzee
              dice game.
            </Text>
            <Text multiline="true">
              You have {NBR_OF_DICES} dices and
              for the every dice you have {NBR_OF_THROWS}
              throws. After each throw you can keep dices in
              order to get same dice spot counts as many as
              possible. In the end of the turn you must select
              your points from {MIN_SPOT} to {MAX_SPOT}.
              Game ends when all points have been selected.
              The order for selecting those is free.

              POINTS: After each turn game calculates the sum
              for the dices you selected. Only the dices having
              the same spot count are calculated. Inside the
              game you can not select same points from
              {MIN_SPOT} to {MAX_SPOT} again.

              GOAL: To get points as much as possible.
              {BONUS_POINTS_LIMIT} points is the limit of
              getting bonus which gives you 5
              points more.
            </Text>
            <Text style={styles.header2}>Good luck, {playerName}</Text>
            <Pressable onPress={() => navigation.navigate('Gameboard', { player :playerName })}>
              <Text style={styles.button}>PLAY</Text>
            </Pressable>
          </>
        }
      </ScrollView>
      <Footer />
    </>
  )
}