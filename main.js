const contentUrl =`https://covid-193.p.rapidapi.com/statistics?`;
const searchUrl = '';
let countries
let country = "Indonesia"

const searchNation = (filter) => {
	return countries.filter( negara => {
			
			if (negara.country === filter) {
				return negara
			}
		})
}

fetch(contentUrl, {
	method: 'GET',
	headers: {
	'X-RapidAPI-Key': '49ff067d95msh53a719fa002199ep199201jsn21e869363909',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
	},
})

.then((res) => res.json())
.then((data) => {
	const payload = data.response
	countries = data.response
	// const contentUrl = data.response
	// console.log(payload)
	const nation = searchNation(country)
	showData(nation)
	
});

const content = document.getElementById('search')
function searchData(e) {
	e.preventDefault()
	
	const data = searchNation(country)// showData(searchResult)	
}
content.addEventListener('submit', e => {
	e.preventDefault()
	const searchValue = content.querySelector('[name="keyword"]').value
	searchValue.innerHTML = searchNation(country)
	showData(data)
	// console.log(searchRes)
}) 


function showData(data) {

	// <---------------!Get element id selector!----------------->
		const selector = document.getElementById('recover')
		const totalTest = document.getElementById('total')
		const critical = document.getElementById('death')
		const newest = document.getElementById('new')
		const now = document.getElementById('active')
		const people = document.getElementById('test')
		
	// <---------------!element data selector!----------------->
		const testTotal = data[0].tests.total
		const recovery = data[0].cases.recovered
		const active = data[0].cases.active
		const death = data[0].deaths.total
		const test = data[0].cases.total
		const caseNew = data[0].cases.new

	// <---------------!display data to innerHTML!----------------->
		selector.innerHTML = recovery
		totalTest.innerHTML = testTotal
		critical.innerHTML = death
		newest.innerHTML = caseNew
		now.innerHTML = active
		people.innerHTML = test
}

showData()










