(this["webpackJsonppixabay-image-finder"]=this["webpackJsonppixabay-image-finder"]||[]).push([[0],{104:function(e,a,t){},105:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),o=(t(81),t(65)),i=t(158),s=t(144),m=t(147),u=t(149),g=t(107),d=Object(s.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}})),b=function(){var e=d();return l.a.createElement("div",{className:e.root},l.a.createElement(m.a,{position:"static"},l.a.createElement(u.a,null,l.a.createElement(g.a,{variant:"h6",className:e.title},"Pixabay Image Finder"))))},p=t(17),f=t(63),E=t.n(f),h=t(162),y=t(150),v=t(151),j=t(152),O=t(153),x=t(154),k=t(64),w=t.n(k),N=Object(s.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:10,padding:3},gridList:{width:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},imageDialog:{width:"600px",height:"auto"}}})),C=function(e){var a=e.open,t=e.image,n=e.handleClose,c=N();return t?l.a.createElement(h.a,{onClose:n,open:a},l.a.createElement(y.a,null,t.tags.charAt(0).toUpperCase()+t.tags.slice(1)),l.a.createElement("img",{alt:"",src:t.largeImageURL,className:c.imageDialog})):null},I=function(e){var a=e.images,t=(e.keyword,Object(n.useState)(!1)),c=Object(p.a)(t,2),r=c[0],o=c[1],i=Object(n.useState)(""),s=Object(p.a)(i,2),m=s[0],u=s[1],g=N(),d=function(e){console.log(e),o(!0),u(e)},b=a?l.a.createElement("div",{className:g.root},l.a.createElement(v.a,{cellHeight:250,className:g.gridList,cols:3},a.map((function(e){return l.a.createElement(j.a,{key:e.id},l.a.createElement("img",{src:e.largeImageURL,alt:e.tags,style:{cursor:"pointer"},onClick:function(){return d(e)}}),l.a.createElement(O.a,{title:e.tags,subtitle:l.a.createElement("span",null,"by: ",e.user),actionIcon:l.a.createElement(x.a,{"aria-label":"info about ".concat(e.tags),className:g.icon,onClick:function(){return d(e)}},l.a.createElement(w.a,null))}))})))):null;return l.a.createElement("div",null,b,l.a.createElement(C,{open:r,handleClose:function(){o(!1)},image:m}))},A=t(163),S=t(164),F=t(159),L=t(161),U=t(155),q=Object(s.a)((function(e){return{root:{padding:"10px 20px"},select:{minWidth:120,width:"100%"},searchField:{width:"100%"},gridItem:{padding:5}}})),B=[3,9,12,15,30],D=["backgrounds","fashion","nature","science","education","feelings","health","people","religion","places","animals","industry","computer","food","sports","transportation","travel","buildings","business","music"],G=["grayscale","transparent","red","orange","yellow","green","turquoise","blue","lilac","pink","white","gray","black","brown"],J=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(12),o=Object(p.a)(r,2),i=o[0],s=o[1],m=Object(n.useState)("All"),u=Object(p.a)(m,2),g=u[0],d=u[1],b=Object(n.useState)("All"),f=Object(p.a)(b,2),h=f[0],y=f[1],v=Object(n.useState)([]),j=Object(p.a)(v,2),O=j[0],x=j[1],k="2244132-8cbefabcb5270dce379c0c19a",w=q();Object(n.useEffect)((function(){var e="".concat("https://pixabay.com/api","/?key=").concat(k,"&q=").concat(t,"&image_type=photo&per_page=").concat(i,"&category=").concat(g,"&colors=").concat(h,"&safesearch=true");E.a.get(e).then((function(e){return x(e.data.hits)})).catch((function(e){return console.log(e)}))}),[k,t,i,g,h]);return l.a.createElement(U.a,{container:!0,className:w.root},l.a.createElement(U.a,{item:!0,xs:12,md:2,className:w.gridItem},l.a.createElement(A.a,{id:"amount-select-label"},"Amount"),l.a.createElement(F.a,{className:w.select,labelId:"amount-select-label",id:"amount-select",value:i,onChange:function(e){s(e.target.value)}},B.map((function(e,a){return l.a.createElement(S.a,{key:a,value:e},e)})))),l.a.createElement(U.a,{item:!0,xs:12,md:2,className:w.gridItem},l.a.createElement(A.a,{id:"category-select-label"},"Category"),l.a.createElement(F.a,{className:w.select,labelId:"category-select-label",id:"category-select",value:g,onChange:function(e){d(e.target.value)}},l.a.createElement(S.a,{value:"All"},"All"),D.map((function(e,a){return l.a.createElement(S.a,{key:a,value:e},e)})))),l.a.createElement(U.a,{item:!0,xs:12,md:2,className:w.gridItem},l.a.createElement(A.a,{id:"color-select-label"},"Color"),l.a.createElement(F.a,{className:w.select,labelId:"color-select-label",id:"color-select",value:h||"",onChange:function(e){y(e.target.value)}},l.a.createElement(S.a,{value:"All"},"All"),G.map((function(e,a){return l.a.createElement(S.a,{key:a,value:e},e)})))),l.a.createElement(U.a,{item:!0,xs:12,md:6,className:w.gridItem},l.a.createElement(L.a,{className:w.searchField,name:"searchText",value:t,onChange:function(e){c(e.target.value)},label:"Search for images"})),O.length?l.a.createElement(I,{images:O,keyword:t}):null)},R=(t(104),Object(o.a)({palette:{primary:{main:"#373736"},secondary:{main:"#F45B69"}}}));var T=function(){return l.a.createElement(i.a,{theme:R},l.a.createElement(b,null),l.a.createElement(J,null))};r.a.render(l.a.createElement(T,null),document.getElementById("root"))},76:function(e,a,t){e.exports=t(105)},81:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.434aac22.chunk.js.map