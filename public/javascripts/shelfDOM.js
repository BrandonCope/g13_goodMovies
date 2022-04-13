// const deleteDOM = async (e) => {
//   e.preventDefault();
//   const reviewId = e.target.id

//   const res = await fetch(`/reviewApi/${reviewId}`, {
//       method: "DELETE"
//   })
//   const data = await res.json()

//   if (data.message === "Success") {
//       const container = document.querySelector(`.review-container-${reviewId}`)
//       container.remove()
//   }
// }

// let deleteButton = document.querySelectorAll(".btn-delete")
// deleteButton.forEach((button) => {
//   button.addEventListener("click", async (e) => {
//       e.preventDefault();
//       const reviewId = e.target.id

//       const res = await fetch(`/reviewApi/${reviewId}`, {
//           method: "DELETE"
//       })
//       const data = await res.json()

//       if (data.message === "Success") {
//           const container = document.querySelector(`.review-container-${reviewId}`)
//           container.remove()
//       }
//   })
// })


let shelfForm = document.querySelector(".shelf-form")
shelfForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(shelfForm);
  const shelf_title = formData.get('shelf_title')
  const _csrf = formData.get('_csrf')

  const body = {
    shelf_title,
    _csrf
  }

  const res = await fetch('/shelvesApi', {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  if (data.message === "Success") {
    const container = document.querySelector('.shelf-tiles');
    const newShelf = document.createElement('div');
    newShelf.setAttribute("class", 'shelf-item')

    newShelf.innerHTML =
      `<a href='/shelves/${data.shelf.id}'>` +
      `<img src='https://www.chicagofilmarchives.org/wp-content/uploads/2013/12/PageCollection_horizontal1.jpg' class='shelf-img' />` +
      `<div class='shelf-title'> ${data.shelf.shelf_title} </div> </a>`

    container.insertBefore(newShelf, container.firstChild)

    const shelfTitle = document.querySelector(".shelf_title")
    shelfTitle.value = ""
    // let newDelButton = document.getElementById(`${data.review.id}`);
    // newDelButton.addEventListener("click", deleteDOM)
  } else {
    const errors = document.querySelector('.shelf_errors')
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
