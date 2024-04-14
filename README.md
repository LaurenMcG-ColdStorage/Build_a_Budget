# Weekend Challenge: Javascript Salary/Budget Calculator

For this week, we've been tasked with building a salary and budget calculator application.

## Description

Duration: 1 Week

For this application, we were tasked with ingesting a collection of employee data and using that data to perform a variety of functions. Within the application, we take in the following information:

- First Name
- Last Name
- Employee ID
- Job Title
- Annual Salary

This data is entered via a web form and stored within an array of employee records. We then use this data to update the following:

- Table of existing employees
- Monthly salary budget

Our Table is solved by utilizing a modular function. We first clear the table entirely every time the function is run. Then we render data in the DOM by looping through the employee array.

Our salary budget is calculated every time the table is generated. This is done by looping through the employee array, pulling salary information, converting it to a monthly value, and then adding it to a total which we have named monthlySal.

Once we have the total of salaries, we compare it to our maximum budget. This changes the styling in our footer, and even adds a line within our body to clearly show that we are over budget.

Finally, the employee rows have been given a button that allows for removal. This will reflect in the array, table, and salary calculation.

Everything on our form was functional without styling, but in the spirit of making a proper web application I've added styling to make it more pleasant to look at.

Everything works, and seems to work pretty well. I may add additional function or flair at a later date, if time permits.

## Requirements:

This application takes in five data points that are previously mentioned.

On form submission:
- New employee row is populated in the table
- Salary budget is updated
- Form clears

Styling is added when budget exceeds maximum, to clearly denote overage.

Each employee row contains a remove button that deletes the employee from the table. This also recalculates the budget.
