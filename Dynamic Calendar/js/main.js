const currentDate = document.querySelector(".current-data");//headerin altindaki p
daysTag = document.querySelector(".days");
prevNextIcon =  document.querySelectorAll(".icons span");


//cari il ve ay goturmek
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

//console.log(date,currYear,currMonth);//tarixi ili ayi cixardi

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const renderCalendar = () => {
    let firstDayofMonth= new Date(currYear,currMonth, 1).getDate();//ayin ilk tarixin goturur
    let lastDataofMonth = new Date(currYear,currMonth + 1, 0).getDate();//ayin son tarixin goturur
    let lastDayofMonth = new Date(currYear,currMonth, lastDataofMonth).getDay();//ayin songunun yaz
    let lastDataofLastMonth = new Date(currYear, currMonth, 0).getDate();//evvelki ayin son melumatlarini elde edir
    //console.log(lastDataofMonth);//ayin son gunun goturdu
    let liTag = "";


    for (let i = firstDayofMonth; i > 0; i-- ){
        liTag += `<li class = "interactive">${lastDataofLastMonth - i + 1}</li>`;
    }


    for(let i = 0; i <= lastDataofMonth; i++){
       // console.log(i);//gunleri yazdirdi
       let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : "";

       liTag += `<li class = "${isToday}">${i}</li>`;
    }



    for ( let i = lastDayofMonth; i < 6; i++){
        liTag += `<li class = "interactive">${ i - lastDayofMonth + 1}</li>`;

    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`;//halhazirki ayi ve ili yazdi
    daysTag.innerHTML = liTag;

}

renderCalendar();

prevNextIcon.forEach(icon =>{
   icon.addEventListener("click", () =>{//oxlara click elave etme
    //console.log(icon);
    //kliklənmiş ikona əvvəlki ikondursa, cari ayı 1 azaldın, əks halda 1 artırın
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if(currMonth < 0 || currMonth > 11){
        date = new Date(currYear , currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }else{
        date = new Date();
    }
    renderCalendar();
   });

});