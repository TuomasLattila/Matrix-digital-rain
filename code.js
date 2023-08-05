const canvas = document.getElementById("canvas-element")
const context = canvas.getContext("2d")
const drops1 = []
const drops2 = []
const text1 = []
const text2 = []
const characters = "｢｣ ｦ ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ｱ ｲ ｳ ｴ ｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ"
const fontSize = 30
const spacer = -15
const speed = 40

canvas.height = window.innerHeight - 5
canvas.width = window.innerWidth - 5
const columns = canvas.width/(fontSize + spacer)

context.translate(canvas.width, 0)
context.scale(-1, 1)

context.font = "normal " + fontSize + "px Courier"
context.textAlign = "center"

for (let i = 0; i < columns; i++)   {
    drops1[i] = Math.random()*70 - 70
    drops2[i] = drops1[i] + Math.random()*30 - 40
}

const draw = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.1)"
    context.fillRect(0,0, canvas.width, canvas.height)

    for (let j = 0; j < columns; j++)   {
        context.fillStyle = "#FF0000"
        context.fillText(text1[j], j*(fontSize + spacer), drops1[j]*(fontSize + spacer))
        context.fillStyle = "#FF7276"
        context.fillText(text2[j], j*(fontSize + spacer), drops2[j]*(fontSize + spacer))
    }

    for (let j = 0; j < columns; j++)   {
        drops1[j]++
        drops2[j]++
        text1[j] = characters.charAt(Math.floor(Math.random()*Math.random()*characters.length))
        text2[j] = characters.charAt(Math.floor(Math.random()*Math.random()*characters.length))
        context.fillStyle = "#ffffff"
        context.fillText(text1[j], j*(fontSize + spacer), drops1[j]*(fontSize + spacer))
        context.fillStyle = "#ffffff"
        context.fillText(text2[j], j*(fontSize + spacer), drops2[j]*(fontSize + spacer))

        if (drops1[j]*(fontSize + spacer) > canvas.height + fontSize)   {
            drops1[j] = Math.random()*70 - 70
        }    
        if (drops2[j]*(fontSize + spacer) > canvas.height + fontSize)   {
            drops2[j] = Math.random()*70 - 70
        }      
    }
}

setInterval(draw, speed)