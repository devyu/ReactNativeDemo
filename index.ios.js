/**
 * 练习 Flex ,实现携程app 首页布局
 */

// 引入组件
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import Navi from './pages/Navi.js';


class Home extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title: '首页',
          component: Navi, // 当前路由下显示的组件
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// 注册应用
AppRegistry.registerComponent('RN', () => Home);
