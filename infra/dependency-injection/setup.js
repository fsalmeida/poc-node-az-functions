const { createContainer, asClass, asValue } = require('awilix')
const FooService = require('../../services/fooService')
const FooRepository = require('../../repositories/fooRepository')

const setup = () => {
    const container = createContainer()

    container.register({
        fooService: asClass(FooService),
        fooRepository: asClass(FooRepository),
        mongoConnectionString: asValue('mongodb://localhost:27017')
    })

    return container
}

module.exports = { setup }