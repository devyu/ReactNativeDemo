
import React, {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Component,
  Image,
  TouchableHighlight,
} from 'react-native';

import Swiper from 'react-native-swiper';



var sliderImgs = [
	'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
	'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'

];

var Images = [
	'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
	'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

var sliderImgs = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
  'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

// PageControl 组件
class Dot extends Component {
  render() {
    return (
      <View style={[styles.pageControlStyle, styles.dotColor]}></View>
    );
  }
}

class ActiveDot extends Component {
  render() {
    return (
      <View style={[styles.pageControlStyle, styles.activeDotColor]} />
    );
  }
}

// Banner 组件
class Banner extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showButtons={false} autoplay={true} height={80} showsPagination={true} dot={<Dot />} activeDot={<ActiveDot />}>
        <Image style={[styles.slide, ]} source={{uri: sliderImgs[0]}}></Image>
        <Image style={[styles.slide, ]} source={{uri: sliderImgs[1]}}></Image>
        <Image style={[styles.slide, ]} source={{uri: sliderImgs[2]}}></Image>
      </Swiper>
    );
  }
}


// 定义组件, 导出组件(类)，提供给别的组件使用
export default class Navi extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'cyan'}}>

        <Banner />

        {/* 第一行 */}
        <View style={[styles.sub_red, styles.sub_view]}>
          <View style={[styles.content_flex, styles.sub_borderRight, ]}>
            <Text style={[styles.font16, styles.sub_text]}>酒店</Text>
            <Image style={styles.sub_icon_img} source={{uri:BUIcon[0]}}></Image>
          </View>
          <View style={[styles.flex, styles.sub_borderRight, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>海外</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>周边</Text>
            </View>
          </View>

          <View style={[styles.flex, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>团购·特惠</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>客栈·公寓</Text>
            </View>
          </View>
        </View>


        {/* 第二行 */}
        <View style={[styles.sub_blue, styles.sub_view]}>
          <View style={[styles.content_flex, styles.sub_borderRight, ]}>
            <Text style={[styles.font16, styles.sub_text]}>机票</Text>
            <Image style={styles.sub_icon_img} source={{uri:BUIcon[1]}}></Image>
          </View>
          <View style={[styles.flex, styles.sub_borderRight, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>火车票</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>接收机</Text>
            </View>
          </View>

          <View style={[styles.flex, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>汽车票</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>自驾·专车</Text>
            </View>
          </View>
        </View>


        {/* 第三行 */}
        <View style={[styles.sub_green, styles.sub_view]}>
          <View style={[styles.content_flex, styles.sub_borderRight, ]}>
            <Text style={[styles.font16, styles.sub_text]}>旅游</Text>
            <Image style={styles.sub_icon_img} source={{uri:BUIcon[2]}}></Image>
          </View>
          <View style={[styles.flex, styles.sub_borderRight, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>门票·玩乐</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>出境WiFi</Text>
            </View>
          </View>

          <View style={[styles.flex, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>游轮</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>签证</Text>
            </View>
          </View>
        </View>


        {/* 第四行 */}
        <View style={[styles.sub_yellow, styles.sub_view]}>
          <View style={[styles.content_flex, styles.sub_borderRight, ]}>
            <Text style={[styles.font16, styles.sub_text]}>攻略</Text>
            <Image style={styles.sub_icon_img} source={{uri:BUIcon[3]}}></Image>
          </View>
          <View style={[styles.flex, styles.sub_borderRight, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>周末游</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>礼品卡</Text>
            </View>
          </View>

          <View style={[styles.flex, ]}>
            <View style={[styles.content_flex, styles.sub_boderBottom]}>
              <Text style={[styles.font16, ]}>美食·购物</Text>
            </View>
            <View style={[styles.content_flex, ]}>
              <Text style={[styles.font16, ]}>更多</Text>
            </View>
          </View>
        </View>


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create ({
  wrapper: {
    height: 80,
    backgroundColor: 'green',
  },
  slide: {
    height: 80,
    marginTop: 0,
    resizeMode: Image.resizeMode.contain,
  },
  pageControlStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  dotColor: {
    backgroundColor: 'red',
  },
  activeDotColor: {
    backgroundColor: 'cyan',
  },
  sub_blue: {
    backgroundColor: '#3D98FF',
    borderColor:'#3D98FF',
  },
  sub_green: {
    backgroundColor: '#5EBE00',
    borderColor:'#5EBE00',
  },
  sub_yellow: {
    backgroundColor: '#FC9720',
    borderColor:'#FC9720',
  },
  sub_red: {
    backgroundColor: '#FA6778',
    borderColor:'#FA6778',
  },
  sub_view: {
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
  },
  content_flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_borderRight: {
    borderColor: '#ffffff',
    borderRightWidth: 0.5,
  },
  sub_boderBottom: {
    borderColor: '#ffffff',
    borderBottomWidth: 0.5,
  },
  sub_text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font16: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: '900',
  },
  sub_icon_img: {
    marginTop: 10,
    height: 40,
    width: 40,
  },
  flex: {
    flex: 1,
  },

});
