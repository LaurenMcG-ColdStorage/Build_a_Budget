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
};

function buildTable(){
    const empTable = document.querySelector('#empData'); //Finds table to add data
    let index = 0;
    empTable.innerHTML = ''                   //Clears the existing table
    for (let employee of employeeData){       //Loops through employeeData
        empTable.innerHTML +=
        `<tr id='tableElement'>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.employeeID}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.salary}</td>
            <td><button id='deleteButton' onclick="removeMe(${index})">Remove</button></td>
        </tr>`
        index++;
    };
    const form = document.querySelector('.addEmployee'); //Collect form location
    form.reset();  //Clears the form
};

function removeMe(index){      //Creates delete button functionality for rows
    employeeData.splice(index, 1);
    buildTable();
    salaryCalc();
};

function salaryCalc(){          //Creates salary calculator
    const budget = document.querySelector('.salaryBudget');
    const warning = document.querySelector('.warning');
    let monthlySal = 0;
    let maxSal = 20000;
    for (let employee of employeeData){
        monthlySal += Math.round(employee.salary/12);
    };
    if(monthlySal < maxSal){
        budget.innerHTML = `<p class='over-budget'>Total Monthly Budget: ${monthlySal}</p>`
        warning.innerHTML = `<div class='over-budget'></div>`
    } else {
        budget.innerHTML = `<p class='over-budget'>Total Monthly Budget: ${monthlySal}</p>`
        warning.innerHTML = `<div class='over-budget''><p>Salary Over Budget!</p></div>`
    };
    

};