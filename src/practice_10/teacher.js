import Person from "./person.js";
export default class Teacher extends Person {
    constructor(id,name,age,klasses) {
        super(id,name,age);
        this.klasses=klasses;
    }
    introduce(klasses){
        let output="";
        for (let klass of klasses){
            ouput+=(klass.number);
        }
        if(klasses===undefined){
            return super.introduceWith()+" I am a Teacher. I teach Class "+output+"."
        }else{
            return super.introduceWith()+" I am a Teacher. I teach No Class."
        }
    }
    introduceWith(student){
        let isTeach=(this.klass.equal(student.klass)
            ?"teach"
            :"don't teach");
        return `${super.introduce()} I am a Teacher. I ${isTeach} ${student.name}.`;

    }
}

