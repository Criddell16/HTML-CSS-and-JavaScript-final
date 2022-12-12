const ctx = canvas.getContext('2d');
ctx.stroke()


const size = 50;

ctx.fillStyle = 'blue';
for (let x = 0; x < canvas.width; x+= size){
ctx.clearRect(0,0,canvas.width, canvas.height);
ctx.fillRect(x,50,size,size);
}

let x = 0;
const id = setInterval(() => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(x, 50, size, size);
    x += size;

    if (x >= canvas.width){
        const id = setInterval(() => {
            ctx.clearRect(0,0, canvas.width, canvas.height);
            ctx.fillRect(x, 50, size, size);
            x -= size;
           
                       
                
        },200);
    }
}, 200);

function loop(){
    let x = 0
    const id = setInterval(() => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillRect(x, 50, size, size);
        x += size;
    
        if (x >= canvas.width){
            const id = setInterval(() => {
                ctx.clearRect(0,0, canvas.width, canvas.height);
                ctx.fillRect(x, 50, size, size);
                x -= size;
    
            
            },200);
        }
    }, 200);
}






