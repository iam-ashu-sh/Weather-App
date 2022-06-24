function search(e) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${e}&units=metric&appid=API Key`
  )
    .then(async (data) => {
      return data.json();
    })
    .then((values) => {
      const list = values.list;
      console.log(values);
      console.log(values.list);
      const cards = document.getElementById("cards");
      const Icon = document.getElementById(".Icon");

      cards.innerHTML = `<div class="card" style="width: 20rem;height: 30rem;">
      
           <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
             list[0].weather[0].icon
           }.png"; alt="Card image cap"/>
           <div class="card-body"style="width:30rem">
            <h5 class="card-title"style="color:#000;fontWeight:600;margin-left:100px;">${
              values.city.name
            }</h5>
               <p class="card-text"style="color:#000;margin-left:100px;">${
                 list[0].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[0].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[0].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[0].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[0].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[0].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
       <div class="card" style="width: 20rem;height: 30rem;margin-left:700px;margin-top:-3px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[3].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[3].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[3].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[3].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[3].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[3].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[3].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>  
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:800px;margin-top:17px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[8].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[8].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[8].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[8].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[8].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[8].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[8].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a> 
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:1150px;margin-top:17px;">
       <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
         list[11].weather[0].icon
       }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[11].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[11].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[11].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[11].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[11].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[11].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:1500px;margin-top:17px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[19].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[19].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[19].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[19].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[19].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[19].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[19].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:1500px;margin-top:520px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[26].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[26].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[26].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[26].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[26].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[26].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[26].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-right:100px;margin-top:520px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[27].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[27].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[27].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[27].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[27].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[27].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[27].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:450px;margin-top:520px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[31].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[31].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[31].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[31].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[31].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[31].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[31].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:800px;margin-top:520px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[35].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[35].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[35].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[35].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[35].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[35].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[35].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>
      </div>
     </div>
     <div class="card" style="width: 20rem;height: 30rem;margin-left:1150px;margin-top:520px;">
        <img class="card-img-top"style="width:90px" src= "https://openweathermap.org/img/wn/${
          list[38].weather[0].icon
        }.png"; alt="Card image cap"/>
           <div class="card-body">
            <h5 class="card-title"style="color:#000;">${values.city.name}</h5>
               <p class="card-text"style="color:#000;">${
                 list[38].weather[0].description
               }</p>
            </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Temperature : ${
          list[38].main.temp
        }&#8451;</li>
        <li class="list-group-item">Wind Speed : ${
          list[38].wind.speed
        } Km/hr</li>
        <li class="list-group-item">Humidity : ${list[38].main.humidity} %</li>
        <li class="list-group-item">Feels Like : ${
          list[38].main.feels_like
        }&#8451</li>
        <li class="list-group-item">Updated On : ${new Date(
          values.list[38].dt_txt
        ).toLocaleString()} </li>
        </ul>
       <div class="card-body">
       <a href="#" class="card-link">Card link</a>
       <a href="#" class="card-link">Another link</a>
       </div>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

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
