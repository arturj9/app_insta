import { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Lista from './src/Lista';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Artur Jardel',
          descricao: 'Mais um dia de muitos bugs ;)',
          imgPerfil: 'https://arturj9.github.io/img/perfil.jpeg',
          imgPublicacao:
            'https://arturj9.github.io/img/perfil2.jpg',
          likeada: false,
          likers: 0,
        },
        {
          id: '2',
          nome: 'Maria Silva',
          descricao: 'Apenas mais um dia.',
          imgPerfil: 'https://thispersondoesnotexist.com/',
          imgPublicacao:
            'https://arturj9.github.io/img/perfil2.jpg',
          likeada: false,
          likers: 0,
        },
        {
          id: '3',
          nome: 'João Pedro',
          descricao: 'Hoje foi um dia produtivo!',
          imgPerfil: 'https://thispersondoesnotexist.com/',
          imgPublicacao:
            'https://arturj9.github.io/img/perfil2.jpg',
          likeada: false,
          likers: 3,
        },
        {
          id: '4',
          nome: 'Ana Clara',
          descricao: 'A vida é bela!',
          imgPerfil: 'https://thispersondoesnotexist.com/',
          imgPublicacao:
            'https://arturj9.github.io/img/perfil2.jpg',
          likeada: false,
          likers: 11,
        },
        {
          id: '5',
          nome: 'Lucas Oliveira',
          descricao: 'A programação é uma arte!',
          imgPerfil: 'https://thispersondoesnotexist.com/',
          imgPublicacao:
            'https://arturj9.github.io/img/perfil2.jpg',
          likeada: false,
          likers: 32,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image style={styles.logo} source={require('./src/img/logo.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.send} source={require('./src/img/send.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {},
  send: {
    width: 23,
    height: 23,
  },
});

export default App;
