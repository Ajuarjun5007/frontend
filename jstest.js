
const allCategoryUrl =
  "https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news";

const cardContainer = document.getElementsByClassName("news-bar")[0];
let alldata=[];
async function getApiData(url) {
  try {
    const response = await fetch(url);
    const data =  await response.json();
    alldata=data;     // this will return object ,but outside it will return promise

     createCards(data);
  } catch (error) {
    console.log("Error is:" + error);
  }
}


function createCards(dataArray) {
  // console.log(dataArray);
  dataArray.map((item) => {
    cardContainer.innerHTML += `<div class="news-item">
        <div class="news-title">
        <p>by ${item[" author"]}</p>
        <p>category ${item[" category"]}</p>
        </div>
        <div class="news-content">
                ${item.content}
                <a href="${item.url}">Read More</a></div>
                <i class="fa-solid fa-heart"></i>
                </div>
                </div>`;
  });
}

async function fetchAndGenerate(url, myFunction) {
  const data = await getApiData(url);
  myFunction(data);
}

 fetchAndGenerate(allCategoryUrl, createCards);
// ------------

const categoryselect=document.querySelector(".category-bar");
// console.log(categoryselect)

let result=[];
categoryselect.onclick = (e) =>{
  let val=e.target.innerHTML;
  if(val==="All"){
    cardContainer.innerHTML = ''
    fetchAndGenerate(allCategoryUrl, createCards);
  }else{
    result= alldata.filter((item)=>(item[" category"]===val))
 cardContainer.innerHTML = ''
//  return filtereddata
createCards(result)
  }
 
// console.log(result)
}
cardContainer.onclick=(e)=>{
  console.log(e)
  if(e.target.className==="fa-solid fa-heart"){
    //  e.target.classList.add="fa-solid fa-heart"
      
      if(e.target.style.color==="red"){
        e.target.style.color=""
      }else{
        e.target.style.color="red"
      }
  }
}

// heart.onclick = (e) =>{
// // console.log(e)
// }
//create new array=[] if()