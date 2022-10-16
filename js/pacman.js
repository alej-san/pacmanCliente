var pacman = pacman || {};
pacman = {
    Level:class {
        constructor(level, x, y){  
            this.level = level
            this.x= x;
            this.y= y;
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
            try{
                if(this.level[current][next]==0){
                    return true;
                } else return false;
            }catch(error){
                console.log(("oops"))
            }
        }
        movementDown(){ 
            if(this.moveChecker(this.x+1, this.y)){
            this.level[this.x][this.y]=0;
            this.x++;
            this.level[this.x][this.y]="x";
            this.levelPrint(); 
            }
        }
        movementUp(){                
            if(this.moveChecker(this.x, this.y-1)){
            this.level[this.x][this.y]=0;
            this.y--;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
        }
        movementRight(){
            if(this.moveChecker(this.x, this.y+1)){
            this.level[this.x][this.y]=0;
            this.y++;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
        }
        movementLeft(){
            if(this.moveChecker(this.x-1, this.y)){
            this.level[this.x][this.y]=0;
            this.x--;
            this.level[this.x][this.y]="x";
            this.levelPrint();
            }
        } 
    }
}