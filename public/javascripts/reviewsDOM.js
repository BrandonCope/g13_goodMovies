const deleteDOM = async (e) => {
    e.preventDefault();
    const reviewId = e.target.id

    const res = await fetch(`/reviewApi/${reviewId}`, {
        method: "DELETE"
    })
    const data = await res.json()

    if (data.message === "Success") {
        const container = document.querySelector(`.review-container-${reviewId}`)
        container.remove()
    }
}

let deleteButton = document.querySelectorAll(".btn-delete")
deleteButton.forEach((button) => {
    button.addEventListener("click", async (e) => {
        e.preventDefault();
        const reviewId = e.target.id

        const res = await fetch(`/reviewApi/${reviewId}`, {
            method: "DELETE"
        })
        const data = await res.json()

        if (data.message === "Success") {
            const container = document.querySelector(`.review-container-${reviewId}`)
            container.remove()
        }
    })
})


let reviewForm = document.querySelector(".review-form")
reviewForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(reviewForm);
    const movieId = formData.get('movieId')
    const review_title = formData.get('review_title')
    const summary = formData.get('summary')
    const _csrf = formData.get('_csrf')

    const body = {
        movieId,
        review_title,
        summary,
        _csrf
    }

    const res = await fetch('/reviewApi', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    console.log(data)

    if (data.message === "Success") {
        const container = document.querySelector('.user-review');
        const newReview = document.createElement('div');

        newReview.setAttribute("class", `review-container-${data.review.id}`)
        newReview.innerHTML = "<div> <i> Posted by:  " + data.firstName + "</i> </div>" +
            '<div> <b>' + data.review.review_title + "</b> </div>" +
            '<div class="review-summary">' + data.review.summary + "</div>" +
            `<a href="/reviews/${data.review.id}/edit">` +
            `<button class='btn-edit' id="edit-${data.review.id}" type='submit'> Edit </button>` +
            "</a>" +
            `<form action="/movies/${data.review.movie_id}" method='post'>` +
            `<input type='hidden' name='_csrf' value=csrfToken></input>` +
            `<button class='btn-delete' id="${data.review.id}" type='submit'> Delete </button>` +
            "</form>"

        container.insertBefore(newReview, container.firstChild)

        // let stylesheet = document.styleSheets[0];
        // stylesheet.backgroundColor = "aqua"

        const reviewTitle = document.querySelector(".review_title")
        const reviewSumm = document.querySelector(".review_summary")
        reviewTitle.value = ""
        reviewSumm.value = ""

        let newDelButton = document.getElementById(`${data.review.id}`);
        newDelButton.addEventListener("click", deleteDOM)
    }
})
