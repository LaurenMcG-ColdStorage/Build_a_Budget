let employeeData = [];         //Establish employee array

function handleSubmit(event){  //Create submission handler
    event.preventDefault();    //Prevent refresh
    employeeData.push({        //Ingest new employee data
        firstName: document.querySelector('#fName').value,
        lastName: document.querySelector('#lName').value,
        employeeID: document.querySelector('#empID').value,
        jobTitle: document.querySelector('#jobTitle').value,
        salary: document.querySelector('#salary').value,
    });
    console.log(employeeData);  //Validate ingested data
    buildTable()
};

function buildTable(){
    const empTable = document.querySelector('#empData'); //Finds table to add data
    empTable.innerHTML = ''                   //Clears the existing table
    for (let employee of employeeData){       //Loops through employeeData
        empTable.innerHTML +=
        `<tr id='tableElement'>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.employeeID}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.salary}</td>
            <td><button id='deleteButton' onclick='removeMe(event)'>Remove</button></td>
        </tr>`
    };
}
