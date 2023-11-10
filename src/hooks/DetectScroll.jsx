const DetectScroll = (event) => {
    const currentY = event.nativeEvent.contentOffset.y;

    if (currentY > scrollY) {
        console.log('Rolando para baixo');
    } else if (currentY < scrollY) {
        console.log('Rolando para cima');
    }

    setScrollY(currentY);
};

export default DetectScroll;