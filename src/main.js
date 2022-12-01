console.log("hello world")

new Promise((resolve, reject) => {
    const div = document.querySelector("#test")
    setTimeout(() => {
        div.innerHTML = "B"
    }, 1500)
    setTimeout(() => reject("An error happened!"), 1000)
    // cypress prints error correctly, when promise rejects with an error ie:
    // setTimeout(() => reject(new Error("aa")), 1000)
})
