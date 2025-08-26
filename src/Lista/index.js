import { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
    this.mostraLikes = this.mostraLikes.bind(this);
    this.like = this.like.bind(this);
    this.carregaIcone = this.carregaIcone.bind(this);
  }

  carregaIcone(likeada) {
    return likeada
      ? require('../img/likeada.png')
      : require('../img/like.png');
  }

  like() {
    let feed = this.state.feed;
    feed.likeada = !feed.likeada;

    if (feed.likeada) {
      feed.likers++;
    } else {
      feed.likers--;
    }

    this.setState({ feed });
  }

  mostraLikes(likers) {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            style={styles.fotoPerfil}
            source={{ uri: this.state.feed.imgPerfil }}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.fotoPublicacao}
          source={{ uri: this.state.feed.imgPublicacao }}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={
                this.carregaIcone(this.state.feed.likeada)
              }
              style={styles.iconeLike}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../img/send.png')}
              style={styles.iconeSend}
            />
          </TouchableOpacity>
        </View>
        {this.mostraLikes(this.state.feed.likers)}
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
    paddingLeft: 5,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center',
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike: {
    width: 33,
    height: 33,
  },
  iconeSend: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 5,
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Lista;
