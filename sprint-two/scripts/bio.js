

let comments = document.querySelector('.comments')

let header = document.createElement('p')
header.classList.add('commentsHeader')
header.innerText = 'Join the Conversation'
comments.appendChild(header)

let form = document.createElement('form')
form.classList.add('commentsForm')
comments.appendChild(form)


let divName = document.createElement('div')
divName.classList.add('commentsForm__divName')
form.appendChild(divName)

let profile = document.createElement('img')
profile.classList.add('commentsForm__divName-profile')
profile.src = '../Assets/Images/profile.jpg'
divName.appendChild(profile)

let labelName = document.createElement('label')
labelName.classList.add('commentsForm__divName-labelName')
labelName.innerText = 'Name'
divName.appendChild(labelName)

let inputName = document.createElement('input')
inputName.classList.add('commentsForm__divName-input')
divName.appendChild(inputName)

let divComment = document.createElement('div')
divComment.classList.add('commentsForm__divComment')
form.appendChild(divComment)

let labelComment = document.createElement('label')
labelComment.classList.add('commentsForm__divComment-labelComment')
labelComment.innerText = 'Comment'
divComment.appendChild(labelComment)

let inputComment = document.createElement('textarea')
inputComment.classList.add('commentsForm__divComment-input')
divComment.appendChild(inputComment)

let commentButton = document.createElement('button')
commentButton.classList.add('commentsForm__divComment-commentButton')
commentButton.innerText = 'COMMENT'
divComment.appendChild(commentButton)

let allComments = document.createElement('div')
allComments.classList.add('comments-allComments')
comments.appendChild(allComments)




let defaultComments = [
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
];
//function for the name, date comment in the comments section.
let commentArea = document.querySelector('.comments-allComments')

  let addComment = (comment) => {
  let commentContainer = document.createElement('div')
  commentContainer.classList.add('comments-allComments__commentContainer')
  commentArea.appendChild(commentContainer)
  let nameDate = document.createElement('div')
  nameDate.classList.add('comments-allComments__commentContainer__nameDate')
  commentContainer.appendChild(nameDate)
  
  let commentsName = document.createElement('p')
  commentsName.classList.add ('comments-allComments__commentContainer__nameDate-name')
  commentsName.innerText = comment.name
  nameDate.appendChild(commentsName)
  let commentsDate = document.createElement('p')
  commentsDate.classList.add('comments-allComments__commentContainer__nameDate-date')
  commentsDate.innerText = comment.date
  nameDate.appendChild(commentsDate)
  let commentsComment = document.createElement('p')
  commentsComment.classList.add ('comments-allComments__commentContainer-commentary')
  commentsComment.innerText = comment.comment
  commentContainer.appendChild(commentsComment)
}

function displayComments() {
  commentArea.innerHTML = ''
for (let i = 0; i < defaultComments.length; i++) {
  addComment(defaultComments[i])
} 
}

displayComments();


let newDate = () => {
  let date = Date.now()
  let today = new Date(date)
  return today.toLocaleDateString()
}

let submitForm = document.querySelector('.commentsForm')

submitForm.addEventListener('submit', function (event) {
  event.preventDefault();


  let newName = event.target.querySelector('.commentsForm__divName-input').value
  let newComment = event.target.querySelector('.commentsForm__divComment-input').value

  defaultComments.unshift({
    name: newName,
    date: newDate(),
    comment: newComment,
  })
  event.target.reset()
  displayComments()
});





/*let currentDay = function() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  if (day < 10) day = '0' + day;
  if (month < 10) month = '0' + month;
  return (`${month} / ${day} / ${year}`)
}*/

