class Rain{
	constructor(obj={}) {
		this.dom = obj.dom
	    this.width = obj.width || '100vw'
		this.height = obj.height || '100vh'
		this.speed = obj.speed || 10
	}
	init(){
		this.dropRain();
	}
	dropRain(){
		let _this = this;
		let timer = setInterval(function(){
			_this.createRain()
		},this.speed)
		
	}
	createRain(){
		let _this = this.dom
		let dom = document.createElement("div");
		dom.className = "column"
		let length = Math.floor(Math.random()*200)+100
		let html = ""
		for(let i =0;i<length;i++){
			html += "<span>" + this.createCode() + "</span>"
		}
		dom.innerHTML = html;
		dom.style.left = Math.floor(Math.random()*99)+1 + "vw"
		dom.style.animation = "10s drop linear"
		dom.style.transform = `translateZ(${Math.floor(Math.random()*100)+1}px)`;
		this.dom.appendChild(dom);
		let timer = setTimeout(function(){
			_this.removeChild(dom);
			clearTimeout(timer);
		},2000);
	}
	createCode(){
		return String.fromCharCode(Math.floor(Math.random()*555)+1)
	}
}


