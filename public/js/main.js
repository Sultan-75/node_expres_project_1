const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const searchBtn = document.getElementById('searchBtn');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');

const getinfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        
        city_name.innerHTML=`<p style="color: #FF5733 ;">Please type a name before search</p>`;
        data_hide.classList.add('data_hide');
    }else{
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=2b5dd4ffebaa968b80a977d535f1174d`;

            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            city_name.innerHTML=
            `
            ${arrdata[0].name} , ${arrdata[0].sys.country}
            `;
            temp.innerHTML=arrdata[0].main.temp;
            const tempMod = arrdata[0].weather[0].main;
             if (tempMod == 'clear'){
                weathercon.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`
            }
            if (tempMod == 'Sunny'){
                temp_status.innerHTML = `<i class="fa fa-sun" style="color: #f1f2f6;"></i>`
            } else if (tempMod == 'Clouds') {
                temp_status.innerHTML = `<i class="fa fa-cloud" style="color: #dfe4ea;"></i>`
            }
            else if (tempMod == 'Rainy'){
                temp_status.innerHTML = `<i class="fa fa-cloud-rain" style="color: #a4bobe;"></i>`
            }else{
                temp_status.innerHTML = `<i class="fa fa-cloud" style="color: #eccc68;"></i>`
            }
            data_hide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerHTML="Please type a valid name";
            data_hide.classList.add('data_hide');
        }
    }
}

searchBtn.addEventListener('click',getinfo);
//
const getcurrentDay = () =>{

    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let currentTime = new Date();
    let days = weekday[currentTime.getDay()];
    let day = document.getElementById('day');
    day.innerText = days;

};
getcurrentDay();
//
const getcurrentTime = () =>{
        monts=[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        let nowtime = new Date();
        var month = monts[nowtime.getMonth()];
        var date = nowtime.getDate() ;
        let toady_data = document.getElementById('toady_data');
        toady_data.innerText = `${date}th ${month}`;
    };
    getcurrentTime();