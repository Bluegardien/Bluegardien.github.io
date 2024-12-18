let listeEntity = [];
let listecolor = ["red", "blue", "yellow", "green", "orange", "purple", "pink","grey","brown","black"]
let ctx = document.getElementById("myCanvas").getContext("2d");
function life(liste){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    liste.forEach(element => {
        element.wonder();
        element.draw();
    });
    liste.forEach(entity1 => {
        liste.forEach(entity2 => {
            if (entity1.color !== entity2.color && checkBoxBoundaries(entity1,entity2)){
                entity1.size = entity1.size+entity2.size;
                entity2.die();
                console.log("EATEN")
                if(entity1.x-entity1.size/2 < 0){ entity1.x = 1+entity1.size/2;}
                else if(entity1.x+entity1.size/2 > 1200){ entity1.x = 1201-entity1.size/2;}
                if(entity1.y-entity1.size/2 < 0){ entity1.y = 1+entity1.size/2;}
                else if(entity1.y+entity1.size/2 > 1200){ entity1.y = 401-entity1.size/2;}
            }
        });
    });
    

}
function checkBoxBoundaries(entity1, entity2){
    if(Math.abs(entity1.x-entity2.x) < entity1.size/2 && Math.abs(entity1.y-entity2.y) < entity1.size/2){
        return true;
    }
}

function init(){
    for (let i = 0; i < 10; i++) {
        listeEntity.push(new Entity(listecolor[i],Math.random()*500,Math.random()*500,1));
    }
    window.setInterval(() => life(listeEntity), 10);
}


class Entity{
    constructor(color,x,y,size){
        this.color = color;
        this.x = x;
        this.y = y;
        this.size=size;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size)
    }
    move(){
        let dx = Math.round(10*(Math.random()-0.5));
        let dy = Math.round(10*(Math.random()-0.5));
        if((this.x-this.size/2+dx > 0) && (this.x+this.size/2+dx < 1200) && (this.y-this.size/2+dy > 0) && (this.y+this.size/2+dy < 700)){
            this.x = this.x+dx;
            this.y = this.y+dy;
        }
    }
    grow(){
        this.size = this.size+Math.random();
    }
    die(){
        listeEntity = listeEntity.filter(entity => entity.color !== this.color)
    }
    wonder(){
       if(Math.random()>=0.1){
        this.move();
       }else{
        this.grow();
       }
       
    }
}
