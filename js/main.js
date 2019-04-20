console.log("Election 2020");


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function render() {
    console.log('--------rendering!')
    fetch("./data/floridadata.json")
        .then(data => data.json()) //converts file to json 
    	.then(data => {
    		console.log("Got the data!");
    		console.log(data);
            let chart = document.querySelector(".Container-graph");
            // chart.innerHTML = '';
            for (datum of data) {
                let year = datum["Year"]; //grabs the year
                let party = datum["Party"]; //grabs the party
                let number = datum["Number"]; //grabs the number
                let height = ((number)/5000000)*100; //get the % of height
                console.log(number);
                console.log(typeof number);
                console.log(height);
                let bar = document.createElement("div"); // Create a new div that contains this information
                bar.classList.add("bar"); //div assigned the class bar
                bar.style.height = height + "%";  //determines height via variable height
                chart.appendChild(bar); //add the div to the page
                console.log("bars are working");
                year = datum["Year"];

            }
    	});
}

function recordItem() {
    console.log('-------- recordItem');
    fetch("./data/floridadata.json")
        .then(data => data.json()) //converts file to json 
        .then(data => {

    // Fetch the inputs from the page (and console.log for debugging)
        let partySelect = document.querySelector('.dropdown-content');
        let yearSelect = document.querySelector('.dropdown-content2');
        console.log('Inputs:', partySelect, yearSelect);

    //     // Get the value of the inputs (and console.log for debugging)
        let party = partySelect.value;
        let year = yearSelect.value;
        console.log('Values:', party, year);

        if (party === '') {
            return; // End the function, prevent an empty input
        }

        // Push the new info onto the array & rerender
        let pair = [party, year];
        data.push(pair);
        render();

        partySelect.value = '';
        yearSelect.value = '';
    });
}

render();

