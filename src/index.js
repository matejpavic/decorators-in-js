function dec(target) {
    target.prop = "I am the value of the prop"
}

@dec
class NameOfTheClass{
}

console.log(NameOfTheClass.prop)