import { ProxyState } from "../AppState.js";
import { peopleService } from "../Services/PeopleService.js";


//Private
function _draw() {
  let people = ProxyState.people;
  let template = ''
  people.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/` 
  <div className="card-columns people">
      ${template}
  </div>
  `
}

//Public
export default class PeopleController {
  constructor() {
    // REGISTER LISTENERS BEFORE REQUESTING DATA
    ProxyState.on("people", _draw);


    peopleService.getAllPeople()
  }
}
