class question
{
constructor(_text,_correctanswer,_wronganswer1,_wronganswer2,_wronganswer3)
{
   this.text=_text;
   this.correctanswer=_correctanswer;
   this.wronganswer1=_wronganswer1;
   this.wronganswer2=_wronganswer2;
   this.wronganswer3=_wronganswer3;
}
}


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
       let questions_from_api = [];
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
       // 0 - 30 indexleri dolaşacağım.
       // let xquestion = new question(value[]['question']);
	   console.log(questions_from_api);
	}
	catch(error)
	{
      console.error(error);
	}
}


