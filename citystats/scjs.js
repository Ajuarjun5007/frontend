let main=document.getElementById('container')
let result=document.createElement('div');
 result.id='result'
main.appendChild(result)

const butn=document.querySelector('button')
butn.addEventListener('click', stats)


function stats(){

    const input=document.getElementById("cities")
    const city=input.options[input.selectedIndex].value
    let population=0, houses=0, language=''
       switch(city){
        case 'coimbatore':
            population=34221;
            houses=4322;
            language='tamil'
            break;

     case 'bangalore':
        population=102221;
        houses=11121;
        language='kannada'
        break;

        case 'kochi':
        population=82421; 
        houses=7211; 
        language='malayalam' 
        break;

        case 'pune':
        population=98221;
        houses=9111;
        language='hindi'
        break;
            
       }
         let text=`The indian city of ${city} has a population of ${population} with ${houses} houses.Most people speak ${language} language.`
         document.getElementById('result').innerHTML=text
                 
       } 
