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
    salaryCalc()
    const form = document.querySelector('.addEmployee'); //Collect form location
    form.reset();  //Clears the form

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

function removeMe(event){      //Creats delete button functionality for rows
    event.target.parentElement.parentElement.remove();
};

function salaryCalc(){          //Creates salary calculator
    const budget = document.querySelector('.salaryBudget');
    const warning = document.querySelector('#newEmployeeForm');
    let monthlySal = 0;
    let maxSal = 20000;
    for (let employee of employeeData){
        monthlySal += Math.round(employee.salary/12);
    };
    if(monthlySal < maxSal){
        budget.innerHTML = `<p>Total Monthly Budget: ${monthlySal}</p>`
    } else {
        budget.innerHTML = `<p>Total Monthly Budget: ${monthlySal}</p>`
        warning.innerHTML += `<h3 class='warning'>Salary Over Budget!</h3>`
    }
    

};