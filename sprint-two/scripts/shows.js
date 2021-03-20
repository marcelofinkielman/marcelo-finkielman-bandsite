const tickets = document.querySelector('.tickets')
tickets.style.marginLeft = '16px'
tickets.style.marginRight = '16px'
const oneShow = document.createElement('div')
oneShow.classList.add('tickets__oneShow')
const newHeader = document.createElement('h2')
newHeader.classList.add('tickets__show')
//first show card bellow
tickets.appendChild(oneShow)
oneShow.appendChild(newHeader)
newHeader.innerText = 'Shows'
newHeader.style.marginTop = '32px'
newHeader.style.marginBottom = '40px'
newHeader.style.fontWeight = '900'

const dateTitle = document.createElement('p')
dateTitle.classList.add('tickets__dateTitle')
dateTitle.innerText = 'DATE'
dateTitle.style.marginTop = '20px'
dateTitle.style.marginBottom = '16px'
dateTitle.style.fontSize = '14px'
dateTitle.style.fontWeight = 'bold'
dateTitle.style.color = '#AFAFAF'
oneShow.appendChild(dateTitle)

const date = document.createElement('p')
date.classList.add('tickets__date')
date.innerText = 'Mon Dec 17 2018'
date.style.marginTop = '0'
date.style.marginBottom = '24px'
date.style.fontSize = '16px'
date.style.fontWeight = 'bold'
oneShow.appendChild(date)

const venueTitle = document.createElement('p')
venueTitle.classList.add('tickets__venueTitle')
venueTitle.innerText = 'VENUE'
venueTitle.style.marginTop = '20px'
venueTitle.style.marginBottom = '16px'
venueTitle.style.fontSize = '14px'
venueTitle.style.fontWeight = 'bold'
venueTitle.style.color = '#AFAFAF'
oneShow.appendChild(venueTitle)

const venue = document.createElement('p')
venue.classList.add('tickets__venue')
venue.innerText = 'Ronald Lane'
oneShow.appendChild(venue)
venue.style.marginTop = '0'
venue.style.marginBottom = '24px'
venue.style.fontSize = '14px'

const locationTitle = document.createElement('p')
locationTitle.classList.add('tikets__locationTitle')
locationTitle.innerText = 'LOCATION'
locationTitle.style.marginTop = '20px'
locationTitle.style.marginBottom = '16px'
locationTitle.style.fontSize = '14px'
locationTitle.style.fontWeight = 'bold'
locationTitle.style.color = '#AFAFAF'
oneShow.appendChild(locationTitle)

const local = document.createElement('p')
local.classList.add('tickets__local')
local.innerText = 'San Fancisco, CA'
oneShow.appendChild(local)
local.style.marginTop = '0'
local.style.marginBottom = '24px'
local.style.fontSize = '14px'

const buyTicket = document.createElement('button')
buyTicket.classList.add('tickets__buyTicket')
buyTicket.innerText = 'BUY TICKET'
oneShow.appendChild(buyTicket)
buyTicket.style.backgroundColor = 'black'
buyTicket.style.color = 'white'
buyTicket.style.height = '50px'
buyTicket.style.width = '288px'
buyTicket.style.border = '0'



