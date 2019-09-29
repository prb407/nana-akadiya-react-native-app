const bottomAnimation = (index, position, height) => {
    const sceneRange = [index - 1, index]
    const outputRange = [height, 0]
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange
    })

    return {
        transform: [{
            translateY: transition
        }]
    }
}

const transitionConfig = () => {
    return {
        screenInterpolator: sceneProps => {
            const { position, scene } = sceneProps
            const index = scene.index
            const height = sceneProps.layout.initHeight
            return bottomAnimation(index, position, height)
        }
    }
}
export default transitionConfig