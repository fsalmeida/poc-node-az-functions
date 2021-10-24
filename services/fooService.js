class FooService {
    constructor({ fooRepository, mongoConnectionString }) {
        console.log('mongoConnectionString: ', mongoConnectionString)
        this.fooRepository = fooRepository;
    }
    printFoo() {
        const foo = this.fooRepository.getFoo()
        console.log('Foo:', foo)
    }
}

module.exports = FooService;