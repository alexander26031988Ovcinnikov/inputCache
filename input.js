class InputCache {
	constructor(id) {
  	this.id = id;
    this.getItem();
    this.setItem();
  }
  
  getItem() {
  	document.addEventListener("DOMContentLoaded", () => {
  	  this.input = document.getElementById(this.id);
      this.input.value = localStorage.getItem(this.id);
    });
  }
  
  setItem() {
  	document.addEventListener("DOMContentLoaded", () => {
  	  this.input = document.getElementById(this.id);
      
			this.input.addEventListener("change", () => {
        localStorage.setItem(this.id, this.input.value);
      });
    });
  }
  
  clear() {
  	localStorage.removeItem(this.id);
  	this.input.value = '';
  }
}


const firstCache = new InputCache('firstValue');
const secondCache = new InputCache('secondValue');

setTimeout(() => firstCache.clear(), 3000);
setTimeout(() => secondCache.clear(), 3000);

