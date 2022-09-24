const currentDate = document.querySelector(".current-data");//headerin altindaki p
daysTag = document.querySelector(".days");


//cari il ve ay goturmek
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

//console.log(date,currYear,currMonth);//tarixi ili ayi cixardi

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const renderCalendar = () => {
    let lastDataofMonth = new Date(currYear,currMonth + 1, 0).getDate();//ayin son tarixin goturur
    //console.log(lastDataofMonth);//ayin son gunun goturdu

    for(let i = 0; i <= lastDataofMonth; i++){
        console.log(i);//gunleri yazdirdi
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;//halhazirki ayi ve ili yazdi

}

renderCalendar();