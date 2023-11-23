
// customElements.define(
//   "my-counter",
//   class extends HTMLElement {
//     static html = `
//     <div>
//       <span>${this.count}</span>
//     </div>
//     `
//     static get observedAttributes() {
//       // return ["count", "limit", "page"];
//     }

//     constructor() {
//       super();
//       this.count = 0;
//       this.limit = 0;
//       this.page = 1;
//     }

//     connectedCallback() {
//       if (this.hasAttribute("count"))
//         this.count = parseInt(this.getAttribute("count"));
//       if (this.hasAttribute("limit"))
//         this.limit = parseInt(this.getAttribute("limit"));
//       if (this.hasAttribute("page"))
//         this.page = parseInt(this.getAttribute("page"));
//       this.render();
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//       this[name] = parseInt(newValue);
//       this.render();
//     }
    
//     render() {
      
//     }
//   }

// );