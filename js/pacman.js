var pacman = pacman || {};
pacman = {
    Level:class {
        constructor(level, x, y, enx, eny){  
            this.level = level
            this.x= x;
            this.y= y;
            this.enx= enx;
            this.eny= eny;
            table = document.getElementById("table");
            up = document.getElementById("up");
            down = document.getElementById("down");
            left = document.getElementById("left");
            right = document.getElementById("right");
        }
        start(){
            up.onclick=()=>this.movementUp();
            down.onclick=()=>this.movementDown();
            left.onclick=()=>this.movementLeft();
            right.onclick=()=>this.movementRight();
            this.levelPrint();
        }
        levelPrint(){
            table.innerHTML =" ";
            for (let i = 0; i < this.level.length; i++) {
                table.innerHTML +="<br>";
                for (let j = 0; j < this.level[0].length; j++) {
                    const element = this.level[i][j];
                    table.innerHTML+=element;
                    table.innerHTML+=" ";
                }
            }
        }
        moveChecker(current, next){
           // try{
                if(this.level[current][next]==0){
                    return true;
                } else return false;
          //  }catch(error){
          //      console.log(("oops"))
         //   } return false;
        }
        movementDown(){ 
            if(this.moveChecker(this.x+1, this.y)){
            this.level[this.x][this.y]=0;
            this.x++;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
            this.enemy();
        }        
        movementUp(){
            if(this.moveChecker(this.x-1, this.y)){
            this.level[this.x][this.y]=0;
            this.x--;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
            this.enemy();
        } 
        movementLeft(){                
            if(this.moveChecker(this.x, this.y-1)){
            this.level[this.x][this.y]=0;
            this.y--;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
            this.enemy();
        }
        movementRight(){
            if(this.moveChecker(this.x, this.y+1)){
            this.level[this.x][this.y]=0;
            this.y++;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
            this.enemy();
        }
        enemy(){
            this.level[this.enx][this.eny]=0;
            this.eny--;
            this.level[this.enx][this.eny]="A";
        }
    }
}