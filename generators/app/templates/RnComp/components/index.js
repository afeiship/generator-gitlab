import React from 'react';
import PropTypes from 'prop-types';

import { View,Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default class extends React.PureComponent{
  static defaultProps = {
    cssStyles: []
  };

  render(){
    const { cssStyles, ...props } = this.props;
    return (
      <TouchableOpacity {...props}>
        <View style={[styles.splash].concat(cssStyles)}>
          <Text>Hello React Native!</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
