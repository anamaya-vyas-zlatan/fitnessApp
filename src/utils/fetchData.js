export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3d04693e3bmsh0fbd3ffd5e024ddp15bff0jsn6691abc281c6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}