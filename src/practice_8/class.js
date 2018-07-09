const Student = require("../../src/practice_8/student.js");
export default class Class {
  constructor(number) {
    this.number=number;
  }
  getDisplayName(){
    return `Class ${this.number}`;
  }
  equal(klass){
    return this.number===klass.number;
  }
  assignLeader(student){
    if(student.klass.number!=this.number){
      return false;
    }else if(student.klass.number===this.number){
      this.leader=student;
      }
  }
}
