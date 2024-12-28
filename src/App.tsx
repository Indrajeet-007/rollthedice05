import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import RNHapticFeedback from 'react-native-haptic-feedback';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import diceOne from '../assets/One.png';
import diceTwo from '../assets/Two.png';
import diceThree from '../assets/Three.png';
import diceFour from '../assets/Four.png';
import diceFive from '../assets/Five.png';
import diceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageurl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageurl }: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageurl} />
    </View>
  );
};

function App(): React.JSX.Element {

  const [diceImage, setdiceImage] = useState<ImageSourcePropType>(diceOne);

  const rollDiceOnTap = () => {
    let randNumber = Math.ceil(Math.random() * 6);
    switch (randNumber) {
      case 1:
        setdiceImage(diceOne);
        break;
      case 2:
        setdiceImage(diceTwo);
        break;
      case 3:
        setdiceImage(diceThree);
        break;
      case 4:
        setdiceImage(diceFour);
        break;
      case 5:
        setdiceImage(diceFive);
        break;
      case 6:
        setdiceImage(diceSix);
        break;
      default:
        setdiceImage(diceOne);
        break;
    }
    RNHapticFeedback.trigger("impactHeavy", options)
  };

  const [bgcolor, setBgcolor] = useState("#000000");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexRange.length)
      color += hexRange.charAt(index)
    }
    setBgcolor(color)
  }

  return (
    <View style={[styles.container,{backgroundColor:bgcolor}]}>
      <Dice imageurl={diceImage}></Dice>
      <Pressable onPress={()=>{
        rollDiceOnTap;
        generateColor;
      }}>
        <Text style={styles.rollDiceBtnText}>Tap to roll</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
