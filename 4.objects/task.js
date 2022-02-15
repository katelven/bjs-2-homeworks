function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
const studentOne = new Student('Екатерина','женский','25');
const studentTwo = new Student('Владимир','мужской','30');

Student.prototype.setSubject = function (subjectName) {
  this.subject=subjectName;
}
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [mark];
    } else {
    this.marks.push(mark);
    }
    
}
Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    this.marks = marks;
    } else {
    this.marks = this.marks.concat(...marks);
    }
}
Student.prototype.getAverage = function () {
 let sum = 0;
 for(i=0; i<this.marks.length; i++) {
  sum += this.marks[i];
}
this.average = sum/this.marks.length;
return this.average;
  };
Student.prototype.exclude = function(reason) {
    delete this.marks;
    delete this.subject;
    this.excluded=reason;
    }