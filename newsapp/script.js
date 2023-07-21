const timeElement=document.querySelector(".date-time");
// const dateElement=document.querySelector(".date");
function formatTime(date){
    const hours12 = date.getHours() ;
    const minutes = date.getMinutes();
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} IST`
}
function formatDate(date){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return `${days[date.getDay()]}, ${months[date.getMonth()]}${date.getDate()}, ${date.getFullYear()}`
}
setInterval(() =>{
    const now = new Date();
    timeElement.textContent = formatTime(now)+ "  |  ";
    timeElement.textContent += formatDate(now);
    // dateElement.textContent = formatDate(now);
},200)