const tickets = document.querySelector('.tickets')
const firstShow = document.createElement('div')
const newHeader = document.createElement('h2')
newHeader.classList.add('tickets__show')
newHeader.innerText = 'Shows'
tickets.appendChild(newHeader)


//first show card bellow


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

firstShow.classList.add('tickets__firstShow')
firstShow.style.marginBottom = '1rem'
tickets.appendChild(firstShow)

const dateTitle = document.createElement('p')
dateTitle.classList.add('tickets__mainDateTitle')
dateTitle.innerText = 'DATE'
firstShow.appendChild(dateTitle)

const date = document.createElement('p')
date.classList.add('tickets__date')
date.innerText = 'Mon Dec 17 2018'

firstShow.appendChild(date)

const venueTitle = document.createElement('p')
venueTitle.classList.add('tickets__mainVenueTitle')
venueTitle.innerText = 'VENUE'
firstShow.appendChild(venueTitle)

const venue = document.createElement('p')
venue.classList.add('tickets__venue')
venue.innerText = 'Ronald Lane'
firstShow.appendChild(venue)

const locationTitle = document.createElement('p')
locationTitle.classList.add('tickets__mainLocationTitle')
locationTitle.innerText = 'LOCATION'
firstShow.appendChild(locationTitle)

const local = document.createElement('p')
local.classList.add('tickets__local')
local.innerText = 'San Fancisco, CA'
firstShow.appendChild(local)

const buyTicket = document.createElement('button')
buyTicket.classList.add('tickets__buyTickets')
buyTicket.innerText = 'BUY TICKET'
firstShow.appendChild(buyTicket)


 //end of first card

 const secondShow = document.createElement('div')
 secondShow.classList.add('tickets__secondShow')
 secondShow.style.borderBottom = 'solid 1px'
 secondShow.style.borderBottomColor = '#AFAFAF'
 secondShow.style.marginBottom = '1rem'
 tickets.appendChild(secondShow)

 const dateTitle2 = document.createElement('p')
dateTitle2.classList.add('tickets__dateTitle')
dateTitle2.innerText = 'DATE'

secondShow.appendChild(dateTitle2)

const date2 = document.createElement('p')
date2.classList.add('tickets__date')
date2.innerText = 'Tue Jul 18 2019'
secondShow.appendChild(date2)

const venueTitle2 = document.createElement('p')
venueTitle2.classList.add('tickets__venueTitle')
venueTitle2.innerText = 'VENUE'
secondShow.appendChild(venueTitle2)

const venue2 = document.createElement('p')
venue2.classList.add('tickets__venue')
venue2.innerText = 'Pier 3 East'
secondShow.appendChild(venue2)

const locationTitle2 = document.createElement('p')
locationTitle2.classList.add('tickets__locationTitle')
locationTitle2.innerText = 'LOCATION'
secondShow.appendChild(locationTitle2)

const local2 = document.createElement('p')
local2.classList.add('tickets__local')
local2.innerText = 'San Fancisco, CA'
secondShow.appendChild(local2)

const buyTickets2 = document.createElement('button')
buyTickets2.classList.add('tickets__buyTickets')
buyTickets2.innerText = 'BUY TICKET'
secondShow.appendChild(buyTickets2)

//end of second card

 const thirdShow = document.createElement('div')
 thirdShow.classList.add('tickets__thirdShow')
 thirdShow.style.borderBottom = 'solid 1px'
 thirdShow.style.borderBottomColor = '#AFAFAF'
 thirdShow.style.marginBottom = '1rem'
 tickets.appendChild(thirdShow)

 const dateTitle3 = document.createElement('p')
dateTitle3.classList.add('tickets__dateTitle')
dateTitle3.innerText = 'DATE'
thirdShow.appendChild(dateTitle3)

const date3 = document.createElement('p')
date3.classList.add('tickets__date')
date3.innerText = 'Fri Jul 22 2019'
thirdShow.appendChild(date3)

const venueTitle3 = document.createElement('p')
venueTitle3.classList.add('tickets__venueTitle')
venueTitle3.innerText = 'VENUE'
thirdShow.appendChild(venueTitle3)

const venue3 = document.createElement('p')
venue3.classList.add('tickets__venue')
venue3.innerText = 'View Loungue'
thirdShow.appendChild(venue3)

const locationTitle3 = document.createElement('p')
locationTitle3.classList.add('tickets__locationTitle')
locationTitle3.innerText = 'LOCATION'
thirdShow.appendChild(locationTitle3)

const local3 = document.createElement('p')
local3.classList.add('tickets__local')
local3.innerText = 'San Fancisco, CA'
thirdShow.appendChild(local3)

const buyTickets3 = document.createElement('button')
buyTickets3.classList.add('tickets__buyTickets')
buyTickets3.innerText = 'BUY TICKET'
thirdShow.appendChild(buyTickets3)

//end of third card

 const forthShow = document.createElement('div')
 forthShow.classList.add('tickets__forthShow')
 forthShow.style.borderBottom = 'solid 1px'
 forthShow.style.borderBottomColor = '#AFAFAF'
 forthShow.style.marginBottom = '1rem'
 tickets.appendChild(forthShow)

 const dateTitle4 = document.createElement('p')
dateTitle4.classList.add('tickets__dateTitle')
dateTitle4.innerText = 'DATE'
forthShow.appendChild(dateTitle4)

const date4 = document.createElement('p')
date4.classList.add('tickets__date')
date4.innerText = 'Sat Aug 12 2019'
forthShow.appendChild(date4)

const venueTitle4 = document.createElement('p')
venueTitle4.classList.add('tickets__venueTitle')
venueTitle4.innerText = 'VENUE'
forthShow.appendChild(venueTitle4)

const venue4 = document.createElement('p')
venue4.classList.add('tickets__venue')
venue4.innerText = 'Hyatt Agency'
forthShow.appendChild(venue4)

const locationTitle4 = document.createElement('p')
locationTitle4.classList.add('tickets__locationTitle')
locationTitle4.innerText = 'LOCATION'
forthShow.appendChild(locationTitle4)

const local4 = document.createElement('p')
local4.classList.add('tickets__local')
local4.innerText = 'San Fancisco, CA'
forthShow.appendChild(local4)

const buyTickets4 = document.createElement('button')
buyTickets4.classList.add('tickets__buyTickets')
buyTickets4.innerText = 'BUY TICKET'
forthShow.appendChild(buyTickets4)

// end of forth card

const fifthShow = document.createElement('div')
fifthShow.classList.add('tickets__fifthShow')
fifthShow.style.borderBottom = 'solid 1px'
fifthShow.style.borderBottomColor = '#AFAFAF'
fifthShow.style.marginBottom = '1rem'
tickets.appendChild(fifthShow)

const dateTitle5 = document.createElement('p')
dateTitle5.classList.add('tickets__dateTitle')
dateTitle5.innerText = 'DATE'
fifthShow.appendChild(dateTitle5)

const date5 = document.createElement('p')
date5.classList.add('tickets__date')
date5.innerText = 'Fri Sep 05 2019'
fifthShow.appendChild(date5)

const venueTitle5 = document.createElement('p')
venueTitle5.classList.add('tickets__venueTitle')
venueTitle5.innerText = 'VENUE'
fifthShow.appendChild(venueTitle5)

const venue5 = document.createElement('p')
venue5.classList.add('tickets__venue')
venue5.innerText = 'Moscow Center'
fifthShow.appendChild(venue5)

const locationTitle5 = document.createElement('p')
locationTitle5.classList.add('tickets__locationTitle')
locationTitle5.innerText = 'LOCATION'
fifthShow.appendChild(locationTitle5)

const local5 = document.createElement('p')
local5.classList.add('tickets__local')
local5.innerText = 'San Fancisco, CA'
fifthShow.appendChild(local5)

const buyTickets5 = document.createElement('button')
buyTickets5.classList.add('tickets__buyTickets')
buyTickets5.innerText = 'BUY TICKET'
fifthShow.appendChild(buyTickets5)

// end of fifth card

const sixthShow = document.createElement('div')
sixthShow.classList.add('tickets__sixthShow')
sixthShow.style.borderBottom = 'solid 1px'
sixthShow.style.borderBottomColor = '#AFAFAF'
sixthShow.style.marginBottom = '1rem'
tickets.appendChild(sixthShow)

const dateTitle6 = document.createElement('p')
dateTitle6.classList.add('tickets__dateTitle')
dateTitle6.innerText = 'DATE'
sixthShow.appendChild(dateTitle6)

const date6 = document.createElement('p')
date6.classList.add('tickets__date')
date6.innerText = 'Wed Aug 11 2019'
sixthShow.appendChild(date6)

const venueTitle6 = document.createElement('p')
venueTitle6.classList.add('tickets__venueTitle')
venueTitle6.innerText = 'VENUE'
sixthShow.appendChild(venueTitle6)

const venue6 = document.createElement('p')
venue6.classList.add('tickets__venue')
venue6.innerText = 'Pres Club'
sixthShow.appendChild(venue6)

const locationTitle6 = document.createElement('p')
locationTitle6.classList.add('tickets__locationTitle')
locationTitle6.innerText = 'LOCATION'
sixthShow.appendChild(locationTitle6)

const local6 = document.createElement('p')
local6.classList.add('tickets__local')
local6.innerText = 'San Fancisco, CA'
sixthShow.appendChild(local6)

const buyTickets6 = document.createElement('button')
buyTickets6.classList.add('tickets__buyTickets')
buyTickets6.innerText = 'BUY TICKET'
sixthShow.appendChild(buyTickets6)


