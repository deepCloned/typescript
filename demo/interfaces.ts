interface Person {
  readonly name: string,
  age: number
}

let monika: Person = {
  name: 'monika',
  age: 18
}
monika.name = 'tom'