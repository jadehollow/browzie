(this.webpackJsonpbrowzie=this.webpackJsonpbrowzie||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),r=a.n(n),i=(a(21),a(9)),l=(a(22),a(2)),o=a(7),j=a(0),d=function(e){var t=e.searchText,a=e.setSearchText,c=Object(l.f)(),s=function(e){e.preventDefault(),c.push("/search"),a(e.target.value)};return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(o.b,{id:"nav-link",className:"navbar-brand",to:"/",children:"Browzie"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link disabled",to:"/",tabIndex:"-1","aria-disabled":"true",children:"Coming Soon"})})]}),Object(j.jsxs)("form",{onSubmit:s,className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:t,onChange:s}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})},b=function(e){var t=e.text,a=e.backdrop;return Object(j.jsxs)("header",{className:"text-white p-5 hero-container",children:[Object(j.jsx)("h1",{className:"hero-text",children:t}),a&&Object(j.jsx)("div",{className:"hero-backdrop",style:{backgroundImage:"url(".concat(a,")")}})]})},h=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:"Welcome to Browzie"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-8 offset-lg-2 my-5",children:Object(j.jsx)("p",{className:"lead",children:"Browzie is an easy to use web app for searching movie titles! Start typing in the name of a movie and Browzie will do the rest. Click on a title for additional information, such as release status, release date, and average rating."})})})})]})},m=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:"About Us"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-8 offset-lg-2 my-5",children:Object(j.jsxs)("p",{className:"lead",children:["Browzie is an app built with ReactJS for searching movie titles. Originally it was Movie Browser, the React 201 project from Kalob Taulien's developer course, which you can ",Object(j.jsx)("a",{href:"https://www.udemy.com/course/the-ultimate-fullstack-web-development-bootcamp/",children:"find on Udemy"}),"."]})})})})]})},u=function(e){var t=e.movie,a="https://image.tmdb.org/t/p/w500/".concat(t.poster_path),c="/movies/".concat(t.id),s="".concat("/browzie","/assets/NoImage.jpg");function n(){return null==t.poster_path?Object(j.jsx)("img",{src:s,className:"card-img-top my-5 py-2 mh-100",alt:t.original_title}):Object(j.jsx)("img",{src:a,className:"card-img-top mh-100",alt:t.original_title})}return Object(j.jsx)("div",{className:"col-lg-3 col-md-4 col-6 my-4",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)(n,{}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.original_title}),Object(j.jsx)(o.b,{to:c,className:"btn btn-success",children:"Show Details"})]})]})})},x=function(e){var t=e.keyword,a=e.searchResults,c="You are searching for...".concat(t),s=a.map((function(e,t){return Object(j.jsx)(u,{movie:e},t)})),n=function(){var e="".concat("/browzie","/assets/NoResults.png");return a.length>0?Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:s})}):Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"text-center mt-5",children:"Oops, looks like there's nothing here!"}),Object(j.jsx)("img",{src:e,className:"w-50 img-fluid rounded mx-auto d-block mt-5",style:{opacity:"0.8"},alt:"..."})]})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:c}),Object(j.jsx)(n,{})]})},O=function(){var e=Object(l.g)().id,t=Object(c.useState)({}),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!0),o=Object(i.a)(r,2),d=o[0],h=o[1];return Object(c.useEffect)((function(){console.log("make an api request",e),fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=9cb6379847968c53798b890eb3898f8d&language=en-US")).then((function(e){return e.json()})).then((function(e){n(e),h(!1)}))}),[e]),function(){if(d)return Object(j.jsx)(b,{text:"Loading..."});if(s){var e="https://image.tmdb.org/t/p/w500".concat(s.poster_path),t="https://image.tmdb.org/t/p/original/".concat(s.backdrop_path),a="".concat("/browzie","/assets/NoImage.jpg");return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{text:s.original_title,backdrop:t}),Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3",children:null==s.poster_path?Object(j.jsx)("img",{src:a,alt:"...",className:"img-fluid shadow rounded"}):Object(j.jsx)("img",{src:e,alt:"...",className:"img-fluid shadow rounded"})}),Object(j.jsxs)("div",{className:"col-md-9",children:[Object(j.jsx)("h2",{children:s.original_title}),Object(j.jsx)("p",{className:"lead",children:s.overview}),Object(j.jsxs)("p",{className:"lead",children:["Release Status: ",s.status]}),Object(j.jsxs)("p",{className:"lead",children:["Release Date: ",s.release_date]}),Object(j.jsxs)("p",{className:"lead",children:["Average Rating: ",s.vote_average]})]})]})})]})}}()},p=(a(32),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"body-404",children:Object(j.jsxs)("section",{class:"notFound",children:[Object(j.jsxs)("div",{class:"img",children:[Object(j.jsx)("img",{src:"https://assets.codepen.io/5647096/backToTheHomepage.png",alt:"Back to the search page"}),Object(j.jsx)("img",{src:"https://assets.codepen.io/5647096/Delorean.png",alt:"Delorean and Marti McFly"})]}),Object(j.jsxs)("div",{class:"text",children:[Object(j.jsx)("h1",{children:"404"}),Object(j.jsx)("h2",{children:"PAGE NOT FOUND"}),Object(j.jsx)("h3",{children:"BACK TO SEARCH?"}),Object(j.jsx)("a",{href:"/search",class:"yes",children:"YES"}),Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=G3AfIvJBcGo",children:"NO"})]})]})})})});var g=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],b=r[1];return Object(c.useEffect)((function(){o&&fetch("https://api.themoviedb.org/3/search/movie?api_key=9cb6379847968c53798b890eb3898f8d&language=en-US&query=".concat(o,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[o]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{searchText:o,setSearchText:b}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(h,{})}),Object(j.jsx)(l.a,{path:"/about",component:m}),Object(j.jsx)(l.a,{path:"/search",children:Object(j.jsx)(x,{keyword:o,searchResults:a})}),Object(j.jsx)(l.a,{path:"/movies/:id",component:O}),Object(j.jsx)(l.a,{path:"",component:p})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(g,{})})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.09d6eafa.chunk.js.map