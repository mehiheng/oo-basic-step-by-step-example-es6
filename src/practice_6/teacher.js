
import Person from "./person.js";
export default class Teacher extends Person {
  constructor(name,age,klass) {
    super(name,age);
    this.klass=klass;
  }
  introduce(){
    let classString=(this.klass===undefined
      ?"No Class"
      :`Class ${this.klass}`);
    return `${super.introduce()} I am a Teacher. I teach ${classString}.`;
  }
}
