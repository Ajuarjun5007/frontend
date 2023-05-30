
let bodycontainer=document.querySelector('.container');
let result=document.createElement('div');
result.id='resultstyle';
bodycontainer.appendChild(result);





function convert(){
    const month= Number(document.getElementById('inputmonths').value)
    
    
    let rate=0;
    if(month>=0 && month<=6){
        rate=5;
        
    }else if(month>6 && month<=9){
        rate=6
        
    }else{
        rate=7
    }
    
    result.innerHTML=`your FD rate is ${rate}%`;

}

