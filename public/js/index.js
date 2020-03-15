/** for future use:-
 * 
 *  var where = "Confirmed%20>%200)%20AND%20(Country_Region%3D%27China%27"; 
 *      for specific country complete data
 * 
 *  var global = "Confirmed%20%3E%200"; 
 *      for every country
 * 
 *  $('#country-list'); side nav bar collection
 *  $('#location-card'); Location Card
 *  $('#total-cases'); Total Cases Card
 *  $('#total-deaths'); Total Death Card
 *  $('#total-recovered'); Total Recovered Card
**/

var countryArray = [];
var globalCases = 0;
var globalDeath = 0;
var globalRecover = 0;
var recentUpdate;
var countryListHTML = ``;

//get data country wise
$.getJSON('https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/2/query?' +
    'f=json' +
    '&where=Confirmed%20%3E%200' +
    '&returnGeometry=false' +
    '&spatialRel=esriSpatialRelIntersects' +
    '&outFields=*' +
    '&orderByFields=Confirmed%20desc&resultOffset=0' +
    '&resultRecordCount=200' +
    '&cacheHint=true',
    function (response) {
        Object.keys(response.features).forEach(function (key) {
            countryArray.push(response.features[key].attributes);
        });

        countryArray.forEach((country) => {
            globalCases += country.Confirmed;
            globalDeath += country.Deaths;
            globalRecover += country.Recovered;

            countryListHTML += `<li>
                                    <a style="text-decoration: none; color: black;" href="javascript: selectCountry('${country.Country_Region}')">
                                        <p><img src="https://img.shields.io/badge/-${country.Confirmed}-red" alt="counter"> &nbsp;${country.Country_Region}</p>
                                    </a>
                                </li>`;

            if (recentUpdate < Number(country.Last_Update)) {
                recentUpdate = Number(country.Last_Update);
            }
        });

        // Default View
        $('#location-card').text('Global');
        $('#total-cases').text(globalCases);
        $('#total-deaths').text(globalDeath);
        $('#total-recovered').text(globalRecover);
        //Time elapsed
        let elapsed = Date.now -
            $('#lastUpdate-card').text();

        // Country List Elements
        $('#country-list').append(countryListHTML);
    }
);

var searchForm = document.querySelector('#search-form');
if (searchForm != null) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Form data accepted");
    });
}



function selectCountry(name) {
    if (name == 'global') {
        $('#location-card').text('Global');
        $('#total-cases').text(globalCases);
        $('#total-deaths').text(globalDeath);
        $('#total-recovered').text(globalRecover);
    } else {
        var searched = countryArray.find(element => element.Country_Region == name)
        $('#location-card').text(searched.Country_Region);
        $('#total-cases').text(searched.Confirmed);
        $('#total-deaths').text(searched.Deaths);
        $('#total-recovered').text(searched.Recovered);
    }
}


console.log(Date.now());
console.log(recentUpdate)
//Initial Conditions

