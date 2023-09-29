import "./public/normalize.css"
import "./public/main.css"
import "./public/scss/main.scss"

const burger = document.querySelector(".burger")
const header = document.querySelector(".header")
const html = document.querySelector("html")

burger.addEventListener("click", () => {
	burger.classList.toggle("active")
	header.classList.toggle("header-active")
	html.classList.toggle("disabled-scroll")
	header.classList.toggle("disabled-scroll")
})
