/* An Entry Confirmation Loop

We’ve learned to prompt the user for their age, and then confirm that their age has been entered correctly. 
Now we can use a while loop to improve the way this works.

Create a while loop that will continue to execute as long as the user has not entered the correct age. 
Inside the loop, provide a confirmation that the age has been entered correctly:

"You entered <age>. Is this correct?"
If that confirmation statement is correct, then set ageIsCorrect to true and alert the following message:

"Great! Your age is logged as <age>."
Otherwise, the loop should continue to prompt a user to enter their age and assign that value to the userAge variable:

"What's your age, user?"
Code School

  */
var userAge = prompt("Happy Birthday, Sis! How old are you?");
var jokeYoungAge = 19
var jokeOldAge = 85
var birthdayGirl = "Allyson"
var ageIsCorrect = false;
while (ageIsCorrect == false) {
  if ( confirm("You entered " + jokeYoungAge + ". Is that correct?") ) {
    alert ("Great! J/k we know you're really " + userAge + ".")
    ageIsCorrect = true;
  }
  else {
    userAge = prompt("But really how old are you?");
  }
}