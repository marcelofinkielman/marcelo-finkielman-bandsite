const tickets = document.querySelector('.tickets')
tickets.style.marginLeft = '16px'
tickets.style.marginRight = '16px'
const firstShow = document.createElement('div')
firstShow.classList.add('tickets__firstShow')
firstShow.style.borderBottom = 'solid 1px'
firstShow.style.borderBottomColor = '#AFAFAF'
firstShow.style.marginBottom = '16px'

const newHeader = document.createElement('h2')
newHeader.classList.add('tickets__show')
function measure () {
newHeader.style.marginTop = '32px'
newHeader.style.marginBottom = '40px'
newHeader.style.fontWeight = '900'
}

//first show card bellow

tickets.appendChild(firstShow)
firstShow.appendChild(newHeader)
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
firstShow.appendChild(dateTitle)

const date = document.createElement('p')
date.classList.add('tickets__date')
date.innerText = 'Mon Dec 17 2018'
date.style.marginTop = '0'
date.style.marginBottom = '24px'
date.style.fontSize = '16px'
date.style.fontWeight = 'bold'
firstShow.appendChild(date)

const venueTitle = document.createElement('p')
venueTitle.classList.add('tickets__venueTitle')
venueTitle.innerText = 'VENUE'
venueTitle.style.marginTop = '20px'
venueTitle.style.marginBottom = '16px'
venueTitle.style.fontSize = '14px'
venueTitle.style.fontWeight = 'bold'
venueTitle.style.color = '#AFAFAF'
firstShow.appendChild(venueTitle)

const venue = document.createElement('p')
venue.classList.add('tickets__venue')
venue.innerText = 'Ronald Lane'
firstShow.appendChild(venue)
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
firstShow.appendChild(locationTitle)

const local = document.createElement('p')
local.classList.add('tickets__local')
local.innerText = 'San Fancisco, CA'
firstShow.appendChild(local)
local.style.marginTop = '0'
local.style.marginBottom = '24px'
local.style.fontSize = '14px'

const buyTicket = document.createElement('button')
buyTicket.classList.add('tickets__buyTicket')
buyTicket.innerText = 'BUY TICKET'
firstShow.appendChild(buyTicket)
buyTicket.style.backgroundColor = 'black'
buyTicket.style.color = 'white'
buyTicket.style.height = '50px'
buyTicket.style.width = '288px'
buyTicket.style.border = '0'
buyTicket.style.borderRadius = '4px'
buyTicket.style.fontSize = '15px'
buyTicket.style.fontWeight = '300'
buyTicket.style.marginBottom = '16px'

 //end of first card

 const secondShow = document.createElement('div')
 secondShow.classList.add('tickets__secondShow')
 secondShow.style.borderBottom = 'solid 1px'
 secondShow.style.borderBottomColor = '#AFAFAF'
 secondShow.style.marginBottom = '16px'
 tickets.appendChild(secondShow)

 const dateTitle2 = document.createElement('p')
dateTitle2.classList.add('tickets__dateTitle')
dateTitle2.innerText = 'DATE'
dateTitle2.style.marginTop = '20px'
dateTitle2.style.marginBottom = '16px'
dateTitle2.style.fontSize = '14px'
dateTitle2.style.fontWeight = 'bold'
dateTitle2.style.color = '#AFAFAF'
secondShow.appendChild(dateTitle2)

const date2 = document.createElement('p')
date2.classList.add('tickets__date')
date2.innerText = 'Tue Jul 18 2019'
date2.style.marginTop = '0'
date2.style.marginBottom = '24px'
date2.style.fontSize = '16px'
date2.style.fontWeight = 'bold'
secondShow.appendChild(date2)

const venueTitle2 = document.createElement('p')
venueTitle2.classList.add('tickets__venueTitle')
venueTitle2.innerText = 'VENUE'
venueTitle2.style.marginTop = '20px'
venueTitle2.style.marginBottom = '16px'
venueTitle2.style.fontSize = '14px'
venueTitle2.style.fontWeight = 'bold'
venueTitle2.style.color = '#AFAFAF'
secondShow.appendChild(venueTitle2)

const venue2 = document.createElement('p')
venue2.classList.add('tickets__venue')
venue2.innerText = 'Pier 3 East'
secondShow.appendChild(venue2)
venue2.style.marginTop = '0'
venue2.style.marginBottom = '24px'
venue2.style.fontSize = '14px'

const locationTitle2 = document.createElement('p')
locationTitle2.classList.add('tikets__locationTitle')
locationTitle2.innerText = 'LOCATION'
locationTitle2.style.marginTop = '20px'
locationTitle2.style.marginBottom = '16px'
locationTitle2.style.fontSize = '14px'
locationTitle2.style.fontWeight = 'bold'
locationTitle2.style.color = '#AFAFAF'
secondShow.appendChild(locationTitle2)

const local2 = document.createElement('p')
local2.classList.add('tickets__local')
local2.innerText = 'San Fancisco, CA'
secondShow.appendChild(local2)
local2.style.marginTop = '0'
local2.style.marginBottom = '24px'
local2.style.fontSize = '14px'

const buyTickets2 = document.createElement('button')
buyTickets2.classList.add('tickets__buyTickets')
buyTickets2.innerText = 'BUY TICKET'
secondShow.appendChild(buyTickets2)
buyTickets2.style.backgroundColor = 'black'
buyTickets2.style.color = 'white'
buyTickets2.style.height = '50px'
buyTickets2.style.width = '288px'
buyTickets2.style.border = '0'
buyTickets2.style.borderRadius = '4px'
buyTickets2.style.fontSize = '15px'
buyTickets2.style.fontWeight = '300'
buyTickets2.style.marginBottom = '16px'

//end of second card

 const thirdShow = document.createElement('div')
 thirdShow.classList.add('tickets__thirdShow')
 thirdShow.style.borderBottom = 'solid 1px'
 thirdShow.style.borderBottomColor = '#AFAFAF'
 thirdShow.style.marginBottom = '16px'
 tickets.appendChild(thirdShow)

 const dateTitle3 = document.createElement('p')
dateTitle3.classList.add('tickets__dateTitle')
dateTitle3.innerText = 'DATE'
dateTitle3.style.marginTop = '20px'
dateTitle3.style.marginBottom = '16px'
dateTitle3.style.fontSize = '14px'
dateTitle3.style.fontWeight = 'bold'
dateTitle3.style.color = '#AFAFAF'
thirdShow.appendChild(dateTitle3)

const date3 = document.createElement('p')
date3.classList.add('tickets__date')
date3.innerText = 'Fri Jul 22 2019'
date3.style.marginTop = '0'
date3.style.marginBottom = '24px'
date3.style.fontSize = '16px'
date3.style.fontWeight = 'bold'
thirdShow.appendChild(date3)

const venueTitle3 = document.createElement('p')
venueTitle3.classList.add('tickets__venueTitle')
venueTitle3.innerText = 'VENUE'
venueTitle3.style.marginTop = '20px'
venueTitle3.style.marginBottom = '16px'
venueTitle3.style.fontSize = '14px'
venueTitle3.style.fontWeight = 'bold'
venueTitle3.style.color = '#AFAFAF'
thirdShow.appendChild(venueTitle3)

const venue3 = document.createElement('p')
venue3.classList.add('tickets__venue')
venue3.innerText = 'View Loungue'
thirdShow.appendChild(venue3)
venue3.style.marginTop = '0'
venue3.style.marginBottom = '24px'
venue3.style.fontSize = '14px'

const locationTitle3 = document.createElement('p')
locationTitle3.classList.add('tikets__locationTitle')
locationTitle3.innerText = 'LOCATION'
locationTitle3.style.marginTop = '20px'
locationTitle3.style.marginBottom = '16px'
locationTitle3.style.fontSize = '14px'
locationTitle3.style.fontWeight = 'bold'
locationTitle3.style.color = '#AFAFAF'
thirdShow.appendChild(locationTitle3)

const local3 = document.createElement('p')
local3.classList.add('tickets__local')
local3.innerText = 'San Fancisco, CA'
thirdShow.appendChild(local3)
local3.style.marginTop = '0'
local3.style.marginBottom = '24px'
local3.style.fontSize = '14px'

const buyTickets3 = document.createElement('button')
buyTickets3.classList.add('tickets__buyTickets')
buyTickets3.innerText = 'BUY TICKET'
thirdShow.appendChild(buyTickets3)
buyTickets3.style.backgroundColor = 'black'
buyTickets3.style.color = 'white'
buyTickets3.style.height = '50px'
buyTickets3.style.width = '288px'
buyTickets3.style.border = '0'
buyTickets3.style.borderRadius = '4px'
buyTickets3.style.fontSize = '15px'
buyTickets3.style.fontWeight = '300'
buyTickets3.style.marginBottom = '16px'

//end of third card

 const forthShow = document.createElement('div')
 forthShow.classList.add('tickets__forthShow')
 forthShow.style.borderBottom = 'solid 1px'
 forthShow.style.borderBottomColor = '#AFAFAF'
 forthShow.style.marginBottom = '16px'
 tickets.appendChild(forthShow)

 const dateTitle4 = document.createElement('p')
dateTitle4.classList.add('tickets__dateTitle')
dateTitle4.innerText = 'DATE'
dateTitle4.style.marginTop = '20px'
dateTitle4.style.marginBottom = '16px'
dateTitle4.style.fontSize = '14px'
dateTitle4.style.fontWeight = 'bold'
dateTitle4.style.color = '#AFAFAF'
forthShow.appendChild(dateTitle4)

const date4 = document.createElement('p')
date4.classList.add('tickets__date')
date4.innerText = 'Sat Aug 12 2019'
date4.style.marginTop = '0'
date4.style.marginBottom = '24px'
date4.style.fontSize = '16px'
date4.style.fontWeight = 'bold'
forthShow.appendChild(date4)

const venueTitle4 = document.createElement('p')
venueTitle4.classList.add('tickets__venueTitle')
venueTitle4.innerText = 'VENUE'
venueTitle4.style.marginTop = '20px'
venueTitle4.style.marginBottom = '16px'
venueTitle4.style.fontSize = '14px'
venueTitle4.style.fontWeight = 'bold'
venueTitle4.style.color = '#AFAFAF'
forthShow.appendChild(venueTitle4)

const venue4 = document.createElement('p')
venue4.classList.add('tickets__venue')
venue4.innerText = 'Hyatt Agency'
forthShow.appendChild(venue4)
venue4.style.marginTop = '0'
venue4.style.marginBottom = '24px'
venue4.style.fontSize = '14px'

const locationTitle4 = document.createElement('p')
locationTitle4.classList.add('tikets__locationTitle')
locationTitle4.innerText = 'LOCATION'
locationTitle4.style.marginTop = '20px'
locationTitle4.style.marginBottom = '16px'
locationTitle4.style.fontSize = '14px'
locationTitle4.style.fontWeight = 'bold'
locationTitle4.style.color = '#AFAFAF'
forthShow.appendChild(locationTitle4)

const local4 = document.createElement('p')
local4.classList.add('tickets__local')
local4.innerText = 'San Fancisco, CA'
forthShow.appendChild(local4)
local4.style.marginTop = '0'
local4.style.marginBottom = '24px'
local4.style.fontSize = '14px'

const buyTickets4 = document.createElement('button')
buyTickets4.classList.add('tickets__buyTickets')
buyTickets4.innerText = 'BUY TICKET'
forthShow.appendChild(buyTickets4)
buyTickets4.style.backgroundColor = 'black'
buyTickets4.style.color = 'white'
buyTickets4.style.height = '50px'
buyTickets4.style.width = '288px'
buyTickets4.style.border = '0'
buyTickets4.style.borderRadius = '4px'
buyTickets4.style.fontSize = '15px'
buyTickets4.style.fontWeight = '300'
buyTickets4.style.marginBottom = '16px'

// end of forth card

const fifthShow = document.createElement('div')
fifthShow.classList.add('tickets__fifthShow')
fifthShow.style.borderBottom = 'solid 1px'
fifthShow.style.borderBottomColor = '#AFAFAF'
fifthShow.style.marginBottom = '16px'
tickets.appendChild(fifthShow)

const dateTitle5 = document.createElement('p')
dateTitle5.classList.add('tickets__dateTitle')
dateTitle5.innerText = 'DATE'
dateTitle5.style.marginTop = '20px'
dateTitle5.style.marginBottom = '16px'
dateTitle5.style.fontSize = '14px'
dateTitle5.style.fontWeight = 'bold'
dateTitle5.style.color = '#AFAFAF'
fifthShow.appendChild(dateTitle5)

const date5 = document.createElement('p')
date5.classList.add('tickets__date')
date5.innerText = 'Fri Sep 05 2019'
date5.style.marginTop = '0'
date5.style.marginBottom = '24px'
date5.style.fontSize = '16px'
date5.style.fontWeight = 'bold'
fifthShow.appendChild(date5)

const venueTitle5 = document.createElement('p')
venueTitle5.classList.add('tickets__venueTitle')
venueTitle5.innerText = 'VENUE'
venueTitle5.style.marginTop = '20px'
venueTitle5.style.marginBottom = '16px'
venueTitle5.style.fontSize = '14px'
venueTitle5.style.fontWeight = 'bold'
venueTitle5.style.color = '#AFAFAF'
fifthShow.appendChild(venueTitle5)

const venue5 = document.createElement('p')
venue5.classList.add('tickets__venue')
venue5.innerText = 'Moscow Center'
fifthShow.appendChild(venue5)
venue5.style.marginTop = '0'
venue5.style.marginBottom = '24px'
venue5.style.fontSize = '14px'

const locationTitle5 = document.createElement('p')
locationTitle5.classList.add('tikets__locationTitle')
locationTitle5.innerText = 'LOCATION'
locationTitle5.style.marginTop = '20px'
locationTitle5.style.marginBottom = '16px'
locationTitle5.style.fontSize = '14px'
locationTitle5.style.fontWeight = 'bold'
locationTitle5.style.color = '#AFAFAF'
fifthShow.appendChild(locationTitle5)

const local5 = document.createElement('p')
local5.classList.add('tickets__local')
local5.innerText = 'San Fancisco, CA'
fifthShow.appendChild(local5)
local5.style.marginTop = '0'
local5.style.marginBottom = '24px'
local5.style.fontSize = '14px'

const buyTickets5 = document.createElement('button')
buyTickets5.classList.add('tickets__buyTickets')
buyTickets5.innerText = 'BUY TICKET'
fifthShow.appendChild(buyTickets5)
buyTickets5.style.backgroundColor = 'black'
buyTickets5.style.color = 'white'
buyTickets5.style.height = '50px'
buyTickets5.style.width = '288px'
buyTickets5.style.border = '0'
buyTickets5.style.borderRadius = '4px'
buyTickets5.style.fontSize = '15px'
buyTickets5.style.fontWeight = '300'
buyTickets5.style.marginBottom = '16px'

// end of fifth card

const sixthShow = document.createElement('div')
sixthShow.classList.add('tickets__sixthShow')
sixthShow.style.borderBottom = 'solid 1px'
sixthShow.style.borderBottomColor = '#AFAFAF'
sixthShow.style.marginBottom = '16px'
tickets.appendChild(sixthShow)

const dateTitle6 = document.createElement('p')
dateTitle6.classList.add('tickets__dateTitle')
dateTitle6.innerText = 'DATE'
dateTitle6.style.marginTop = '20px'
dateTitle6.style.marginBottom = '16px'
dateTitle6.style.fontSize = '14px'
dateTitle6.style.fontWeight = 'bold'
dateTitle6.style.color = '#AFAFAF'
sixthShow.appendChild(dateTitle6)

const date6 = document.createElement('p')
date6.classList.add('tickets__date')
date6.innerText = 'Wed Aug 11 2019'
date6.style.marginTop = '0'
date6.style.marginBottom = '24px'
date6.style.fontSize = '16px'
date6.style.fontWeight = 'bold'
sixthShow.appendChild(date6)

const venueTitle6 = document.createElement('p')
venueTitle6.classList.add('tickets__venueTitle')
venueTitle6.innerText = 'VENUE'
venueTitle6.style.marginTop = '20px'
venueTitle6.style.marginBottom = '16px'
venueTitle6.style.fontSize = '14px'
venueTitle6.style.fontWeight = 'bold'
venueTitle6.style.color = '#AFAFAF'
sixthShow.appendChild(venueTitle6)

const venue6 = document.createElement('p')
venue6.classList.add('tickets__venue')
venue6.innerText = 'Pres Club'
sixthShow.appendChild(venue6)
venue6.style.marginTop = '0'
venue6.style.marginBottom = '24px'
venue6.style.fontSize = '14px'

const locationTitle6 = document.createElement('p')
locationTitle6.classList.add('tikets__locationTitle')
locationTitle6.innerText = 'LOCATION'
locationTitle6.style.marginTop = '20px'
locationTitle6.style.marginBottom = '16px'
locationTitle6.style.fontSize = '14px'
locationTitle6.style.fontWeight = 'bold'
locationTitle6.style.color = '#AFAFAF'
sixthShow.appendChild(locationTitle6)

const local6 = document.createElement('p')
local6.classList.add('tickets__local')
local6.innerText = 'San Fancisco, CA'
sixthShow.appendChild(local6)
local6.style.marginTop = '0'
local6.style.marginBottom = '24px'
local6.style.fontSize = '14px'

const buyTickets6 = document.createElement('button')
buyTickets6.classList.add('tickets__buyTickets')
buyTickets6.innerText = 'BUY TICKET'
sixthShow.appendChild(buyTickets6)
buyTickets6.style.backgroundColor = 'black'
buyTickets6.style.color = 'white'
buyTickets6.style.height = '50px'
buyTickets6.style.width = '288px'
buyTickets6.style.border = '0'
buyTickets6.style.borderRadius = '4px'
buyTickets6.style.fontSize = '15px'
buyTickets6.style.fontWeight = '300'
buyTickets6.style.marginBottom = '16px'