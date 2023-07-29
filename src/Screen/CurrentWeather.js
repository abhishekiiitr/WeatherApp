import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RawText from '../Components/RawText';
import Curr_screen_cpm from '../Components/Curr_screen_cmp';
import { weatherType } from '../utilities/weatherType';
const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    title,
    ttemp,
    ttempf,
    highLow,
    highLowrapper,
    quote,
    paraLine,
    container,
    bye,
  } = styles;
  const {
    main: { temp, temp_min, temp_max, feels_like },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
 // console.log(weatherType[weatherCondition]?.message)

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="red"
        />
        <Text style={title}> Today's Weather </Text>
        <Text style={ttemp}>{temp}</Text>
        <Text style={ttempf}> {`Feels Like ${feels_like} !`}</Text>
        <View>
          <Curr_screen_cpm
            msg0={`High : ${temp_max}°C   `}
            msg1={`Low : ${temp_min}°C`}
            containerS={highLowrapper}
            msg0S={highLow}
            msg1S={highLow}
          />
        </View>

        <View>
          <Curr_screen_cpm
            msg0={weather[0]?.description}
            msg1={weatherType[weatherCondition]?.message}
            containerS={{ alignItems: 'center' }}
            msg0S={quote}
            msg1S={paraLine}
          />
        </View>
      </View>

      <View>
        <RawText text={'See You again!'} textS={bye} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  highLowrapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'green',
    fontSize: 20,
  },
  container : {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 0.5,
    textAlign: 'center',
    fontSize: 24,
  },
  quote: {
    color: 'black',
    fontSize: 26,
    textAlign: 'center',
  },
  paraLine: {
    color: 'blue',
    fontSize: 20,
  },
  bye: {
    fontSize: 24,
  },
  ttemp: {
    fontSize: 43,
    textAlign: 'center',
  },
  ttempf: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default CurrentWeather;
