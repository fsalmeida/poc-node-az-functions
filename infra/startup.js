const dependencyInjectionSetup = require('./dependency-injection/setup')

const bootstrap = () => {
    const dependencyInjectionContainer = dependencyInjectionSetup.setup()

    return {
        dependencyInjectionContainer
    }
}

module.exports = { bootstrap }