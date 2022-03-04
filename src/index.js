function dec(target) {
    target.prop = "I am the value of the property"
}

@dec
class NameOfTheClass{
}

console.log(NameOfTheClass.prop)