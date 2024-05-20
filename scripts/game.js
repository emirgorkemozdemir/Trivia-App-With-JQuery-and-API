const my_image = $("#myimage");
const my_text = $("#mytext");
const c1 = $("#c1");
const c2 = $("#c2");
const c3 = $("#c3");
const c4 = $("#c4");

let result = localStorage.getItem("trivia");
let questions = JSON.parse(result);
console.log(questions);

function load_question()
{
var random_index = Math.trunc(Math.random()*30);
let selected_question = questions[random_index];
my_text.html(selected_question.text);

var choices = [selected_question.correctanswer,selected_question.wronganswer1,selected_question.wronganswer2,selected_question.wronganswer3];
var shuffled_choices = [];
for(i=0;i<=3;i++)
{
let c_index = Math.trunc(Math.random()*choices.length);
shuffled_choices.push(choices[c_index]);
choices.splice(c_index,1);
}

c1.html(shuffled_choices[0]);
c2.html(shuffled_choices[1]);
c3.html(shuffled_choices[2]);
c4.html(shuffled_choices[3]);
}

load_question();