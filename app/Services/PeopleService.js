import { ProxyState } from "../AppState.js";
import Person from "../Models/Person.js";
import { api } from "./AxiosService.js";

class PeopleService {
  // async prev() {
  //   // if provided a full url Axios will request without the baseURL
  //   let res = await api.get(ProxyState.previous)
  //   ProxyState.next = res.data.next
  //   ProxyState.previous = res.data.previous

  //   let people = res.data.results.map(p => new Person(p))
  //   ProxyState.people = people

  // }
  // async next() {
  //   let res = await api.get(ProxyState.next)
  //   ProxyState.next = res.data.next
  //   ProxyState.previous = res.data.previous

  //   let people = res.data.results.map(p => new Person(p))
  //   ProxyState.people = people

  // }


  // NOTE async indicates the function will take an undetermined amount of time, can be waited for or 'fired and forgot'
  async getAllPeople(url = "people") {
    // response from the request, type get, appending 'people' to the baseURL, 
    // await the response and then set the value
    // res is an AXIOS object
    let res = await api.get(url)
    // AXIOS will always put the response in the data property
    console.log(res.data.results)

    // Next and previous are unique to this API 
    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous


    // MAP itterates over the array of results and turns each one into a 'Person' object and returns a new array of Person's
    let people = res.data.results.map(p => new Person(p))
    ProxyState.people = people
  }
}

export const peopleService = new PeopleService();

