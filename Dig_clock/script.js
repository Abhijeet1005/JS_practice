const clock = document.getElementById('clock')

setInterval(() => {
    const date = new Date()
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours()>= 12?'PM':'AM'}`
}, 1000);