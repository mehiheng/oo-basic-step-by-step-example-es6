import Person from "./person.js";
import Class from "./class.js";
import Student from "./student.js";

export default class Teacher extends Person {
  constructor(name,age,klass) {
    super(name,age);
    this.klass=klass;
  }
  introduce(){
    if (this.klass) {
      return super.introduce()+" I am a Teacher. I teach "+this.klass.getDisplayName()+".";
    }else{
      return super.introduce()+" I am a Teacher. I teach No Class.";
    }
  }
  introduceWith(student){
    if (this.klass===student.klass) {
      return super.introduce()+" I am a Teacher. I teach "+student.name+".";
    }else {
      return super.introduce()+" I am a Teacher. I don't teach "+student.name+".";
    }
  }
}
