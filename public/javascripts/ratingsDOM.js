const ratingDeleteDOM = async (e) => {
  e.preventDefault();
  const ratingId = e.target.id

  const res = await fetch(`/ratingApi/${ratingId}`, {
    method: "DELETE"
  })
  const data = await res.json()

  if (data.message === "Success") {
    const container = document.querySelector(`.rating-container`)
    container.remove()
  }
}

let ratingDelButton = document.querySelectorAll(".rate-btn-delete")
console.log(ratingDelButton)
ratingDelButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const ratingId = e.target.id

  const res = await fetch(`/ratingApi/${ratingId}`, {
    method: "DELETE"
  })
  const data = await res.json()

  if (data.message === "Success") {
    const container = document.querySelector(`.rating-container`)
    container.remove()
  }
})


let ratingButton = document.getElementById("rating-button")
ratingButton.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("!!!!!!!!!!!!!!!!!!!!!!!")

  const formData = new FormData(reviewForm);
  const movieId = formData.get('movieId')
  const rating = formData.get('rating')
  const _csrf = formData.get('_csrf')

  const body = {
    movieId,
    rating,
    _csrf
  }

  const res = await fetch('/ratingApi', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  if (data.message === "Success") {
    const container = document.querySelector('.rating-form');
    const newReview = document.createElement('div');

    newReview.setAttribute("class", `review-container-${data.review.id}`)
    newReview.innerHTML = "<div>" + data.firstName + "</div>" +
      '<div>' + data.review.review_title + "</div>" +
      '<div class="review-summary">' + data.review.summary + "</div>" +
      `<a href="/reviews/${data.review.id}/edit">` +
      `<button class='btn-edit' id="edit-${data.review.id}" type='submit'> Edit </button>` +
      "</a>" +
      `<form action="/movies/${data.review.movie_id}" method='post'>` +
      `<input type='hidden' name='_csrf' value=csrfToken></input>` +
      `<button class='btn-delete' id="${data.review.id}" type='submit'> Delete </button>` +
      "</form>"

    let newDelButton = document.getElementById(`${data.rating.id}`);
    newDelButton.addEventListener("click", ratingDeleteDOM)
  }
})
