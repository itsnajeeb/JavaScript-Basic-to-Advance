function createToaster(config) {
    
    return function (message) {
        let div = document.createElement('div');
        div.className = `${config.theme === "dark" ? " bg-gray-700 text-white " : "bg-gray-100 text-black "}py-3 px-3 rounded `;
        div.textContent = message

        document.querySelector('.parent').appendChild(div)
        setTimeout(() => {
            document.querySelector('.parent').removeChild(div)
        }, config.duration * 1000);

        if (config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector('.parent').className += `${config.positionX === "right" ? "right-5" : "left left-5"} ${config.positionY === "top" ? "top-5" : "bottom-5"}`
        }
    }

}
const configObject = {
    positionX: "right",
    positionY: "top",
    duration: 5,
    theme: "light"
}
let toaster = createToaster(configObject)


toaster("Downloading start")
setTimeout(() => {
    toaster("Download Completed")
}, configObject.duration * 1000);


