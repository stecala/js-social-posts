const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked" : true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked" : false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked" : true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked" : false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
         "is_liked" : false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
         "is_liked" : true,
        "created": "2021-12-11"
    }
]
//* create const of the container of Post and button
const postContainer = document.getElementById('container')

//! we have to create the post in a cycle
posts.forEach((element)=>{
    const {id, content, media, author, likes} = element

    //! change data format
    changeDate(element)
    let newPost = document.createElement('div')
    newPost.innerHTML = `<div class="post">
                                <div class="post__header">
                                    <div class="post-meta">
                                        <div class="post-meta__icon" id="profile-${id}">
                                            <img class="profile-pic" src="${author.image}" alt="${author.name}">
                                        </div>
                                        <div class="post-meta__data">
                                            <div class="post-meta__author">${author.name}</div>
                                            <div class="post-meta__time">${element.created}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="post__text">${content}</div>
                                <div class="post__image">
                                    <img src="${media}" alt="">
                                </div>
                                <div class="post__footer">
                                    <div class="likes js-likes">
                                        <div class="likes__cta">
                                            <a class="like-button  js-like-button-${id}" href="javascript:;" data-postid="profile-${id}">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>
                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                                        </div>
                                    </div>
                                </div>
                            </div>`
    postContainer.append(newPost)
    
    //! transform in green the already liked post
    let likeBtn = document.querySelector(`.js-like-button-${id}`)
    if(element.is_liked){
        addClass(likeBtn, 'like-button--liked')
    }

    //! click on button will change the color of the button
    let likesContainer=document.getElementById(`like-counter-${id}`)
    likeBtn.addEventListener('click',()=>{
        if(!element.is_liked){
            addClass(likeBtn, 'like-button--liked')
            likesContainer.innerHTML= ++element.likes
        }
        else
        {
            removeClass(likeBtn, 'like-button--liked')
            likesContainer.innerHTML= --element.likes
        } 
        element.is_liked = !element.is_liked
    })

    //! profile picture
    let profilePicContainer = document.getElementById(`profile-${id}`);
    let imgNull=profilePicContainer.children
    if (author.image == null || author.image == 'null') {
        addClass(profilePicContainer, 'profile-pic-default')
        imgNull[0].remove()
        let firstLetter = document.createElement('span')
        let firstLettersToOutput=author.name.split(" ").slice(0,2).map(element => element[0]).join('');
        firstLetter.innerHTML= firstLettersToOutput
        profilePicContainer.append(firstLetter)
    }
})



function changeDate(element){
    element.created = element.created.split("-");
    element.created.reverse()
    element.created = element.created.join('/')
}


function addClass(elementToAddTheClass, classToAdd){
    elementToAddTheClass.classList.add(classToAdd)
}

function removeClass(elementToRemoveTheClass, classToRemove){
    elementToRemoveTheClass.classList.remove('like-button--liked')
}