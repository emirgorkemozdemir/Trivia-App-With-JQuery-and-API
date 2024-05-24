const my_image = $("#myimage");
const my_text = $("#mytext");
const c1 = $("#c1");
const c2 = $("#c2");
const c3 = $("#c3");
const c4 = $("#c4");
const point_text = $("#point");
var point = 0;
var selected_question;
var random_index;

let result = localStorage.getItem("trivia");
let questions = JSON.parse(result);
console.log(questions);

function load_question()
{

if(questions.length==0)
{
// Puan harici kısımları kapatın, ekstra bir kısım ekleyin başta orayı kapalı yapın
// oyun bittiğinde ortaya çıksın.
}
else
{
random_index = Math.trunc(Math.random()*questions.length);
selected_question = questions[random_index];
console.log(selected_question);
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

}

async function get_image(keyword="cat")
{
    const url = "https://serpapi.com/search.json?q="+keyword+"&engine=google_images&ijn=0";
	const options = {
		method:'GET'
	};

	try
	{
         const response = await fetch(url,options);
	     const result = await response.text();
         let value = JSON.parse(result);
         console.log(value);
	}
	catch(error)
	{
      console.error(error);
	}
}

function next_question()
{
    questions.splice(random_index,1);
    load_question();
}

function display_point()
{
    point_text.html("Point : " + point);
}


c1.click
(
    function()
    {
        if(selected_question.correctanswer==c1.html())
        {
            window.alert("Correct answer");
            next_question();
            point++;
            display_point();
        }
        else
        {
            window.alert("Wrong answer");
            point--;
            display_point();
        }
    }
)

c2.click
(
    function()
    {
        if(selected_question.correctanswer==c2.html())
        {
            window.alert("Correct answer");
            next_question();
            point++;
            display_point();
        }
        else
        {
            window.alert("Wrong answer");
            point--;
            display_point();
        }
    }
)

c3.click
(
    function()
    {
        if(selected_question.correctanswer==c3.html())
        {
            window.alert("Correct answer");
            next_question();
            point++;
            display_point();
        }
        else
        {
            window.alert("Wrong answer");
            point--;
            display_point();
        }
    }
)

c4.click
(
    function()
    {
        if(selected_question.correctanswer==c4.html())
        {
            window.alert("Correct answer");
            next_question();
            point++;
            display_point();
        }
        else
        {
            window.alert("Wrong answer");
            point--;
            display_point();
        }
    }
)
load_question();
get_image();