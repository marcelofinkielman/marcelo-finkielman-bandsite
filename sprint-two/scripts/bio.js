

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

let postedComments = document.createElement('div')
postedComments.classList.add('comments__postedComments')
comments.appendChild(postedComments)


let defaultComments = [
  {
      name: 'Micheal Lyons',
      date: '12/12/2018',
      comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
  },
  {
      name: 'Gary Wong',
      date: '12/18/2018',
      comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
  },
  {
      name: 'Theodore Duncan',
      date: '12/18/2018',
      comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
  }
];

function displayComments() {
  for (let i = 0; i < defaultComments.length; i++) {
      let commentsName = document.createElement('p');
      commentsName.classList.add('dishes__name');
      commentsName.innerText = defaultComments[i].name;
      postedComments.appendChild(commentsName);
  
      let commentsDate = document.createElement('p');
      commentsDate.classList.add('dishes__cuisine');
      commentsDate.innerText = defaultComments[i].date;
      postedComments.appendChild(commentsDate);
  
      let commentsComment = document.createElement('p');
      commentsComment.classList.add('dishes__commentsComment');
      commentsComment.innerText = defaultComments[i].comment;
      postedComments.appendChild(commentsComment);
  }
};

displayComments();