import React, {useState} from 'react';
import {PropsWithChildren} from 'react';
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

const Dice = ({imageurl}: DiceProps) => {
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
  };
  return (
    <View style={styles.container}>
      <Dice imageurl={diceImage}></Dice>
      <Pressable onPress={rollDiceOnTap}>
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
    backgroundColor: '#FFF2F2',
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
