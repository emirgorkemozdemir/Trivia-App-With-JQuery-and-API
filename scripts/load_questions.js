var questions_from_api = [];

async function get_questions()
{
	const url = "https://opentdb.com/api.php?amount=30&type=multiple";
	const options = {
		method:'GET'
	};

	try
	{
       const response = await fetch(url,options);
	   const result = await response.text();

	   let value = JSON.parse(result);
      
       for(i=0;i<30;i++)
        {
           let xquestion = new question(
           value['results'][i]['question'],
           value['results'][i]['correct_answer'],
           value['results'][i]['incorrect_answers'][0],
           value['results'][i]['incorrect_answers'][1],
           value['results'][i]['incorrect_answers'][2]);

           questions_from_api.push(xquestion);
        }

      
      localStorage.setItem("trivia",JSON.stringify(questions_from_api));
	   window.open("game.html");
      console.log(questions_from_api);
	}
	catch(error)
	{
      console.error(error);
	}
}



