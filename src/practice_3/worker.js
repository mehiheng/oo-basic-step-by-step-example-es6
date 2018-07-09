
import Student from "./student.js";
import Person from "./person.js";
export default class Worker extends Person {
  introduce(){
    return "I am a Worker. I have a job.";
  }
}
