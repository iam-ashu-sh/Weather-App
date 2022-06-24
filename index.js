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

      cards.innerHTML = `<div class="card" style="margin-top:-1rem;margin-left:289px;">
        <div class="card" style="width:30rem;background-image:url('https://source.unsplash.com/2000x2000/?${
          values.name
        }"').jpg";>
           <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
             values.weather[0].icon
           }.png"; alt="Card image cap" />
           <div class="card-body"style="width:30rem">
            <h5 class="card-title"style="color:#fff;fontWeight:800;">${
              values.name
            }</h5>
               <p class="card-text"style="color:#fff;fontWeight:600;">${
                 values.weather[0].description
               }</p>
               <p class="card-text"style="color:#fff;fontWeight:600;">${Date(
                 values.dt * 1000
               ).toLocaleString()}</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          values.main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${values.wind.speed} Km/hr</li>
        <li class="list-group-item">Humidity : ${values.main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          values.main.feels_like
        }&#8451</li>
        <li class="list-group-item">Sun rise : ${new Date(
          values.sys.sunrise * 1000
        ).toLocaleString()} AM</li>
        <li class="list-group-item">Sun Set : ${new Date(
          values.sys.sunset * 1000
        ).toLocaleString()} PM</li>
        </ul>
       <div class="card-body">
       <a href="https://mausam.imd.gov.in/" class="card-link">Visit IMD</a>
       <a href="https://openweathermap.org/" class="card-link">Visit Openweather.org</a>
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
