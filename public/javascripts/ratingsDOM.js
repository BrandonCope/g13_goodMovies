let ratingDelButton = document.querySelectorAll(".rate-btn-delete")
ratingDelButton.forEach((button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const ratingElId = e.target.id
    const ratingId = ratingElId.split('-')[1]
    console.log(ratingId)

    const res = await fetch(`/ratingApi/${ratingId}`, {
      method: "DELETE"
    })

    const data = await res.json()
    console.log(data)

    if (data.message === "Success") {
      const delForm = document.querySelector(".edit_delete_rating_buttons");
      delForm.remove()

      console.log(data)
      const containerAdd = document.querySelector('.ratingDom');
      const newRating = document.createElement('div');

      newRating.setAttribute("id", `removableRatingForm`)
      newRating.innerHTML =
        `<form action="/movies/${data.movieId}" method='get'>` +
        `<input type='hidden' name='_csrf' value=csrfToken></input>` +
        `<button type="submit" id='rating_button'> Add New Rating </button>` +
        `</form>`

      containerAdd.appendChild(newRating)

      rateForm.addEventListener("submit", ratingAddDOM)
    }
  })
})


let ratingForm = document.querySelector(".rating-form")
ratingForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(ratingForm);
  const userId = formData.get('userId')
  const movieId = formData.get('movieId')
  const rating = formData.get('rating')
  const _csrf = formData.get('_csrf')

  const body = {
    userId,
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
    const container = document.getElementById("removableRatingForm")
    container.remove();

    const containerAdd = document.querySelector('.ratingDom');
    const editRating = document.createElement('div');

    editRating.setAttribute("class", `edit_delete_rating_buttons`)
    editRating.innerHTML =
      `<div id="user_rating"> ${data.newRating.rating} </div>` +
      `<form action="/movies/${data.movieId}" method='get'>` +
      `<input type='hidden' name='_csrf' value=csrfToken></input>` +
      `<button type="submit" id='rating_button'> Change Rating </button>` +
      `</form>`

    containerAdd.appendChild(editRating)
  }
  // `<form class="rating-form" action="/movies/${data.movieId}" method='post'>` +
  // `<h4> Enter your rating (1-5): </h4>` +
  // `<input type='hidden' name='_csrf' value=csrfToken></input>` +
  // `<input type='hidden' name='user_id' value=user_id></input>` +
  // `<input type="text" name="rating"></input>` +
  // `<input type="hidden" name="movieId" value=movieId></input>` +
  // `<button type="submit" id='rating_button'> Rate Movie </button>` +
  // `</form>`
})
