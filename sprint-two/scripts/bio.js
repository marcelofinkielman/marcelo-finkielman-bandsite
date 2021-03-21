

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
commentButton.classList.add('comments__form__commentButton')
commentButton.innerText = 'COMMENT'
form.appendChild(commentButton)

