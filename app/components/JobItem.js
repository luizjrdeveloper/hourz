import React, { Component, PropTypes} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Touchable from './common/Touchable';
import moment from 'moment';
import ptBr from 'moment/locale/pt-br';


/**
 * Componente chamado pelo PointList para renderizar cada ponto batido
 */
class JobItem extends Component {

  _onViewPress() {
    this.context.onViewPress && this.context.onViewPress(this.props.job)
  }

  _onEditPress() {
    this.context.onEditPress && this.context.onEditPress(this.props.job)
  }

  _onDeletePress() {
    this.context.onDeletePress && this.context.onDeletePress(this.props.job)
  }

  /**
   * Renderiza o componente
   * @return {ReactElement}
   */
  render() {

    // recebe estilo definido no props
    let style = this.props.style || {};
    let edited = this.props.job.edited ? '*': '';

    return (
      <View style={[styles.container, ...style]}>

        {/*Nome*/}
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>{this.props.job.name}</Text>
        </View>
        <View style={styles.buttonsGroupWrapper}>

          {/*Botão de visualização*/}
          <Touchable
            onPress={this._onViewPress.bind(this)}
          >
            <View style={styles.button}>
              <Icon name="remove-red-eye" style={styles.icon} />
            </View>
          </Touchable>

          {/*botão de deletar*/}
          <Touchable
            onPress={this._onDeletePress.bind(this)}
          >
            <View style={styles.button}>
              <Icon
                name="close"
                style={[styles.icon, styles.iconDelete]} />
            </View>
          </Touchable>
        </View>

      </View>
    );
  }
}

// Props do componente
JobItem.propTypes = {
  job: PropTypes.object.isRequired
}

JobItem.contextTypes = {
  onEditPress: PropTypes.func,
  onViewPress: PropTypes.func,
  onDeletePress: PropTypes.func
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  icon: {
    fontSize: 20
  },
  fluxIconWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  iconIn: {
    color: 'green'
  },
  iconOut: {
    color: 'red'
  },

  timeWrapper: {
    flex: 5,
    paddingHorizontal: 5
  },
  time: {
    fontSize: 20
  },

  buttonsGroupWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    backgroundColor: 'rgba(170, 180, 182, 0.64)'
  },
  iconDelete: {
    color: 'red'
  }
});

export default JobItem;
