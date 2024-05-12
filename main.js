function checkResult() {

    let studentName = prompt("Enter your full name in Camal Case:");
    let result = document.getElementById("result");
    let passedMessage = `<h3>Congratulations</h3> you have passed! the Quiz challenge`;
    let failedMessage = `You have failed in Quizz challenge, Best of luck next time`
    let totalMarks = 100;
    let marks;

    if (studentName === 'Ayesha Iqbal') {
        marks = 55
        result.innerHTML = `<p><h1>${studentName}🏅 </h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
        result.style.color = "yellow"

    } else if(studentName === "Ayesha Sikandar"){
        marks = 57
        result.innerHTML = `<p> <h1>${studentName}🏅</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Ahmed Baloch"){
        marks = 61
        result.innerHTML = `<p> <h1>${studentName}🏅</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Alishba Majeed"){
        marks = 68
        
        document.getElementsByClassName("confetti-button")[0].addEventListener("click", ()=>{
            confetti()
        })
        result.innerHTML = `<p> <h1>${studentName}🥇 </h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
        showBtn.style.display = "block"
    }
    else if(studentName === "Ehsan Khan"){
        marks = 34
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Fareeha Khurram"){
        marks = 33
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Hassan Rafay"){
        marks = 53
        result.innerHTML = `<p> <h1>${studentName}🏅 </h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Iqra Naz"){
        marks = 66
        document.getElementsByClassName("confetti-button")[0].addEventListener("click", ()=>{
            confetti()
        })
        result.innerHTML = `<p> <h1>${studentName}🥈 </h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Madiha Rashid"){
        marks = 62
        result.innerHTML = `<p> <h1>${studentName}🏅</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Manahil Majeed"){
        marks = 66
        document.getElementsByClassName("confetti-button")[0].addEventListener("click", ()=>{
            confetti()
        })
        result.innerHTML = `<p> <h1>${studentName}🥈 </h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Muneeb Ahmed"){
        marks = 63
        result.innerHTML = `<p> <h1>${studentName}🥉 </h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Muhammad Usman Khan"){
        marks = 62
        result.innerHTML = `<p> <h1>${studentName}🏅</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Taha Siddiqui"){
        marks = 31
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Anas Raza"){
        marks = 48
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Sania Sabir"){
        marks = 47
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Shahmeer Ali"){
        marks = 62
        result.innerHTML = `<p> <h1>${studentName}🏅</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Sameer Ghulam Rasool"){
        marks = 54
        result.innerHTML = `<p> <h1>${studentName}🏅</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }
    else if(studentName === "Shahzad Jutt"){
        marks = 30
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${passedMessage}</p>`;
    }

    else if(studentName === "Ayan Sheikh"){
        marks = 11
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Areeba Wasi"){
        marks = 9
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Erum Javed"){
        marks = 5
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Hamid Ali"){
        marks = 7
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Rashid"){
        marks = 7
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Roohullah"){
        marks = 7
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Faraz Saleem"){
        marks = 20
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Hassan"){
        marks = 24
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Kashif Ali"){
        marks = 25
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Maheen Qasim"){
        marks = 21
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Uzma Khan"){
        marks = 19
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Zubair Sheikh"){
        marks = 5
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Zehra"){
        marks = 29
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Chaudary Tafseer"){
        marks = 28
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Random Flower"){
        marks = 12
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Muhammad Ali"){
        marks = 19
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Shah hussain"){
        marks = 11
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Muzammil"){
        marks = 16
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Qirat"){
        marks = 5
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Muhammd Faheem"){
        marks = 6
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Muhammd Usman"){
        marks = 20
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Asad"){
        marks = 18
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Syed Talha"){
        marks = 9
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Ishu"){
        marks = 16
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Manzoor Hassan"){
        marks = 5
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Talha Alam"){
        marks = 10
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }
    else if(studentName === "Haseeb"){
        marks = 5
        result.innerHTML = `<p> <h1>${studentName}</h1> You Got ${marks} marks out of ${totalMarks}, ${failedMessage}</p>`;
        result.style.color = "red"
    }

    // else part
     else {
       if (studentName) {
        result.innerHTML =  `<p>${studentName} You have not Prticipated in quiz challenge </p>`;
        result.style.color = "cyan"
       } else {
        result.innerHTML =  `<p>Please enter a name!!!</p>`;
        result.style.color = "orange"
       }
    }
}
