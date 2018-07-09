const Student = require("../../src/practice_10/student.js");
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
            console.log("It is not one of us.");
            return false;
        }else if(student.klass.number===this.number){
            this.leader=student;
        }
    }
    appendMember(student){
        student.klass=this;

    }
}
