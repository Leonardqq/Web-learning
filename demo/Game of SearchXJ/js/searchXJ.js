class searchXJ{
    constructor(parent,W=600,H=600){
        this.Width=W;
        this.Height=H;
        this.lv=1;
        this.list=[];
        this.divCon=this.createDiv();
        parent.appendChild(this.divCon);
        this.createGame();
        
    }
    createDiv(){
        if(this.divCon) return this.divCon;
        let div=document.createElement("div");
        Object.assign(div.style,{
            width:this.Width+"px",
            height:this.Height+"px",
            fontSize:0,
            margin:"auto",
            border:"1px solid pink"
        })
        div.self=this;
        div.addEventListener("click",this.clickHandler);
        return div;
    }
    clickHandler(e){
        if(e.target===HTMLDivElement) return;
        if(e.target.src.indexOf("1.png")!==-1) this.self.lv+=1;
        this.self.cancelGame();
        this.self.createGame();
    }
    cancelGame(){
        for(let i=0;i<this.list.length;i++){
            this.list[i].remove();
            this.list[i]=null;
        }
        this.list.length=0;
    }
    createGame(){
        for(let i=0;i<(this.lv+1)*(this.lv+1);i++){
            let img=new Image();
            img.src="./img/2.png";
            this.list.push(img)
            img.style.width=this.Width/(this.lv+1)+"px";
            img.style.height=this.Height/(this.lv+1)+"px";
            this.divCon.appendChild(img);
        }
        this.list[Math.floor(Math.random()*(this.lv+1)*(this.lv+1))].src="./img/1.png";
    }

}