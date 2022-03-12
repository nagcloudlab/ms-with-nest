function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`);
    constructor.prototype.testProperty = "testProperty_value";
}

@classConstructorDec
class ClassWithConstructor {
    constructor(id: number) { }
}

let classInstance = new ClassWithConstructor(1);

console.log(`classInstance.testProperty = 
    ${(<any>classInstance).testProperty}`);