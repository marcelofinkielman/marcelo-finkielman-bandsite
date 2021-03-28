

let concerts = [
  {
    dates: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    dates: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Francisco, CA"
  },
  {
    dates: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    dates: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    dates: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },

]





const tickets = document.querySelector('.tickets')

const showsHeader = document.createElement('h2')
showsHeader.classList.add('tickets__show')
showsHeader.innerText = 'Shows'
tickets.appendChild(showsHeader)

const justTitles = document.createElement('div')
justTitles.classList.add('tickets__justTitles')
tickets.appendChild(justTitles)

const justDate = document.createElement('p')
justDate.classList.add('tickets__justDate')
justDate.innerText = 'DATE'
justTitles.appendChild(justDate)

const justvenue = document.createElement('p')
justvenue.classList.add('tickets__justVenue')
justvenue.innerText = 'VENUE'
justTitles.appendChild(justvenue)

const justLocation = document.createElement('p')
justLocation.classList.add('tickets__justLocation')
justLocation.innerText = 'LOCATION'
justTitles.appendChild(justLocation)


function addShow(show) {

  let newShowContainer = document.createElement('div')
  newShowContainer.classList.add('tickets__showContainer')
  tickets.appendChild(newShowContainer)
  let showDate = document.createElement('p')
  showDate.classList.add('tickets__date')
  let showVenue = document.createElement('p')
  showVenue.classList.add('tickets__venue')
  let showLocation = document.createElement('p')
  showLocation.classList.add('tickets__location')
  let showButton = document.createElement('button')
  showButton.classList.add('tickets__showButton')
  showButton.innerText = 'BUY TICKETS'
  let dateTitle = document.createElement('p')
  dateTitle.classList.add('tickets__mainDateTitle')
  dateTitle.innerText = 'DATE'
  newShowContainer.appendChild(dateTitle)
  newShowContainer.appendChild(showDate)
  let venueTitle = document.createElement('p')
  venueTitle.classList.add('tickets__mainVenueTitle')
  venueTitle.innerText = 'VENUE'
  newShowContainer.appendChild(venueTitle)
  newShowContainer.appendChild(showVenue)
  let locationTitle = document.createElement('p')
  locationTitle.classList.add('tickets__mainLocationTitle')
  locationTitle.innerText = 'LOCATION'
  newShowContainer.appendChild(locationTitle)
  newShowContainer.appendChild(showLocation)
  newShowContainer.appendChild(showButton)
  showDate.innerText = show.dates
  showVenue.innerText = show.venue
  showLocation.innerText = show.location
}
for (let i = 0; i < concerts.length; i++) {
  addShow(concerts[i])

}

//===================================== axios =====================================//
 const apiKey = "8ca0d09d-400e-4880-b444-d14536351f0f"

function getComment() {
  axios
  .get(`https://project-1-api.herokuapp.com/showdates?api_key=<${apiKey}>`)
    .then((res) => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}
getComment() 