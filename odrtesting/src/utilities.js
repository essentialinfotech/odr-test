export const drawrect = (detections, ctx) => {
    detections.forEach(prediction=>{
        //Get Predictions Result
        const [x,y,width, height] = prediction['bbox'];
        const text = prediction['class'];

        //Set styling
        // const color = '#' + Math.floor(Math.random()*16777235).toString(16)
        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        //Draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    })
}