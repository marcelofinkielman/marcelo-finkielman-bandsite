let comments = document.querySelector('.comments')

let header = document.createElement('p')
header.classList.add('comments__header')
header.innerText = 'Join the Conversation'
comments.appendChild(header)

let form = document.createElement('form')
form.classList.add('comments__form')
comments.appendChild(form)


let divName = document.createElement('div')
divName.classList.add('comments__divName')
form.appendChild(divName)

let profile = document.createElement('img')
profile.classList.add('comments__profile')
profile.src = '../Assets/Images/profile.jpg'
divName.appendChild(profile)

let labelName = document.createElement('label')
labelName.classList.add('comments__labelName')
labelName.innerText = 'Name'
divName.appendChild(labelName)

let inputName = document.createElement('input')
inputName.classList.add('comments__input1')
divName.appendChild(inputName)

let divComment = document.createElement('div')
divComment.classList.add('comments__divComment')
form.appendChild(divComment)

let labelComment = document.createElement('label')
labelComment.classList.add('comments__labelComment')
labelComment.innerText = 'Comment'
divComment.appendChild(labelComment)

let inputComment = document.createElement('textarea')
inputComment.classList.add('comments__input2')
divComment.appendChild(inputComment)

let commentButton = document.createElement('button')
commentButton.classList.add('comments__commentButton')
commentButton.innerText = 'COMMENT'
divComment.appendChild(commentButton)

let allComments = document.createElement('div')
allComments.classList.add('comments__allComments')
comments.appendChild(allComments)




/* let defaultComments = [
  {
    name: 'Micheal Lyons',
    date: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
  },
  {
    name: 'Gary Wong',
    date: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
  },
  {
    name: 'Theodore Duncan',
    date: '11/15/2018',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
  }
]; */
//function for the name, date comment in the comments section.


let addComment = (commentary) => {
  let commentContainer = document.createElement('div')
  commentContainer.classList.add('comments__commentContainer')
  allComments.appendChild(commentContainer)
  let grayCircle = document.createElement('div')
  grayCircle.classList.add('comments__grayCircle')
  commentContainer.appendChild(grayCircle)
  let containAll = document.createElement('div')
  containAll.classList.add('comments__containAll')
  commentContainer.appendChild(containAll)
  let nameDate = document.createElement('div')
  nameDate.classList.add('comments__nameDate')
  containAll.appendChild(nameDate)
  let commentsName = document.createElement('p')
  commentsName.classList.add('comments__name')
  commentsName.innerText = commentary.name
  nameDate.appendChild(commentsName)
  let commentsDate = document.createElement('p')
  commentsDate.classList.add('comments__date')
  commentsDate.innerText = newDate(commentary.timestamp)
  nameDate.appendChild(commentsDate)
  let commentsComment = document.createElement('p')
  commentsComment.classList.add('comments__commentary')
  commentsComment.innerText = commentary.comment
  containAll.appendChild(commentsComment)
  
}

function displayComments(defaultComments) {
  
  allComments.innerHTML = ''
  for (let i = defaultComments.length -1; i >= 0; i--) {
    addComment(defaultComments[i])
  }
}


let newDate = (commentsTimestamp) => {
  let today = new Date(commentsTimestamp)
  return today.toLocaleDateString()
}



let submitForm = document.querySelector('.comments__form')

submitForm.addEventListener('submit', function (event) {
  
  event.preventDefault();
  let newName = event.target.querySelector('.comments__input1').value
  let newComment = event.target.querySelector('.comments__input2').value
  
  
  postComment(newName, newComment)
  
});



//===================================== axios ============================

const apiKey = "8ca0d09d-400e-4880-b444-d14536351f0f"

function getComment() {
  axios.get(`https://project-1-api.herokuapp.com/comments?api_key=<${apiKey}>`)
    .then((res) => {
      console.log(res)
      displayComments(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
}
getComment()

function postComment(name, comment) {
  axios.post(`https://project-1-api.herokuapp.com/comments?api_key=<${apiKey}>`, {
    "name": name,
    "comment": comment
  })
    .then((res) => {
      console.log(res)
      getComment()
      displayComments()
    })
    .catch(err => {
      console.log(err)
    })
}
