import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
// import ClassComponenet from './Components/ClassComponenet';
// import FunctionComponent from './Components/FunctionComponent';
// import FlatList from './Components/FlatList';
import { moviesData } from './data'
import Movies from './Components/Movies';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor='auto' /> */}
      {/* <ClassComponenet name="props" /> */}
      {/* <FunctionComponent name="props" /> */}
      {/* <FlatList /> */}
      <Text style={{ fontSize: 20, color: "gray" }}>Latest Movies</Text>
      <ScrollView style={{ width: "100%" }}>
        {
          moviesData.map((movie) => <Movies {...movie} key={movie.imdbID} />)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'end',
    padding: 25,
    margin: 5
  },
});
