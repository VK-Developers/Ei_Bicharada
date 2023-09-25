import { BlurView } from '@react-native-community/blur';

const BlurMe = () => {
    return (
        <BlurView
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
            blurType="light"
            blurAmount={1}
        />
    );
};

export default BlurMe;