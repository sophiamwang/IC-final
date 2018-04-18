var count = 0;
//possibilites contains all the possible combinations of input the user chooses

const possibilities = [{
        type: "medium to low tannin, medium alcohol, medium high acidity, strawberry, cherry flavor",
        combo: {
            grape:"pinot",
            temperature: "moderate",
            soil: "clay",
            sun:"notalot",
            rain:"toomuch",
        }
    },
    {
        type: "medium tannin, medium high alcohol, medium high acidity, wet leave, vegetal flavor",
        combo: {
            grape:"pinot",
            temperature: "cool",
            soil: "stone/gravel",
            sun:"sufficient",
            rain:"sufficient",
        }
    },
    {
        type: "high tannin, medium alcohol, medium high acidity, berry fruit, pepper,   menthol, earthy flavor",
        combo: {
            grape:"syrah",
            temperature: "cool",
            soil: "sand",
            sun:"sufficient",
            rain:"notalot",
        }
    },
    {
        type: "high & round tannin, high alcohol, medium acidity, spice, leather and baked fruit flavor",
        combo: {
            grape:"syrah",
            temperature: "warm",
            soil: "sand",
            sun:"alot",
            rain:"sufficient",
        }
    },
    {
        type: "medium & round tannin, low alcohol, low acidity, jammy flavor",
        combo: {
            grape:"cabernet",
            temperature: "warm",
            soil: "sand",
            sun:"alot",
            rain:"sufficient",
        }
    },
    {
        type: "high tannin, medium alcohol, medium acidity, ripe dark cherry fruit flavor",
        combo: {
            grape:"cabernet",
            temperature: "warm",
            soil: "clay",
            sun:"alot",
            rain:"toomuch",
        }
    },
    
    }];


let userInput = {
    grape: undefined,
    temperature: undefined,
    soil: undefined,
    sun: undefined,
    rain: undefined
};
//search through possibilities untill you find the same combination as the user input
//POTENTIAL ISSUE: what if user does not click one button from each category?

function calculateResult(){
	//first make sure that the user clicked 3 options
	if (userInput.grape && userInput.temperature && userInput.soil && userInput.sun && userInput.rain){
		let result = possibilities.filter(function(element) {
									if (element.combo.grape === userInput.grape && element.combo.temperature === userInput.temperature && element.combo.soil === userInput.soil && element.combo.sun === userInput.sun && element.combo.rain === userInput.rain  ){
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
        if (element.combo.grape === userInput.grape && element.combo.temperature === userInput.temperature && element.combo.soil === userInput.soil && element.combo.sun === userInput.sun && element.combo.rain === userInput.rain) {
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

