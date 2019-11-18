import React, { Component } from 'react';
// import {
//     Text,
//     ImageBackground
// } from 'react-native';

// import {
//     View
// } from 'native-base';

import {
    Streak
} from '../components'

import { View, FlameImgBg, Text } from './styling/StreakImageStyles2'
import styled from 'styled-components'
//dont use this one
//import { styles } from './styling/StreakImageStyles'

// const StreakImage = () => {
//     return (
//         // <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <View style={styles.viewContainer}>
//             <ImageBackground
//                 source={require('../assets/images/cbtFlameIcon-sml.png')}
//                 style={styles.flameIconImage}
//             >
//                 <Text
//                     adjustsFontSizeToFit={true}
//                     numberOfLines={1}
//                     style={styles.streakNum}
//                 >
//                     <Streak />
//                 </Text>
//             </ImageBackground>
//         </View>
//     );
// }

const StreakImage = () => {
    return (
        <View>
            <FlameImgBg source={require('../assets/images/cbtFlameIcon-sml.png')}>
                <Text
                    adjustsFontSizeToFit={true}
                    numberOfLines={1}>
                    <Streak />
                </Text>
            </FlameImgBg>
        </View>
    );
}

export default StreakImage;