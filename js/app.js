requestResourceButton.addEventListener('click', dataMaker);

function dataMaker() {
  contentContainer.innerHTML = ' ';
  if (resourceType.value === 'people') {
    const personReq = new XMLHttpRequest();

    function personReqListener() {
      if (this.status !== 200) {
        let errorBox = document.createElement('h2');
        errorBox.innerHTML = 'OOPSIE WOOPSIE WE HAVE AN ERROR: ' + this.status;
        if (this.status === 404) {
          let notFound = document.createElement('h3');
          notFound.innerHTML = 'Brah type in a real ID';
          errorBox.appendChild(notFound);
        }
        contentContainer.appendChild(errorBox);
      }
      let responseData = JSON.parse(this.responseText);
      console.log(responseData);

      let personBox = document.createElement('h2');
      personBox.innerHTML = responseData.name;
      contentContainer.appendChild(personBox);

      let genderBox = document.createElement('p');
      genderBox.innerHTML = responseData.gender;
      personBox.appendChild(genderBox);

      let speciesBox = document.createElement('p');

      function personSpeciesReqListener() {
        let responseData = JSON.parse(this.responseText);
        speciesBox.innerHTML = responseData.name;
        personBox.appendChild(speciesBox);
      }
      const personSpeciesReq = new XMLHttpRequest();
      personSpeciesReq.addEventListener('load', personSpeciesReqListener);

      personSpeciesReq.open('GET', responseData.species);
      personSpeciesReq.send();
    }

    personReq.addEventListener('load', personReqListener);

    personReq.open('GET', 'https://swapi.co/api/people/' + resourceId.value);
    personReq.send();
  }
  // planet below

  if (resourceType.value === 'planets') {
    const planetReq = new XMLHttpRequest();

    function planetReqListener() {
      if (this.status !== 200) {
        let errorBox = document.createElement('h2');
        errorBox.innerHTML = 'OOPSIE WOOPSIE WE HAVE AN ERROR: ' + this.status;
        if (this.status === 404) {
          let notFound = document.createElement('h3');
          notFound.innerHTML = 'Brah type in a real ID';
          errorBox.appendChild(notFound);
        }
        contentContainer.appendChild(errorBox);
      }
      let responseData = JSON.parse(this.responseText);
      console.log(responseData);

      let planetBox = document.createElement('h2');
      planetBox.innerHTML = 'Planet name: ' + responseData.name;
      contentContainer.appendChild(planetBox);

      let terrainBox = document.createElement('p');
      terrainBox.innerHTML = 'Terrain: ' + responseData.terrain;
      planetBox.appendChild(terrainBox);

      let popBox = document.createElement('p');
      popBox.innerHTML = responseData.population;
      planetBox.appendChild(popBox);

      let filmArray = responseData.films;

      let filmList = document.createElement('li');
      filmList.innerHTML = 'Appears in:';
      planetBox.appendChild(filmList);

      for (let i = 0; i < filmArray.length; i++) {
        function planetFilmsReqListener() {
          let responseData = JSON.parse(this.responseText);
          console.log(responseData);
          let filmNameLi = document.createElement('ul');
          filmNameLi.innerHTML = responseData.title;
          filmList.appendChild(filmNameLi);
        }

        const filmPlanetReq = new XMLHttpRequest();
        filmPlanetReq.addEventListener('load', planetFilmsReqListener);
        filmPlanetReq.open('Get', filmArray[i]);
        filmPlanetReq.send();
      }
    }

    planetReq.addEventListener('load', planetReqListener);
    planetReq.open('GET', 'https://swapi.co/api/planets/' + resourceId.value);
    planetReq.send();
  }
  // starship below

  if (resourceType.value === 'starships') {
    const starshipReq = new XMLHttpRequest();

    function starshipReqListener() {
      if (this.status !== 200) {
        let errorBox = document.createElement('h2');
        errorBox.innerHTML = 'OOPSIE WOOPSIE WE HAVE AN ERROR: ' + this.status;
        if (this.status === 404) {
          let notFound = document.createElement('h3');
          notFound.innerHTML = 'Brah type in a real ID';
          errorBox.appendChild(notFound);
        }
        contentContainer.appendChild(errorBox);
      }
      let responseData = JSON.parse(this.responseText);
      console.log(responseData);

      let starshipBox = document.createElement('h2');
      starshipBox.innerHTML = responseData.name;
      contentContainer.appendChild(starshipBox);

      let manufacturerBox = document.createElement('p');
      manufacturerBox.innerHTML = responseData.manufacturer;
      starshipBox.appendChild(manufacturerBox);

      let classBox = document.createElement('p');
      classBox.innerHTML = responseData.starship_class;
      starshipBox.appendChild(classBox);

      let filmArray = responseData.films;

      let filmList = document.createElement('li');
      filmList.innerHTML = 'Appears in:';
      starshipBox.appendChild(filmList);

      for (let i = 0; i < filmArray.length; i++) {
        function planetFilmsReqListener() {
          let responseData = JSON.parse(this.responseText);
          console.log(responseData);
          let filmNameLi = document.createElement('ul');
          filmNameLi.innerHTML = responseData.title;
          filmList.appendChild(filmNameLi);
        }

        const filmPlanetReq = new XMLHttpRequest();
        filmPlanetReq.addEventListener('load', planetFilmsReqListener);
        filmPlanetReq.open('Get', filmArray[i]);
        filmPlanetReq.send();
      }
    }

    starshipReq.addEventListener('load', starshipReqListener);

    starshipReq.open('GET', 'https://swapi.co/api/starships/' + resourceId.value);
    starshipReq.send();
  }
}
