// Function to create a single employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create multiple employee records
function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

// Function to record time in
function createTimeInEvent(timestamp) {
    let [date, hour] = timestamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}

// Function to record time out
function createTimeOutEvent(timestamp) {
    let [date, hour] = timestamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(e => e.date === date).hour;
    let timeOut = this.timeOutEvents.find(e => e.date === date).hour;
    return (timeOut - timeIn) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// Function to calculate all wages for an employee
function allWagesFor() {
    return this.timeInEvents.reduce((total, e) => {
        return total + wagesEarnedOnDate.call(this, e.date);
    }, 0);
}

// Function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

// Function to calculate payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
        return total + allWagesFor.call(record);
    }, 0);
}
