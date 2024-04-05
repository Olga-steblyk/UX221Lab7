class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


Class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		This.innerHTML = `<a href="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>;
	}
}

customeElements.define("x-twosided", TwoSidedMarket);