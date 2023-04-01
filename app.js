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
    {userName: 'Jack Sparrow', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus qui quasi non maiores id? Atque libero est animi modi obcaecati adipisci dolorem facilis ducimus, maiores ipsum? Error quo labore deleniti.', img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {userName: 'Michael Li', text: "That was a great idea Jack!Love what you're doing)", img: 'https://images.unsplash.com/photo-1635107510862-53886e926b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
    {userName: 'Lisa Larson', text: "One more step to dream 😃", img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
]

function renderMessages() { 
    messages.innerHTML = ''
    for (let i = 0; i < messagesList.length; i++) {
        const message = messagesList[i]
        messages.innerHTML += `
        <div class="message" data-message="${i}">
        <div class="input-idea card card-message">
            <div class="profile">
                <div class="profile-picture">
                    <img src="${message.img}" alt="">
                </div>
               <div class="idea">
                    <h4>${message.userName}</h4>
                    <p>${message.text}</p>
                </div>
            </div>
            <div class="btns">
                <button class="btn btn-like" type="button" data-like="3"><i class="fa-regular fa-heart"></i></button>
                <button class="btn btn-mes" type="button"><i class="fa-regular fa-message"></i></button>
                <button class="btn btn-mes btn-trash" type="button"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
        
    </div>
        `
    }

    likeBtn()
    count()
    calcProgress()
    deleteMessae()
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
            img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
        messagesList.push(idea)
        renderMessages()
        userIdeaInput.value = ''
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


// Delete button 


function deleteMessae() {
    const deleteBtn = document.querySelectorAll('.btn-trash')

    deleteBtn.forEach(item => {
        item.addEventListener('click', () => {
            const element = item.parentNode.parentNode.parentNode.dataset.message

            messagesList.splice(element, 1)
            renderMessages()
        })
    })
    addComment()
}

function addComment() {
    const commentBtn = document.querySelectorAll('.btn-mes')

    commentBtn.forEach(item => {
        item.addEventListener('click', () => {
            const element = item.parentNode.parentNode.parentNode

            element.innerHTML += `
            <div class="comment">
                <div><i class="fa-solid fa-arrow-turn-up"></i></div>
                    <div class="input-idea card comment-item">
                    <div class="profile">
                        <div class="profile-picture">
                            <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                        </div>
                    <div class="idea">
                        <textarea name="idea" id="" placeholder="write your new idea...." required ></textarea>
                    </div>
                    </div>

                    <div class="send-btn">
                        <button class="btn" type="button" id="addBtn"><img src="img/message.png" alt=""></button>
                    </div>
                </div>
            </div>
            `
            
        })
    })
}

function pushComment() {
    
}
