import { ProxyState } from "../AppState.js";
import Person from "../Models/Person.js";
import { api } from "./AxiosService.js";

class PeopleService {
  // NOTE async indicates the function will take an undetermined amount of time, can be waited for or 'fired and forgot'
  async getAllPeople() {
    // response from the request, type get, appending 'people' to the baseURL, 
    // await the response and then set the value
    // res is an AXIOS object
    let res = await api.get('people')
    // AXIOS will always put the response in the data property
    console.log(res.data.results)

    // MAP itterates over the array of results and turns each one into a 'Person' object and returns a new array of Person's
    debugger
    let data = res.data.results.map(p => new Person(p))
    ProxyState.people = data
  }
}

export const peopleService = new PeopleService();

