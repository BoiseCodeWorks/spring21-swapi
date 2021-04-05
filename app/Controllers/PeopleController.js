import { ProxyState } from "../AppState.js";
import { peopleService } from "../Services/PeopleService.js";


//Private
function _draw() {
  let people = ProxyState.people;
  let template = ''
  people.forEach(v => template += v.Template)
  // NOTE previous and next are sent from the api and set by us in the Proxystate, we will disable if they dont exist
  document.getElementById("app").innerHTML = ` 
  <div className="card-columns people">
  <button ${ProxyState.previous ? '' : 'disabled="true"'} class="btn btn-success" onclick="app.peopleController.getAll('${ProxyState.previous}')" >Previous</button>
  <button ${ProxyState.next ? '' : 'disabled="true"'} class="btn btn-info" onclick="app.peopleController.getAll('${ProxyState.next}')" >Next</button>
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


  getAll(url) {
    peopleService.getAllPeople(url)
  }

  // next() {
  //   peopleService.next()
  // }

  // prev() {
  //   peopleService.prev()
  // }
}
