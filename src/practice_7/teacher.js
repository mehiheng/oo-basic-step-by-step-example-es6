import Person from "./person.js";
import Class from "./class.js";
import Student from "./student.js";

export default class Teacher extends Person {
  constructor(name,age,klass) {
    super(name,age);
    this.klass=klass;
  }

  introduce(){
    let classNum="No Class";
    if (this.klass) {
      classNum=this.klass.getDisplayName();
    }
    return super.introduce()+" I am a Teacher. I teach "+classNum+".";
  }

  introduceWith(student){
    let isTeach="teach";
    if (this.klass!==student.klass) {
      isTeach="don't teach";
    }
    return super.introduce()+" I am a Teacher. I "+isTeach+" "+student.name+".";
  }

}
