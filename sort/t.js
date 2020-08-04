class MyClass {
  constructor (name = '') {
    this.name = name
  }

  sayname (a) {
    a++
  }

  static create (name) {
    // eslint-disable-next-line new-cap
    name = '12'
  }
}

let a = MyClass.create('liulaifu')
a.sayname()
