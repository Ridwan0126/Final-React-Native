import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider3, Slider4, Slider5, Slider8, Slider9} from '../../../assets';
import {SliderBox} from 'react-native-image-slider-box';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Slider3, Slider4, Slider5, Slider8, Slider9],
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
  container: {},
  slider: {
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    width: responsiveWidth(410),
  },
  dotStyle: {
    width: 10,
    height: 5,
    borderRadius: 5,
  },
});
