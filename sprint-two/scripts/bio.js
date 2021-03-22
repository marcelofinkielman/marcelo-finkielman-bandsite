

let comments = document.querySelector('.comments')

let header = document.createElement('p')
header.classList.add('comments__header')
header.innerText = 'Join the Conversation'
comments.appendChild(header)

let form = document.createElement('form')
form.classList.add('comments__form')
comments.appendChild(form)



let divName = document.createElement('div')
divName.classList.add('comments__form__divName')
form.appendChild(divName)

let profile = document.createElement('img')
profile.classList.add('comments__form__divName__profile')
profile.src = '../Assets/Images/profile.jpg'
divName.appendChild(profile)

let labelName = document.createElement('label')
labelName.classList.add('comments__form__divName__labelName')
labelName.innerText = 'Name'
divName.appendChild(labelName)

let inputName = document.createElement('input')
inputName.classList.add('comments__form__divName__input')
divName.appendChild(inputName)

let divComment = document.createElement('div')
divComment.classList.add('comments__form__divComment')
form.appendChild(divComment)

let labelComment = document.createElement('label')
labelComment.classList.add('comments__form__divComment__labelComment')
labelComment.innerText = 'Comment'
divComment.appendChild(labelComment)

let inputComment = document.createElement('textarea')
inputComment.classList.add('comments__form__divComment__input')
divComment.appendChild(inputComment)

let commentButton = document.createElement('button')
commentButton.classList.add('comments__form__divComment__commentButton')
commentButton.innerText = 'COMMENT'
divComment.appendChild(commentButton)

let allComments = document.createElement('div')
allComments.classList.add('comments__allComments')
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
let commentArea = document.querySelector('.comments__allComments')
function displayComments() {
  

  for (let i = defaultComments.length -1; i >= 0; i--) {
    addComment(defaultComments[i])

  };
};

displayComments();

document.querySelector("form.comments__form button").onclick = function (event) {
  event.preventDefault()
}

function addComment(comment) {
  let commentContainer = document.createElement('div');
  commentContainer.classList.add('comments__allComments__commentContainer')
  let commentsName = document.createElement('p');
  commentsName.classList.add('comments__allComments__commentContainer__name');
  commentsName.innerText = comment.name;
  commentContainer.appendChild(commentsName);
  let commentsDate = document.createElement('p');
  commentsDate.classList.add('comments__allComments__commentContainer__date');
  commentsDate.innerText = comment.date;
  commentContainer.appendChild(commentsDate);
  let commentsComment = document.createElement('p');
  commentsComment.classList.add('comments__allComments__commentCointainer__commentary');
  commentsComment.innerText = comment.comment;
  commentContainer.appendChild(commentsComment);
  commentArea.insertBefore(commentContainer, commentArea.firstChild)
  
  
}