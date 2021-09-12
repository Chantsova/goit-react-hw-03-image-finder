(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(7),s=a.n(i),c=(a(26),a(3)),o=a(4),l=a(6),u=a(5),d=(a(27),a(28),a(19)),h=a.n(d),m=a(0),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputName:""},e.handleInputNameChange=function(t){e.setState({inputName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""===e.state.inputName.trim()&&h.a.Notify.warning("Please, input target text in the searching field"),e.props.onSubmit(e.state.inputName),e.setState({inputName:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"SearchForm",children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",name:"inputName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputName,onChange:this.handleInputNameChange})]})})}}]),a}(n.Component),p=a(10),b=(a(31),a(32),a(58)),g=function(e){var t=e.images,a=e.onSelect;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(m.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(r)},children:Object(m.jsx)("img",{src:n,alt:t,className:"ImageGalleryItem-image"})},Object(b.a)())}))},f=function(e){return Object(m.jsxs)("svg",{id:"goo-loader",width:e.width,height:e.height,"aria-label":e.label,children:[Object(m.jsxs)("filter",{id:"fancy-goo",children:[Object(m.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),Object(m.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),Object(m.jsx)("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]}),Object(m.jsxs)("g",{filter:"url(#fancy-goo)",children:[Object(m.jsx)("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),Object(m.jsx)("circle",{cx:"50%",cy:"40",r:e.radius,fill:e.color,children:Object(m.jsx)("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})}),Object(m.jsx)("circle",{cx:"50%",cy:"60",r:e.radius,fill:e.secondaryColor,children:Object(m.jsx)("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})})]})]})};f.defaultProps={width:80,height:90,color:"rgba(86, 140, 240, 1)",radius:11,secondaryColor:"rgba(46, 58, 80, 1)",label:"audio-loading"};var O=f,v=(a(33),document.querySelector("#modal-root")),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.handleCloseModal()},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.handleCloseModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.handleCloseModal()},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(i.createPortal)(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{src:this.props.selectedImage,alt:"pixabay_img"})})})}),v)}}]),a}(n.Component),x=(a(34),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Button__container",children:Object(m.jsx)("button",{className:"Button",type:"button",onClick:this.props.handleLoadMore,children:"Load more"})})}}]),a}(n.Component)),S=a(20),N=a.n(S),w=a(21),C=function(e,t){return N.a.get("https://pixabay.com/api/",{params:{key:"22538110-4c245d53289541016fd72dadc",q:e,image_type:"photo",orientation:"horizontal",per_page:12,page:t}}).then((function(t){return 0!==t.data.totalHits?{images:t.data.hits,totalHits:t.data.totalHits}:Promise.reject(new Error('There are no images with name "'.concat(e,'"')))}))},k=C;C.propTypes={page:a.n(w).a.number.isRequired};var M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:null,error:null,status:"idle",selectedImage:null,showModal:!1,page:1,totalHits:null},e.handleSelectImage=function(t){e.setState({selectedImage:t})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e.handleLoadMore=function(t){t.preventDefault(),e.setState({status:"pending"}),e.setState((function(e){return{page:e.page+1}}))},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.inputName,r=this.props.inputName;n!==r&&(this.setState({page:1}),this.setState({images:[]}),this.setState({status:"pending"}),k(r,1).then((function(e){var t=e.images,n=e.totalHits;a.setState({images:t,totalHits:n,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),t.page!==this.state.page&&(this.setState({status:"pending"}),k(n,this.state.page).then((function(e){var n=e.images;a.setState({images:[].concat(Object(p.a)(t.images),Object(p.a)(n)),status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.status,r=e.selectedImage;return Object(m.jsxs)(m.Fragment,{children:[null===this.state.images&&Object(m.jsxs)("div",{children:["idle"===n&&Object(m.jsx)("div",{className:"notification",children:"Please, input your searching value."}),"pending"===n?Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)(O,{})}):Object(m.jsx)("div",{}),"rejected"===n&&Object(m.jsx)("h1",{className:"error",children:a.message})]}),null!==this.state.images&&Object(m.jsxs)("div",{children:[Object(m.jsx)("ul",{className:"ImageGallery",children:"resolved"===n&&Object(m.jsx)(g,{images:t,onSelect:this.handleSelectImage})}),"resolved"===n&&this.state.totalHits/12-this.state.page>0?Object(m.jsx)(x,{handleLoadMore:this.handleLoadMore}):Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)(O,{})}),this.state.selectedImage&&Object(m.jsx)(y,{selectedImage:r,handleCloseModal:this.handleCloseModal})]})]})}}]),a}(n.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={inputName:""},e.handleSearchFormSubmit=function(t){e.setState({inputName:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{onSubmit:this.handleSearchFormSubmit}),Object(m.jsx)("div",{className:"content",children:Object(m.jsx)(M,{inputName:this.state.inputName})})]})}}]),a}(n.Component);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.98ec891f.chunk.js.map