const url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=3b4613ef7b604936bbc82426671ddb95";
let array=[]
async function newsFetch(url) {
    try {
        const response = await fetch(url);
        console.log(typeof response)
        const data =  await response.json();
        console.log("hi")
        array=data;
        // console.log(array.articles[0].author)
        for(let i=0; i<array.articles.length; i++){
            // console.log(array.articles[i].url);
        }
        return data;
    } catch (error) {
        console.log("Error is:" + error);
    }
}
newsFetch(url)
