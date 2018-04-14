var count = 0;
//possibilites contains all the possible combinations of input the user chooses
// "cool"
// "warm"
// "stone/gravel"
// "sand"
// "continental"
// "mediterranean"
const possibilities = [{
        type: "A",
        combo: {
            temperature: "cool",
            soil: "stone/gravel",
            climate: "continental"
        }
    },
    {
        type: "B",
        combo: {
            temperature: "cool",
            soil: "stone/gravel",
            climate: "mediterranean"
        }
    },
    {
        type: "C",
        combo: {
            temperature: "cool",
            soil: "sand",
            climate: "continental"
        }
    },
    {
        type: "D",
        combo: {
            temperature: "cool",
            soil: "sand",
            climate: "mediterranean"
        }
    },
    {
        type: "E",
        combo: {
            temperature: "warm",
            soil: "stone/gravel",
            climate: "continental"
        }
    },
    {
        type: "F",
        combo: {
            temperature: "warm",
            soil: "stone/gravel",
            climate: "mediterranean"
        }
    },
    {
        type: "G",
        combo: {
            temperature: "warm",
            soil: "sand",
            climate: "continental"
        }
    },
    {
        type: "H",
        combo: {
            temperature: "warm",
            soil: "sand",
            climate: "mediterranean"
        }
    }];


let userInput = {
    temperature: undefined,
    soil: undefined,
    climate: undefined
};
//search through possibilities untill you find the same combination as the user input
//POTENTIAL ISSUE: what if user does not click one button from each category?

function calculateResult(){
	//first make sure that the user clicked 3 options
	if (userInput.temperature && userInput.soil && userInput.climate){
		let result = possibilities.filter(function(element) {
									if (element.combo.temperature === userInput.temperature && element.combo.soil === userInput.soil && element.combo.climate === userInput.climate){
										return element;
									}
								});
		console.log("result type ", result[0].type);
		let display = document.querySelector(".result");
		let answer = document.createElement("p");
		answer.textContent = "Your wine type is ..." + result[0].type;
		display.appendChild(answer);
		display.style.visibility = "visible";
	}
	else{
		console.log("user did not select each variable");
	}
}

function calculateResult() {
    let result = possibilities.filter(function (element) {
        if (element.combo.temperature === userInput.temperature && element.combo.soil === userInput.soil && element.combo.climate === userInput.climate) {
            return element;
        }
    });
    console.log("result type ", result[0].type);
    let display = document.querySelector(".result");
    let answer = document.createElement("p");
    answer.textContent = "Your wine type is ..." + result[0].type;
    display.appendChild(answer);
    display.style.visibility = "visible";

}

document.addEventListener("DOMContentLoaded", function (event) {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            //console.log("button text content ", this.textContent);
            let parent = this.parentNode;
            //	console.log("button parent ", this.parentNode);
            userInput[parent.className] = this.textContent;
            if (button.backgroundColor == "rgba(255, 255, 255, 0.5)") {
                button.backgroundColor = "rgb(0,0,0)"
            }

            //console.log("user input ", userInput);

        });
    });
});

function changeColor(btn) {
    var category = btn.substr(0,btn.length - 1);
    var buttonId = btn.substr(btn.length - 1);
    var property = document.getElementById(btn);
    var other = document.getElementById(category + (buttonId % 2 + 1));
    if (property.style.backgroundColor != "rgba(255, 255, 255, 0.5)") {
        property.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        other.style.backgroundColor = 'transparent';
    } else {
        other.style.backgroundColor = 'transparent';
    }
}

