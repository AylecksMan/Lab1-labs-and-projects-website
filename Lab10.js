let answer;
let valid = false;

do{
    answer = prompt("What is the total bill amount?");

    if (answer === null) {
        console.log("number cannot be null");
    }
    answer = Number(answer);
    if (isNaN(answer)) {
        console.log("Please enter a numeric amount.");
    } else if (answer <= 0) {
        console.log("Please enter an amount greater than zero.");
    } else {
        console.log(`The bill is $${answer} with a 10% tip of $${answer * 0.1}`);
        document.write(`The bill is $${answer} with a 10% tip of $${answer * 0.1}`);
        valid = true;
    }

} while (!valid);