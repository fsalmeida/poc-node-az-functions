const startup = require('../infra/startup')

const { dependencyInjectionContainer } = startup.bootstrap()

module.exports = async function (context, mySbMsg) {
    const fooService = dependencyInjectionContainer.resolve('fooService')
    fooService.printFoo()

    console.log("Fim da execução da function!")
};