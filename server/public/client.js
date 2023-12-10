let employeeData = [];

function handleSubmit(event){  //Create submission handler
    event.preventDefault();    //Prevent refresh
    employeeData.push({
        firstName: document.querySelector('#fName').value,
        lastName: document.querySelector('#lName').value,
        employeeID: document.querySelector('#empID').value,
        jobTitlee: document.querySelector('#jobTitle').value,
        salary: document.querySelector('#salary').value,
    });
    console.log(employeeData);
};

