// From data.js file
var tableData = data;

// Create a variable reference to the table data
tbody = d3.select("tbody");

// Console.log the ufo data from the data.js file
console.log(data);

// Append one table row for each ufoSighting object
// Loop through to console.log the key and value for each ufoSighting object and append the values to 
// each cell (date, city, state, country, shape, duration, and comments)
function tableSearch(data) {
    tbody.text("");
    data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append cells to the row for each value
        var cell = row.append("td");
        // Place the value text in each cell
        cell.text(value);
    });
})};

// Perform the function on our tableData variable
tableSearch(tableData);

// Get references to the button and input field on the page 
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

// Create function to handle a change in the inputField that filters the table by the date typed into the inputField
function tableFilter() {
    d3.event.preventDefault();
    console.log(inputField.property("value"));
    var new_table = tableData.filter(ufoSighting => ufoSighting.datetime === inputField.property("value"));
    tableSearch(new_table);
};

// Create event listeners for the filter table button and the search field 
button.on("click", tableFilter);
inputField.on("change", tableFilter);