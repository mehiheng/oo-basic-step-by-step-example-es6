import Person from "./person.js";
export default class Teacher extends Person {
    constructor(id,name,age,klasses) {
        super(id,name,age);
        this.klasses=klasses;
    }
    introduce(){
        if(this.klasses === undefined || this.klasses.length === 0){
            return super.basic_introduce()+" I am a Teacher. I teach No Class."
        }else{
            return super.basic_introduce()+" I am a Teacher. I teach Class " +this.klasses.map(x=>x.number).join(", ")+".";
        }
    }
    introduceWith(student){
      for(let klasss of this.klasses){
      if(klasss===student.klass) {
          return super.introduce()+" I am a Teacher. I teach "+student.name+".";
      }else{
          return super.introduce()+" I am a Teacher. I don't teach "+student.name+".";
      }
      }
    }
}

