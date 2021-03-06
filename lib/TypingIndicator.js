import React, { useState } from 'react';
import { Animated } from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import { useUpdateLayoutEffect } from './hooks/useUpdateLayoutEffect';
const TypingIndicator = (props) => {
    const [yCoords, setYCoords] = useState(new Animated.Value(600));
    const [heightScale, setHeightScale] = useState(new Animated.Value(0));
    const [marginScale, setmarginScale] = useState(new Animated.Value(0));
    // on isTyping fire side effect
    useUpdateLayoutEffect(() => {
        if (props.isTyping) {
            slideIn();
        }
        else {
            slideOut();
        }
    }, [props.isTyping]);
    // side effect
    const slideIn = () => {
        Animated.parallel([
            Animated.spring(yCoords, {
                toValue: 0,
            }),
            Animated.timing(heightScale, {
                toValue: 35,
                duration: 300,
            }),
            Animated.timing(marginScale, {
                toValue: 8,
                duration: 300,
            }),
        ]).start();
    };
    // side effect
    const slideOut = () => {
        Animated.parallel([
            Animated.spring(yCoords, {
                toValue: 600,
            }),
            Animated.timing(heightScale, {
                toValue: 0,
                duration: 300,
            }),
            Animated.timing(marginScale, {
                toValue: 0,
                duration: 300,
            }),
        ]).start();
    };
    return (<Animated.View style={[
        {
            transform: [
                {
                    translateY: yCoords,
                },
            ],
            height: heightScale,
            marginLeft: 8,
            marginBottom: marginScale,
            width: 45,
            borderRadius: 15,
            backgroundColor: '#f0f0f0',
        },
    ]}>
      <TypingAnimation style={{ marginLeft: 6, marginTop: 7.2 }} dotRadius={4} dotMargin={5.5} dotColor={'rgba(0, 0, 0, 0.38)'}/>
    </Animated.View>);
};
export default TypingIndicator;
//# sourceMappingURL=TypingIndicator.js.map
