function checkResult() {

    let studentName = prompt("Enter your full name:");
    
    if (studentName === 'Shehzad') {
        
        let resultMessage = "Congratulations, you have passed! the Quiz challenge";
        let marks = 100;
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = `<p><h1>${studentName}</h1> You Got ${marks} marks. ${resultMessage}</p>`;


    } else if(studentName === "Alishba Majeed"){

        let resultMessage = "Congratulations, you have passed! the Quiz challenge";
        let marks = 100;
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks. ${resultMessage}</p>`;
        // resultElement.style.color = "yellow"
         
    }


    // else part
     else {
       if (studentName) {
        let notPart = document.getElementById("result");
        notPart.innerHTML =  `<p>${studentName} You have not Prticipated in quiz challenge </p>`;
        notPart.style.color = "cyan"
       } else {
        let noName = document.getElementById("result");
        noName.innerHTML =  `<p>Please enter a name!!!</p>`;
        noName.style.color = "orange"

       }
    }
}
