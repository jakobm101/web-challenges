console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
  console.log('button');
  
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement('article')
newPost.classList.add('post')
const newPostP = document.createElement('p')
newPostP.classList.add('post__content')
newPostP.textContent = "New Post is amazing"
const newPostFooter = document.createElement('footer')
newPostFooter.classList.add('post__footer')
const span = document.createElement('span')
span.classList.add('post__username')
span.textContent = 'Jakob'

const buttonLike = document.createElement('button')
buttonLike.classList.add('post__button')
buttonLike.textContent = '♥ Like'
buttonLike.setAttribute('type', 'button')
buttonLike.setAttribute('data-js', 'like-button-02')
buttonLike.addEventListener('click', handleLikeButtonClick)

document.body.append(newPost)
newPost.append(newPostP)
newPost.append(newPostFooter)
newPostFooter.append(span)
newPostFooter.append(buttonLike)

