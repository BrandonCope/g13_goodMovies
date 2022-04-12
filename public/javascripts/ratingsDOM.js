let ratingDelButton = document.querySelectorAll(".rate-btn-delete")
ratingDelButton.forEach((button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const ratingElId = e.target.id
    const ratingId = ratingElId.split('-')[1]

    const res = await fetch(`/ratingApi/${ratingId}`, {
      method: "DELETE"
    })

    const data = await res.json()

    if (data.message === "Success") {
      const delForm = document.querySelector(".edit_delete_rating_buttons");
      delForm.remove()

      const containerAdd = document.querySelector('.ratingDom');
      const newRating = document.createElement('div');

      newRating.setAttribute("id", `removableRatingForm`)
      newRating.innerHTML =
        // `<form action="/movies/${data.movieId}" method='get'>` +
        `<a href="javascript:history.go(0)">` +
        // `<input type='hidden' name='_csrf' value=csrfToken></input>` +
        `<button type="submit" id='rating_button'> Add New Rating </button> </a>`
      // `</form>`

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
      // `<div class='edit_delete_rating_buttons'>` +
      `<div id='user_rating' > ${data.newRating.rating} </div>` +
      `<a class='ratingDeleteBtn' href='/ratings/${data.newRating.id}/edit'>` +
      `<button class='btn-edit' id='edit-${data.newRating.id}' type='submit'> Edit Rating </button> </a>` +

      `<div id='ratingDeleteForm'>` +
      `<form action="/movies/${data.newRating.movie_id}" method='post'>` +
      `<input type='hidden' name='_csrf' value=csrfToken></input>` +
      `<button class='rate-btn-delete' type="submit" id='ratingDelete-${data.newRating.id}'> Delete Rating </button> </form> </div>`
    // `</div>`

    containerAdd.appendChild(editRating)

    let ratingDelButton = document.querySelectorAll(".rate-btn-delete")
    ratingDelButton.forEach((button) => {
      button.addEventListener("click", async (e) => {
        e.preventDefault();
        const ratingElId = e.target.id
        const ratingId = ratingElId.split('-')[1]

        const res = await fetch(`/ratingApi/${ratingId}`, {
          method: "DELETE"
        })

        const data = await res.json()

        if (data.message === "Success") {
          const delForm = document.querySelector(".edit_delete_rating_buttons");
          delForm.remove()

          const containerAdd = document.querySelector('.ratingDom');
          const newRating = document.createElement('div');

          newRating.setAttribute("id", `removableRatingForm`)
          newRating.innerHTML =
            // `<form action="/movies/${data.movieId}" method='get'>` +
            `<a href="javascript:history.go(0)">` +
            // `<input type='hidden' name='_csrf' value=csrfToken></input>` +
            `<button type="submit" id='rating_button'> Add New Rating </button> </a>`
          // `</form>`

          containerAdd.appendChild(newRating)

          rateForm.addEventListener("submit", ratingAddDOM)
        }
      })
    })
  }
})
