class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.7,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;

        World.add(world,this.body);
    }
  
    display(){
     //   console.log(this.body.speed)
        if(this.body.speed < 3){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        } else {
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
             
    }
    score(){
        if(this.Visibility<0 && this.Visibility >-1005){
          score++;
        }
    }
}