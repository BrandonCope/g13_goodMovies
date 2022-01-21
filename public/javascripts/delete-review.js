// window.addEventListener("DOMContentLoaded", () => {
    console.log('Hello')
    let deleteButton = document.querySelectorAll(".btn-delete")
    deleteButton.forEach((button) => {
        button.addEventListener("click", async (e) => {
            e.preventDefault();
            const reviewId = e.target.id 
        
            const res = await fetch(`/reviewApi/${reviewId}`, {
                method:"DELETE"
            })
            const data = await res.json()

            if(data.message === "Success") {
                const container = document.querySelector(`.review-container-${reviewId}`)
                container.remove()
            }
        })
    })


// });
