var pacman = pacman || {};
pacman = {
    Level:class {
        constructor(level, x, y, z, enx, eny, enz){  
            this.level = level
            this.x= x;
            this.y= y;
            this.z= z;
            this.enx = enx;
            this.eny = eny;
            this.enz = enz;
            this.intervalSetter=null;   
            table = document.getElementById("table");
            up = document.getElementById("up");
            down = document.getElementById("down");
            left = document.getElementById("left");
            right = document.getElementById("right");
            reset = document.getElementById("reset");
        }
        start(){
            up.onclick=()=>this.movementUp();
            down.onclick=()=>this.movementDown();
            left.onclick=()=>this.movementLeft();
            right.onclick=()=>this.movementRight();
            reset.onclick=()=>this.reset();
            this.levelPrint();
            this.enemyStart();
        }
        levelPrint(){
            table.innerHTML =" ";
            for (let i = 0; i < this.level[0].length; i++) {
                table.innerHTML +="<br>";
                for (let j = 0; j < this.level[0][0].length; j++) {
                    const element = this.level[this.z][i][j];
                    table.innerHTML+=element;
                    table.innerHTML+=" ";
                }
            }
        }
        moveChecker(current, next, nexts){
                if(this.level[current][next][nexts]==0){
                    return true;
                } else if(this.level[current][next][nexts]=='H'){
                    this.level[this.z][this.x][this.y]=0;
                    if(this.z==0){
                        this.z++;
                    } else if(this.z==1){
                        this.z--;
                    }
                    this.levelPrint();
                   return true;
                } else
                return false;
        }
        movementDown(){ 
            if(this.moveChecker(this.z, this.x+1, this.y)){
            this.level[this.z][this.x][this.y]=0;
            this.x++;
            this.level[this.z][this.x][this.y]="x";
            this.levelPrint();
            }
           // this.enemy();
        }        
        movementUp(){
            if(this.moveChecker(this.z, this.x-1, this.y)){
            this.level[this.z][this.x][this.y]=0;
            this.x--;
            this.level[this.z][this.x][this.y]="x";
            this.levelPrint();
            }
          //  this.enemy();
        } 
        movementLeft(){                
            if(this.moveChecker(this.z, this.x, this.y-1)){
            this.level[this.z][this.x][this.y]=0;
            this.y--;
            this.level[this.z][this.x][this.y]="x";
            this.levelPrint();
            }
         //   this.enemy();
        }
        movementRight(){
            if(this.moveChecker(this.z, this.x, this.y+1)){
            this.level[this.z][this.x][this.y]=0;
            this.y++;
            this.level[this.z][this.x][this.y]="x";
            this.levelPrint();
            }
          //  this.enemy();
        }
        enemyStart(){
            this.intervalSetter= setInterval(()=>this.enemy(), 1000);
        }
        enemyEnd(){
            clearInterval(this.intervalSetter);
        }
        reset(){
            this.enemyEnd();
            document.getElementById("winlose").innerHTML=" ";
            this.level[this.z][this.x][this.y]=0;
            this.level[this.enz][this.enx][this.eny]=0;
            this.enx = 6;
            this.eny = 1;
            this.enz = 0;
            this.x = 1;
            this.y = 1;
            this.z = 0;
            up.style.visibility="visible";
            down.style.visibility="visible";
            left.style.visibility="visible";
            right.style.visibility="visible";
            this.level[this.z][this.x][this.y]="x";
            this.level[this.enz][this.enx][this.eny]="E";
            this.levelPrint();
            this.enemyStart();
        }
        die(){
            this.level[this.z][this.x][this.y]="E";
            document.getElementById("winlose").innerHTML="YOU LOSE";
           this.enemyEnd();
           up.style.visibility="hidden";
           down.style.visibility="hidden";
           right.style.visibility="hidden";
           left.style.visibility="hidden";
        }
        enemyChecker(current, next, nexts){
            if(this.level[current][next][nexts]==0){
                return true;
            } else if(this.level[current][next][nexts]=='x'){
                this.die();
            } else
            return false;
        }
        enemy(){            
            if(this.x+1==this.enx && this.y+1==this.eny){
                document.getElementById("winlose").innerHTML="YOU LOSE";
            }else{
            if(this.x>this.enx && this.enemyChecker(this.enz, this.enx+1, this.eny)){
                this.level[this.enz][this.enx][this.eny]=0;
                this.enx++;
                this.level[this.enz][this.enx][this.eny]="E";
            }else if(this.y>this.eny && this.enemyChecker(this.enz, this.enx, this.eny+1)){
                this.level[this.enz][this.enx][this.eny]=0;
                this.eny++;
                this.level[this.enz][this.enx][this.eny]="E";
            }else if(this.x<this.enx && this.enemyChecker(this.enz, this.enx-1, this.eny)){
                this.level[this.enz][this.enx][this.eny]=0;
                this.enx--;
                this.level[this.enz][this.enx][this.eny]="E";
            }else if(this.y<this.eny && this.enemyChecker(this.enz, this.enx, this.eny-1)){
                this.level[this.enz][this.enx][this.eny]=0;
                this.eny--;
                this.level[this.enz][this.enx][this.eny]="E";
            }
            this.levelPrint();}
        }
    }
}