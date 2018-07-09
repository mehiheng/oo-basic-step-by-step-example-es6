export default class Class {
  constructor(number) {
    this.number=number;
  }
  getDisplayName(){
    return "Class "+this.number;
  }
  assignLeader(student){
    this.leader=student;
  }
}
