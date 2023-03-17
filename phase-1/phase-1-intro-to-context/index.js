function createEmployeeRecord([first, last, position, pay]) {
  let employeeRecordObj = {
    firstName: first,
    familyName: last,
    title: position,
    payPerHour: pay,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return employeeRecordObj;
}

function createEmployeeRecords(arrays) {
  return arrays.map((array) => createEmployeeRecord(array));
}

function createTimeInEvent(employeeRecord, workStamp) {
  employeeRecord["timeInEvents"].push({
    type: "TimeIn",
    hour: parseInt(workStamp.slice(11, 15)),
    date: workStamp.slice(0, 10),
  });
  return employeeRecord;
}

//string.slice(11, 15) for hour
//string.slice(0, 10) for date

function createTimeOutEvent(employeeRecord, workStamp) {
  employeeRecord["timeOutEvents"].push({
    type: "TimeOut",
    hour: parseInt(workStamp.slice(11, 15)),
    date: workStamp.slice(0, 10),
  });
  return employeeRecord;
}

//if timeIn date matches timeOut date, return outTime - InTime/100

function hoursWorkedOnDate(employeeRecord, formDate) {
  let timeIn = employeeRecord.timeInEvents.find(
    (element) => element.date === formDate
  );
  let timeOut = employeeRecord.timeOutEvents.find(
    (element) => element.date === formDate
  );

  return (timeOut.hour - timeIn.hour) / 100;
}
function wagesEarnedOnDate(employeeRecord, formDate) {
  let hoursWorked = hoursWorkedOnDate(employeeRecord, formDate);
  return hoursWorked * parseInt(employeeRecord.payPerHour);
}

function allWagesFor(employeeRecord) {
  let wages = 0;
  let datesOfRecord = employeeRecord.timeInEvents.map((object) => object.date);
  for (const date of datesOfRecord) {
    wages += wagesEarnedOnDate(employeeRecord, date);
  }
  return wages;
}

function calculatePayroll(employeeArray) {
    let totalPayroll = 0 
    for (const employee of employeeArray){
        let wages = allWagesFor(employee)
        totalPayroll += wages
    }
    return totalPayroll;
}
