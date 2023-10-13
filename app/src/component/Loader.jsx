import React from 'react';
import AnimatedLoader from "react-native-animated-loader";

// https://www.npmjs.com/package/react-native-animated-loader
// https://lottiefiles.com/search?q=loader

function Loader() {
  return (
    <AnimatedLoader
    //   visible={visible}
        visible={true}
        overlayColor="transparent"
        source={require("../../loader.json")}
        animationStyle={{
            width: 200,
            height: 200
        }}
        speed={1}>
    </AnimatedLoader>
  );
}

export default Loader;