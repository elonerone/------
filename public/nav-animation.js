import 'flowbite';
const $ = document

const home = $.querySelector("#home")
const shop = $.querySelector("#shop")
const basket = $.querySelector("#basket")
const about = $.querySelector("#about")
const contact = $.querySelector("#contact")
const animElem = $.querySelector(".anim")

home.addEventListener("mouseenter",() => {
    animElem.style.width="78px"
    animElem.style.marginRight="0px"
})
shop.addEventListener("mouseenter",() => {
    animElem.style.width="95px"
    animElem.style.marginRight="91px"
})
basket.addEventListener("mouseenter",() => {
    animElem.style.width="109px"
    animElem.style.marginRight="200px"
})
about.addEventListener("mouseenter",() => {
    animElem.style.width="105px"
    animElem.style.marginRight="328px"
})
contact.addEventListener("mouseenter",() => {
    animElem.style.width="135px"
    animElem.style.marginRight="464px"
})



