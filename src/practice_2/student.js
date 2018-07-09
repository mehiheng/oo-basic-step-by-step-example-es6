/*
写一个Person类，要有name，age属性，要有一个introduce方法，
introduce方法返回一个字符串形如：

>My name is Tom. I am 21 years old.

再写一个Student类继承Person类，除了name，age属性，还有要有class属性。也有一个introduce方法，
introduce方法返回一个字符串形如：

>I am a Student. I am at Class 2.
*/
import Person from "./person.js";
export default class Student extends Person{
  constructor(name,age,klass){
    super(name,age);
    this.klass=klass;
  }
  introduce(){
    return "I am a Student. I am at Class "+this.klass+".";
  }
}
