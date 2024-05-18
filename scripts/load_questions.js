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

	   console.log(value);
	}
	catch(error)
	{
      console.error(error);
	}
}

get_questions();