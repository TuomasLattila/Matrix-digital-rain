const canvas = document.getElementById("canvas-element")
const context = canvas.getContext("2d")
const drops = []
const text = []
const characters = "｢｣ ｦ ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ｱ ｲ ｳ ｴ ｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ"
const fontSize = 30
const spacer = -10
const speed = 40

canvas.height = window.innerHeight - 5
canvas.width = window.innerWidth - 5
columns = canvas.width/(fontSize + spacer)

context.translate(canvas.width, 0)
context.scale(-1, 1)

context.font = "normal " + fontSize + "px Courier"
context.textAlign = "center"

for (let i = 0; i < columns; i++)   {
    drops[i] = Math.random()*50 - 50
}

const draw = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.1)"
    context.fillRect(0,0, canvas.width, canvas.height)

    for (let j = 0; j < columns; j++)   {
        context.fillStyle = "blue"
        context.fillText(text[j], j*(fontSize + spacer), drops[j]*(fontSize + spacer))
    }

    for (let j = 0; j < columns; j++)   {
        context.fillStyle = "white"
        drops[j]++
        text[j] = characters.charAt(Math.floor(Math.random()*Math.random()*characters.length))
        context.fillText(text[j], j*(fontSize + spacer), drops[j]*(fontSize + spacer))

        if (drops[j]*(fontSize + spacer) > canvas.height)   {
            drops[j] = Math.random()*50 - 50
        }        
    }

}

setInterval(draw, speed)