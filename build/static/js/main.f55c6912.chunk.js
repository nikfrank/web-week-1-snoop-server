(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,a,t){e.exports=t.p+"static/media/goldRecord.6a2018c3.png"},83:function(e,a,t){e.exports=t(97)},88:function(e,a,t){},89:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(24),o=t.n(s),i=(t(88),t(58)),r=t(59),m=t(81),c=t(60),u=t(82),p=(t(89),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),d=t(61),g=t.n(d),h=[{name:"Doggystyle",year:1993,cover:"https://upload.wikimedia.org/wikipedia/en/6/63/SnoopDoggyDoggDoggystyle.jpg"},{name:"Tha Doggfather",year:1996,cover:"https://upload.wikimedia.org/wikipedia/en/a/a3/Tha-doggfather.jpg"},{name:"Da Game is to Be Sold, Not to Be Told",year:1998,cover:"https://upload.wikimedia.org/wikipedia/en/c/c5/Gameistobesold.jpg"},{name:"No Limit Top Dogg",year:1999,cover:"https://upload.wikimedia.org/wikipedia/en/d/d1/Snoop_front.JPG"},{name:"Tha Last Meal",year:2e3,cover:"https://upload.wikimedia.org/wikipedia/en/d/dc/The_Last_Meal_-_Front.jpeg"}],E=t(62),b=(t(96),function(e){return p.test(e)}),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(l)))).state={modalOpen:!1,rapName:"",email:"",isEmailValid:!1,albumSales:1e3,topAlbum:null,albumMenuOpen:!1,startDate:null},t.setRapName=function(e){t.setState({rapName:e.target.value})},t.setEmail=function(e){t.setState({email:e.target.value,isEmailValid:b(e.target.value)})},t.setAlbumSales=function(e){t.setState({albumSales:Math.max(0,Number(e.target.value))})},t.toggleModal=function(){return t.setState({modalOpen:!t.state.modalOpen})},t.toggleAlbumMenu=function(){return t.setState({albumMenuOpen:!t.state.albumMenuOpen})},t.selectAlbum=function(e){return t.setState({topAlbum:e,albumMenuOpen:!1})},t.setStartDate=function(e){return t.setState({startDate:e})},t.done=function(e){t.toggleModal(),console.log("done applying, it's friday, now I got nothin to do"),fetch("/submit",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({rapName:t.state.rapName,email:t.state.email,albumSales:t.state.albumSales,topAlbum:t.state.topAlbum,startDate:t.state.startDate.getTime()})}).then(function(e){return e.text()}).then(function(e){return console.log(e)})},t}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.rapName,n=a.email;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"card swanky-input-container"},l.a.createElement("label",null,l.a.createElement("input",{value:t,onChange:this.setRapName}),l.a.createElement("span",{className:"title"},"Rap Name"))),l.a.createElement("div",{className:"card swanky-input-container"},l.a.createElement("label",null,l.a.createElement("input",{value:n,onChange:this.setEmail}),l.a.createElement("span",{className:"title"},"Email"),this.state.isEmailValid||this.state.email.length<1?null:l.a.createElement("span",{className:"email-invalid"},"Please enter a valid email"))),l.a.createElement("div",{className:"card swanky-input-container"},l.a.createElement("label",null,l.a.createElement("input",{type:"number",step:1e5,value:this.state.albumSales,onChange:this.setAlbumSales}),l.a.createElement("span",{className:"title"},"Album Sales")),l.a.createElement("div",{className:"goldRecords"},[1,2,3,4,5,6].filter(function(a){return 1e6*a<e.state.albumSales}).map(function(e){return l.a.createElement("div",{className:"goldRecord",key:e},l.a.createElement("img",{src:g.a}))}))),l.a.createElement("div",{className:"card swanky-input-container"},l.a.createElement("span",{className:"title"},"Top Album"),l.a.createElement("div",{className:"album-dropdown-base",onClick:this.toggleAlbumMenu},null===this.state.topAlbum?l.a.createElement("span",null,"Select the best Snoop Album"):l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:this.state.topAlbum.cover,alt:this.state.topAlbum.name}),l.a.createElement("span",null,this.state.topAlbum.year),l.a.createElement("span",null,this.state.topAlbum.name)),l.a.createElement("span",{className:"dropdown-arrow"},this.state.albumMenuOpen?"\u25b2":"\u25bc")),this.state.albumMenuOpen?l.a.createElement("ul",{className:"album-menu"},h.map(function(a){return l.a.createElement("li",{key:a.name,onClick:function(){return e.selectAlbum(a)}},l.a.createElement("img",{src:a.cover}),l.a.createElement("span",null,a.year),l.a.createElement("span",null,a.name))})):null),l.a.createElement("div",{className:"card swanky-input-container"},l.a.createElement("label",null,l.a.createElement(E.a,{selected:this.state.startDate,onChange:this.setStartDate}),l.a.createElement("span",{className:"title"},"Start Date"))),l.a.createElement("div",{className:"done-container"},l.a.createElement("button",{className:"done-button",onClick:this.toggleModal},"Done"))),l.a.createElement("div",{className:this.state.modalOpen?"modal-open":"modal-closed"},l.a.createElement("h2",null,"Confirmation"),l.a.createElement("p",null,"are you sure you are ready with your application?"),l.a.createElement("button",{onClick:this.done},"Confirm!"),l.a.createElement("svg",{viewBox:"0 0 100 100",className:"x-button",onClick:this.toggleModal},l.a.createElement("circle",{cx:50,cy:50,r:47}),l.a.createElement("path",{d:"M 30 30 L 70 70"}),l.a.createElement("path",{d:"M 70 30 L 30 70"}))),this.state.modalOpen?l.a.createElement("div",{className:"modal-shade",onClick:this.toggleModal}):null)}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[83,1,2]]]);
//# sourceMappingURL=main.f55c6912.chunk.js.map