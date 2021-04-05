export default class Person {
  // OBJECT DESTRUCTURING MUST USE {} to do this
  // first arugment is an object, pull the specified properties off of it
  constructor({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }) {
    this.name = name
    this.height = height
    this.mass = mass
    this.hairColor = hair_color
    this.skinColor = skin_color
    this.eyeColor = eye_color
    this.birthYear = birth_year
    this.gender = gender
  }

  get Template() {

    return /*html*/`
      <div class="card p-2 value">
          ${this.name}
      </div>
      `
  }
}



/**
 *  {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
        }
 */
