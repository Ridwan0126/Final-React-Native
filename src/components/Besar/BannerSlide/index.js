import React, {Component} from 'react';
import {Slider1, Slider2} from '../../../assets';
import {Text, StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Slider1, Slider2],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={responsiveHeight(132)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotStyle}
          dotColor={colors.primary}
          imageLoadingColor={colors.primary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: -5,
  },
  slider: {
    // borderRadius: 10,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    width: responsiveWidth(350),
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
