//CONSTANTS

const search_url = 'api.giphy.com/v1/gifs/search?'
const trend_url = 'api.giphy.com/v1/gifs/trending?'
const random_url = 'api.giphy.com/v1/gifs/random?'
const api_key = 'api_key=ciganGK3rnsobQOeDieotPDKEbzppCDt&q='
let btnsearch = document.getElementById('btnsearch')
let inputsearch = document.getElementById('search')
let final = '&limit=10&offset=0&rating=G&lang=en'
let finaltrend = '&limit=5&offset=0&rating=G&lang=en'
let finalrandom = '&limit=5&offset=0&rating=G&lang=en'
let tag = 'develop'
let https = 'https://'
var q = ''
var path = ''
var pathtrend = ''
var pathrandom = ''
let drop = document.getElementById('navbar-search')



//DISPLAY DROPSEARCH
function dropsearch() {

    if (drop.style.display = 'none') {
        drop.style.display = 'block'
    } else { drop.style.display = 'none' }


}

function erase() {
    drop.style.display = 'none'
}



inputsearch.addEventListener('keydown', dropsearch)
inputsearch.addEventListener('blur', erase)




//API CONECTION "SEARCH"

function capture() {
    q = inputsearch.value
    path = (https + search_url + api_key + q + final).trim()
        //console.log(path)



    fetch(path)
        .then(response => response.json())

    .then(function(json) {
            const resultEL = document.getElementById('results')
            let resultHTML = ''


            json.data.forEach(function(obj) {
                url = obj.images.fixed_height.url
                console.log(url)
                height = obj.images.fixed_height.height
                width = obj.images.fixed_height.widht



                resultHTML += '<img src="' + url + '" height ="' + height + '" width = "' + width + '">'

            })
            resultEL.innerHTML = resultHTML

        })
        .catch(err => console.log(err.message))




}
btnsearch.addEventListener('click', capture)


//API CONECTION "TRENDS"

function trending() {

    pathtrend = (https + trend_url + api_key + finaltrend).trim()
    console.log(pathtrend)



    fetch(pathtrend)
        .then(response => response.json())

    .then(function(json) {
            const resultEltrend = document.getElementById('trending')
            let resultHTMLtrend = ''


            json.data.forEach(function(obj) {
                urltrend = obj.images.fixed_height.url
                console.log(urltrend)
                heighttrend = obj.images.fixed_height.height
                widthtrend = obj.images.fixed_height.widht



                resultHTMLtrend += '<img src="' + urltrend + '" height ="' + heighttrend + '" width = "' + widthtrend + '">'

            })
            resultEltrend.innerHTML = resultHTMLtrend

        })
        .catch(err => console.log(err.message))
}

window.addEventListener('DOMContentLoaded', trending)

//API RANDOM  CONECTION

function sugesstion() {

    pathrandom = (https + trend_url + api_key + tag + finalrandom).trim()
    console.log(pathrandom)



    fetch(pathrandom)
        .then(response => response.json())

    .then(function(json) {
            const resultEldom = document.getElementById('sugerencias')
            let resultHTMLdom = ''


            json.data.forEach(function(obj) {
                urldom = obj.images.fixed_height.url
                console.log(urldom)
                heightdom = obj.images.fixed_height.height
                widthdom = obj.images.fixed_height.widht



                resultHTMLdom += '<img src="' + urldom + '" height ="' + heightdom + '" width = "' + widthdom + '">'

            })
            resultEldom.innerHTML = resultHTMLdom

        })
        .catch(err => console.log(err.message))
}

window.addEventListener('DOMContentLoaded', sugesstion)