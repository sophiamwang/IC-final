var count = 0;
//possibilites contains all the possible combinations of input the user chooses

const possibilities = [{
        type: "medium to low tannin, medium alcohol, medium high acidity, strawberry, cherry flavor",
        combo: {
            grape:"pinot",
            temperature: "moderate",
            soil: "clay"
        }
    },
    {
        type: "medium tannin, medium high alcohol, medium high acidity, wet leave, vegetal flavor",
        combo: {
            grape:"pinot",
            temperature: "cool",
            soil: "stone/gravel"
        }
    },
    {
        type: "high tannin, medium alcohol, medium high acidity, berry fruit, pepper,   menthol, earthy flavor",
        combo: {
            grape:"syrah",
            temperature: "cool",
            soil: "sand"
        }
    },
    {
        type: "high & round tannin, high alcohol, medium acidity, spice, leather and baked fruit flavor",
        combo: {
            grape:"syrah",
            temperature: "warm",
            soil: "sand"
        }
    },
    {
        type: "medium & round tannin, low alcohol, low acidity, jammy flavor",
        combo: {
            grape:"cabernet",
            temperature: "warm",
            soil: "sand"
        }
    },
    {
        type: "high tannin, medium alcohol, medium acidity, ripe dark cherry fruit flavor",
        combo: {
            grape:"cabernet",
            temperature: "warm",
            soil: "clay"
        }
    }];

//list of user input
let userInput = {
    grape: undefined,
    temperature: undefined,
    soil: undefined
};

//search through possibilities untill you find the same combination as the user input
function calculateResult() {
    let result = possibilities.filter(function (element) {
        if (
            //if all 3 inputs match
            element.combo.grape === userInput.grape && element.combo.temperature === userInput.temperature && element.combo.soil === userInput.soil ||

            //if grape and temperature match
            element.combo.grape === userInput.grape && element.combo.temperature === userInput.temperature ||

            //if temperature and soil match
            element.combo.temperature === userInput.temperature && element.combo.soil === userInput.soil ||

            //if grape and soil match
            element.combo.grape === userInput.grape && element.combo.soil === userInput.soil) {

            //return result
            return element;
        }
    });

    let display = document.querySelector(".result");
    let answer = document.querySelector("p");

    //if user input doesn't match any wine type
    if (result.length === 0){
        answer.textContent = "Your choices do not produce a valid wine type";
    }
    //display wine type
    else{
        answer.textContent = "Your wine type is ..." + result[0].type;
    }

    display.appendChild(answer);
    display.style.visibility = "visible";

    //remove the selected class after displaying result
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(function(button){
    	button.classList.remove("selected");
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            //console.log("button text content ", this.textContent);
            let parent = this.parentNode;
            //	console.log("button parent ", this.parentNode);
            userInput[parent.className] = this.value;
            if (button.backgroundColor == "rgba(255, 255, 255, 0.5)") {
                button.backgroundColor = "rgb(0,0,0)"
            }
            this.classList.toggle("selected");
            //check user input
            console.log("user input ", userInput);
        });
    });
});

//change button color when pressed
function changeColor(btn) {
    var category = btn.substr(0,btn.length - 1);
    var buttonId = btn.substr(btn.length - 1);
    console.log(buttonId);
    var property = document.getElementById(btn);
    var other = document.getElementById(category + (buttonId % 3 + 1));
    var other2 = document.getElementById(category + (5 - buttonId - (buttonId % 3)) );
//    console.log((category + ((3 % buttonId) + 1)));
//    console.log(category + ((3 % ((3 % buttonId) + 1)) + 1));
    
    //change clicked buttons' colors
    if (property.style.backgroundColor != "rgba(255, 255, 255, 0.5)") {
        property.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        property.style.borderColor = "rgb(255, 255, 255)";
        other.style.backgroundColor = 'transparent';
        other2.style.backgroundColor = 'transparent';
        other.style.borderColor = 'rgb(255, 255, 255)';
        other.style.borderColor = 'rgb(255, 255, 255)';
    } else {
        other.style.backgroundColor = 'transparent';
        other.style.borderColor = 'rgb(255, 255, 255)';
    }
}
