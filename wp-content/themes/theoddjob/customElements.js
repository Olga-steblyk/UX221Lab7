class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
		this.inner = `<a herf="For-JobSeekers">For Job-seekers</a>&nbsp;<a herf="For-JobHavers">For Job-havers></a>`;
		
	}
}
customElements.define("x-twosides", TwoSidedMarket);