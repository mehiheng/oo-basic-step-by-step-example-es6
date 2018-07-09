
import Person from "./person.js";
export default class Worker extends Person {
  introduce(){
    return `${super.basic_introduce()} I am a Worker. I have a job.`;
  }
}
