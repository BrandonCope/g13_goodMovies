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

    if (data.message === "Success") {
        const container = document.querySelector('.user-review');
        const newReview = document.createElement('div');

        newReview.setAttribute("class", `review-container-${data.review.id}`)
        newReview.innerHTML = "<div> <i> Posted by --  " + data.firstName + "</i> </div>" +
            '<div> <b>' + data.review.review_title + "</b> </div>" +
            '<div class="review-summary">' + data.review.summary + "</div>" +
            `<div style="display:flex" ><a href="/reviews/${data.review.id}/edit">` +
            `<button class='btn-edit' id="edit-${data.review.id}" type='submit'> Edit </button>` +
            "</a>" +
            `<form action="/movies/${data.review.movie_id}" method='post'>` +
            `<input type='hidden' name='_csrf' value=csrfToken></input>` +
            `<button class='btn-delete' id="${data.review.id}" type='submit'> Delete </button></div>` +
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
    } else {
        const errors = document.querySelector('.review_right')
        errors.innerHTML = ''

        const errorP = document.createElement('p')
        errorP.setAttribute("id", 'errors')
        errorP.innerHTML = '<b>The following error(s) occurred:</b>'
        errors.append(errorP)

        const errorUl = document.createElement('ul');
        errorUl.setAttribute("id", 'errors')
        errorP.append(errorUl)

        for (let error of data.errors) {
            let newLi = document.createElement('li')
            newLi.innerHTML = error
            errorUl.append(newLi)
        }
    }
})
