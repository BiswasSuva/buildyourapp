export default function setBodyColor({backgroundColor}) {
    document.documentElement.style.setProperty('--bodyColor', backgroundColor)
}
export  function removeBodyColor({backgroundColor}){
    document.documentElement.style.setProperty('--bodyColor',backgroundColor)

}