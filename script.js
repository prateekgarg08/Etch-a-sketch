const grid= document.querySelector('#grid_container');
const resize_btn = document.querySelector('#resize_btn');
const clear_btn = document.querySelector('#clear_btn');
const rgb_btn = document.querySelector('#rgb_btn');
const black_btn = document.querySelector('#black_btn');
const inc_btn = document.querySelector('#inc_btn');

let grid_items;

let black = true;
let inc = true;
let counter;
let rgb = false;
//let items_hovered =[];
makegrid(16);
grid_items = Array.from(grid.childNodes);
addHowerProperties()
// console.log(grid_items);


resize_btn.addEventListener("click",resize_grid)
clear_btn.addEventListener("click",clear_grid);
rgb_btn.addEventListener("click",()=>{rgb=true,black=false,inc=false})
black_btn.addEventListener("click",()=>{rgb=false,black=true,inc=false})
inc_btn.addEventListener("click",()=>{rgb=false,black=false,inc=true,counter =255})

function addHowerProperties()
{
    grid_items.forEach((grid_item) => grid_item.addEventListener("mouseenter",()=>{
        //items_hovered.push(grid_item)
        if (black) {
            color(grid_item,"black")
        }
        else if (rgb){
            color(grid_item,getRandomColor())
        }
        else if(inc){
            if(counter > 0)
            {
                counter -= 25.5
            }
            color(grid_item,`rgb(${counter},${counter},${counter})`)
            
            
        }
    }))
}

function clear_grid()
{
    
    grid_items.forEach((grid_item)=>
        {
            grid_item.style.backgroundColor = "white";  
            console.log("ok")
        }
    )
}

function resize_grid(){
    let grid_size;
    do
    {
        grid_size = parseInt(prompt("Grid-size:  (max= 100)"));
    } while(grid_size>100);
    makegrid(grid_size)
    grid_items= Array.from(grid.childNodes)
    addHowerProperties()
}



function makegrid(n)
{
    grid.innerHTML= "";
    console.log(1)
    for (let i = 0; i < n *n;i++)
    {
        let grid_item = document.createElement('div');
        
        grid_item.classList.add('grid_item');
        console.log(grid_item); 
        grid.appendChild(grid_item);

    }
    grid.style.cssText = `display:grid;grid-template-columns: repeat(${n},1fr);grid-template-rows: repeat(${n},1fr);`;
}

function color(item,color){
    
    item.style.backgroundColor = `${color}`;
        
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0;i<6;i++)
    {
        color += letters[Math.floor(Math.random() * 16)]

    }
    console.log(color)
    return color
}
