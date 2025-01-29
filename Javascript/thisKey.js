const student = {
    name:'ravi',
    age:23,
    course:'Engineering',
    math: 80,
    eng: 70,
    phy: 90,
    getAvg(){
        console.log(this);
        let avg =(this.eng +this.math +this.phy)/3;
        // console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);

    }
}
// This Keyword: "this" keyword refers to an objects that is executing the current piece of code.