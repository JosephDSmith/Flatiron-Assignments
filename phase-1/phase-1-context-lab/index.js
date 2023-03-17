function createEmployeeRecord([first, last, position, pay]) {
    let employeeRecordObj = {
      firstName: first,
      familyName: last,
      title: position,
      payPerHour: pay,
      timeInEvents: [],
      timeOutEvents: [],
}
return employeeRecordObj;
}

function createEmployeeRecords(employeeArray){
    let newArray = []
    for (const employee of employeeArray){
        newArray.push(createEmployeeRecord(employee))
    }
    return newArray
}

function createTimeInEvent(dateStamp){
    //console.log("this is the this object inside of createTimeInEvent: ", this)
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10),
      });
      return this;
}

function createTimeOutEvent(dateStamp){
    //console.log("this is the this object inside of createTimeOutEvent: ", this)
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10),
      });
      return this;
}

function hoursWorkedOnDate(dateStamp){
    let timeIn = this.timeInEvents.find(
        (element) => element.date === dateStamp
      );
      let timeOut = this.timeOutEvents.find(
        (element) => element.date === dateStamp
      );
    
      return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(dateStamp) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateStamp);
    return hoursWorked * parseInt(this.payPerHour);
  }
  
  function findEmployeeByFirstName(srcArray, firstName){
    const employee = srcArray.find((element) => {
      return element.firstName === firstName;
    });
    return employee === undefined ? "undefined" : employee;
  }
  

  function calculatePayroll(employeeArray) {
    let totalPayroll = 0 
    for (const employee of employeeArray){
        let wages = allWagesFor.call(employee)
        totalPayroll += wages
    }
    return totalPayroll;
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

