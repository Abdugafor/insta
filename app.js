// liked button animation

function likeBtn() {
    const btnLike = document.querySelectorAll('.btn-like')

    btnLike.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('liked')) {
                item.classList.remove('liked')
                item.classList.add('unliked')
            }else {
                item.classList.add('liked')
                item.classList.remove('unliked')
            }
        })
    })
}

// Render messages 


const messages =  document.querySelector('.messages')

const messagesList = [
    {userName: 'Jack Sparrow', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus qui quasi non maiores id? Atque libero est animi modi obcaecati adipisci dolorem facilis ducimus, maiores ipsum? Error quo labore deleniti.', img: 'profile_picture-1.png'},
    {userName: 'Michael Li', text: "That was a great idea Jack!Love what you're doing)", img: 'profile_picture-2.png'},
    {userName: 'Lisa Larson', text: "One more step to dream 😃", img: 'profile_picture-3.png'},
]

function renderMessages() { 
    messages.innerHTML = ''
    for (let i = 0; i < messagesList.length; i++) {
        const message = messagesList[i]
        messages.innerHTML += `
        <div class="message">
        <div class="input-idea card card-message">
            <div class="profile">
                <div class="profile-picture">
                    <img src="img/profile-picture/${message.img}" alt="">
                </div>
               <div class="idea">
                    <h4>${message.userName}</h4>
                    <p>${message.text}</p>
                </div>
            </div>
            <div class="btns">
                <button class="btn btn-like" type="button" data-like="3"><i class="fa-regular fa-heart"></i></button>
                <button class="btn btn-mes" type="button"><img src="img/message.png" alt=""></button>
            </div>
        </div>
        
    </div>
        `
    }

    likeBtn()
    count()
    calcProgress()
}


// User ideas

const userIdeaInput = document.querySelector('textarea'),
      addIdeaBtn = document.querySelector('#addBtn'),
      inputBlock = document.querySelector('.input-idea')


addIdeaBtn.addEventListener('click', addIdea)

function addIdea() {
    if (userIdeaInput.value === '') {
        return
    }else {
        const idea = {
            userName: 'Abdugafor Gafarov',
            text: userIdeaInput.value,
            img: 'profile_picture-1.png'
        }
        messagesList.push(idea)
        renderMessages()
    }
}
likeBtn()

// Counter 

const counter = document.querySelector('.max'),
      success = document.querySelector('.success')

function count() {
    if (messagesList.length === 10) {
        success.style.display = 'block'
        inputBlock.style.display = 'none'
    }else {
        inputBlock.style.display = 'flex'
        success.style.display = 'none'

    }
    counter.innerHTML = `${messagesList.length}/10`
}

renderMessages()
 

// progress bar


function calcProgress() {
    const progressBar = document.querySelector('.row-item')

    if (messagesList.length <= 3) {
        progressBar.style.background = "var(--red)"
    }else if (messagesList.length > 3 && messagesList.length < 7) {
        progressBar.style.background = "var(--orange)"
    }else {
        progressBar.style.background = "var(--green)"
    }
    
    progressBar.style.width = `${messagesList.length * 10}%`
}

calcProgress()

