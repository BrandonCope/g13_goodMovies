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
      const html = `<div> Your rating has been removed.</div>`
      const delContainer = document.querySelector("#ratingDeleteContainer")
      const delForm = document.getElementById("ratingDeleteForm")

      delForm.remove()
      delContainer.appendChild(html)
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
  }
})
