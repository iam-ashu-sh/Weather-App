function search(e) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=b0c864ff308b4cd7cd97d2d23b38e68d`
  )
    .then(async (data) => {
      return data.json();
    })
    .then((values) => {
      console.log(values);
      const cards = document.getElementById("cards");
      const Icon = document.getElementById(".Icon");

      cards.innerHTML = `<div class="card" style="margin-top:-0.5rem;margin-left:500px">
        <div class="card" style="width:50rem;height:40rem;background-image:linear-gradient(to right,rgba(0,0,0,1.0), rgba(255,255,255, 0.1)),url('https://source.unsplash.com/3000x3000/?${
          values.name
        }"').jpg";>
           <img class="card-img-top"style="width:120px;margin-left:400px" src= "https://openweathermap.org/img/wn/${
             values.weather[0].icon
           }.png"; alt="Card image cap" />
           <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:390px;margin-top:90px;position:absolute">${
             values.weather[0].main
           }</li>
           <div class="card-body"style="width:30rem"><img src="/img/Place.png"style="margin-left:-130px;position:absolute;margin-top:8px"></>
            <h1 class="card-title"style="font-size:50px;color:#fff;fontWeight:800;margin-left:-80px">${
              values.name
            }</h1>
               <h2 class="card-text"style="width:250px;color:#fff;fontWeight:600;margin-left:300px;margin-top:-50px">${
                 values.weather[0].description
               }</h2>
               <p class="card-text"style="font-size:20px;color:#fff;fontWeight:600;margin-left:-120px;margin-top:50px">${new Date(
                 values.dt * 1000
               ).toDateString()}</p>
               <p class="card-text"style="font-size:16px;color:#fff;fontWeight:600;margin-left:-120px;">${new Date(
                 values.dt * 1000
               ).toLocaleString("en-US", {
                 day: "numeric",
                 month: "long",
                 year: "numeric",
                 hour: "numeric",
                 minute: "numeric",
                 second: "numeric",
                 hour12: true,
               })}
               </p>
            </div>
        <ul class="card-text">
        <li class="list-group-item"style="font-size:40px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;margin-top:-160px;position:absolute">${
          values.main.temp
        }&#8451;</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;margin-top:-80px;position:absolute">Wind Speed : ${
          values.wind.speed
        } m/s</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;margin-top:-15px;position:absolute">Humidity : ${
          values.main.humidity
        } %</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;margin-top:20px;position:absolute">Pressure : ${
          values.main.pressure
        } Hpa</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;margin-top:55px;position:absolute">Visibility : ${
          values.visibility / 1000
        } Km</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:420px;margin-top:-140px;position:absolute">Feels Like : ${
          values.main.feels_like
        }&#8451</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;margin-top:110px">Sun rise : ${new Date(
          values.sys.sunrise * 1000
        ).toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}</li>
        <li class="list-group-item"style="font-size:20px;color:#fff;background-color:rgb(0,0,0,0.0);margin-left:230px;">Sun Set : ${new Date(
          values.sys.sunset * 1000
        ).toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}</li>
        </ul>
       <div class="card-body">
       <a href="https://mausam.imd.gov.in/" class="card-link"style="color:#fff;">Visit IMD</a>
       <a href="https://openweathermap.org/" class="card-link"style="color:#fff;">Visit Openweather.org</a>
       </div>
     </div>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

// `<div class="card">
//             <h1 class="title">${values.name}</h1>
//              <p>${values.weather[0].description}</p>
//              <p>${values.weather.icon}</p>
//             <p>${values.main.temp}</p>
//             <p class="catagory">${values.wind.speed}</p>
//             <p class="price">Sun rise: ${new Date(
//               values.sys.sunrise * 1000
//             ).toLocaleString()}</p>
//             <p class="price">Sun set: ${new Date(
//               values.sys.sunset * 1000
//             ).toLocaleString()}</p>
//             <p class="price">${values.sys.country}</p>
//         </div>`;

//AutoComplete
const Find = document.getElementById("datalistOptions");
const matchList = document.getElementById("match-list");

async function searchStates(e) {
  const searchText = e;
  const res = await fetch(`./cities.json`);
  const states = await res.json();
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex);
  });
  console.log(matches);
  if (searchText.length == 0) {
    matches = [];
  }
  outputHtml(matches);
}
const outputHtml = (matches) => {
  if (matches.length > 0) {
    Find.innerHTML = null;
    const html = matches
      .map((match) => `<option>${match.name}, ${match.state}</option>`)
      .join("");
    Find.innerHTML = html;
  }
};

// Find.addEventListener("input", (e) => searchStates(e.value));
