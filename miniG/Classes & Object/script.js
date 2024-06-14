const employee = {
   calcTax () {
       console.log("tax rate is 10%");
   }
}

//if object & prototype have same method, object method will be used
const worker1 = {
    salary : 40000,
    calcTax () {
        console.log("tax rate is 20%");
    } 
}

const worker2 = {
    salary : 55000,
}

const worker3 = {
    salary : 60000,
} 

const worker4 = {
    salary : 70000,
}

worker1.__proto__ = employee;
worker2.__proto__ = employee;
worker3.__proto__ = employee;