(this["webpackJsonpmy-app-2021"]=this["webpackJsonpmy-app-2021"]||[]).push([[0],{30:function(e,t,a){},31:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),s=a(24),i=a.n(s),r=(a(30),a(31),a(10)),c=a(0),o=function(){return Object(c.jsxs)("nav",{className:"p-5 z-30 fixed flex bg-white items-center shadow-lg justify-between",children:[Object(c.jsx)(r.b,{to:"/",className:"font-bold text-purple-500 text-xl",children:"Grouping It !"}),Object(c.jsxs)("ul",{className:"flex flex-wrap flex-row items-center justify-end md:justify-evenly w-1/2 md:w-2/5",children:[Object(c.jsx)(r.b,{className:"px-5 mx-0",to:"/create-group",children:"Create Group"}),Object(c.jsx)(r.b,{className:"px-5 mx-0",to:"/info",children:"Information"})]})]})},d=a(2),j=a(16),m=a(7),b=a(15),x=a(8),u=a(11),h=a.n(u),p=function(e){var t=e.addMember,a=e.list,n=Object(l.useState)({id:Math.floor(232323232*Math.random()),name:"",age:"",gender:""}),s=Object(m.a)(n,2),i=s[0],r=s[1],o=Object(l.useRef)(null);Object(l.useEffect)((function(){r(Object(x.a)(Object(x.a)({},i),{},{id:Math.floor(232323232*Math.random())}))}),[i.name]);var d=function(){o.current.style.transform="translateY(0%)",setTimeout((function(){o.current.style.transform="translateY(-100%)"}),1e3)},j=function(e){r(Object(x.a)(Object(x.a)({},i),{},Object(b.a)({},e.target.id,e.target.value)))},u=function(){for(var e=[],t=10;t<=50;t++)e.push(t);return e.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"listMembers py-5",children:[Object(c.jsx)("div",{ref:o,className:"z-40 containerBoxAlert transition duration-500 w-full flex justify-center bg-transparent p-5 fixed",children:Object(c.jsx)("div",{className:"p-3  shadow-lg  rounded-lg opacity-80 boxAlert z-10 bg-green-100 text-lg inline-block border-2 border-green-300 ",children:"Data Berhasil Ditambahkan"})}),Object(c.jsx)("h2",{className:"text-2xl py-2 text-purple-500",children:"Masukan Nama - Nama Anggota"}),Object(c.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),a.length){if(i.name.length<4)h()({title:"Maaf !",text:"Maaf Minimal Karakter Untuk Nama 4 Huruf!",icon:"warning"});else if(a.length){a.forEach((function(e){e.name==i.name&&h()({title:"Maaf !",text:"Maaf ".concat(i.name," Sudah Ada Dalam List !"),icon:"warning"})})),a.map((function(e){return e.name})).includes("".concat(i.name))||(d(),t(i),r({name:"",age:"",gender:"",id:""}))}}else d(),t(i),r({name:"",age:"",gender:"",id:""})},className:"inputName",children:[Object(c.jsx)("input",{value:i.name,required:!0,id:"name",onChange:j,placeholder:"Masukan Nama Anggota Yang Mau Dimasukan Ke Group",type:"text",className:"text-xl my-1 w-full capitalize p-2 py-3 border-2 border-purple-400 rounded-lg"}),Object(c.jsxs)("div",{className:"flex py-2",children:[Object(c.jsxs)("select",{id:"age",onChange:j,value:i.age,className:"mr-3 my-1  p-3 text-center border-2 border-purple-400 rounded-lg",children:[Object(c.jsx)("option",{value:"None",children:"Usia"}),u?u():""]}),Object(c.jsxs)("select",{id:"gender",onChange:j,value:i.gender,className:"ml-1 my-1  p-3 text-center border-2 border-purple-400 rounded-lg",children:[Object(c.jsx)("option",{value:"None",children:"Gender"}),Object(c.jsx)("option",{value:"Pria",children:"Pria"}),Object(c.jsx)("option",{value:"Wanita",children:"Perempuan"})]})]}),Object(c.jsx)("button",{className:"p-2 rounded-lg bg-purple-400 font-semibold text-white",children:"Add To List"}),Object(c.jsx)("div",{className:"p-2 text-white rounded-lg font-normal my-3 bg-yellow-400",children:Object(c.jsx)("p",{children:"untuk umur dan gender tidak wajib,kalian bisa cukup memasukan nama dari anggotanya (Minimal 4 Karakter)"})})]})]})})},g=function(e){var t=e.list,a=Object(l.useState)(null),n=Object(m.a)(a,2),s=n[0],i=n[1],r=Object(l.useState)(2),o=Object(m.a)(r,2),d=o[0],b=o[1],u=Object(l.useState)(!1),p=Object(m.a)(u,2),g=p[0],f=p[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"text-2xl md:text-left text-center text-purple-500 py-2",children:"Grouping List Anggota"}),Object(c.jsxs)("div",{className:"flex md:flex-row flex-col items-center",children:[Object(c.jsx)("button",{onClick:function(){var e=[],a=[],l=Object(j.a)(t);if(t.length%d!==0)var n=null,s=setInterval((function(){e.length&&(clearInterval(s),n=e.filter((function(e){return e.length!==Math.floor(t.length/d)})),console.log(n),h()({title:"Perhatian !",text:"Jumlah Seluruh Anggota Dalam List Tidak Terbagi Rata Kedalam Setiap Kelompok, Terdapat ".concat(n?n.length:"0"," Kelompok Yang Memilik Anggota Lebih"),icon:"warning"}))}),1);if(t.length<d)h()({title:"Maaf !",text:"Maaf Jumlah Anggota Yang Ada Dilist Kurang Dari Jumlah Kelompok Yang Diinginkan.",icon:"error"});else for(var r=1;r<=d;r++){for(var o=function(e){var t=Math.floor(Math.random()*l.length),n=l[t];a.push(n),l=l.filter((function(e){return e.name!==n.name}))},m=1;m<=t.length/d;m++)o();e.push(a),a=[]}var b=e.map((function(e,t){if(0!==l.length&&(e.push(l[0]),l.shift()),1==g){var a=Math.floor(Math.random()*e.length);e[a]=Object(x.a)(Object(x.a)({},e[a]),{},{ketua:"Ketua"})}return Object(c.jsxs)("div",{className:"group rounded-lg text-gray-700 m-3 p-4 bg-purple-200",children:[Object(c.jsxs)("h1",{className:"text-2xl text-purple-500",children:["Kelompok ",t+1]}),Object(c.jsx)("h3",{className:"text-xl",children:"Anggota :"}),Object(c.jsx)("ol",{className:"pl-3 list-decimal",children:e.map((function(e){return Object(c.jsxs)("li",{className:"mt-1",children:[e.name," ",e.ketua?Object(c.jsx)("span",{className:"text-purple-600",children:"[Ketua]"}):"","  ",e.age?"| ".concat(e.age," Tahun"):"","  ",e.gender?"| ".concat(e.gender):""]},e.id)}))})]},t)}));i(b)},className:"my-1 p-2 mx-1 bg-purple-400 rounded-lg text-white font-bold",children:"Grouping List"}),Object(c.jsxs)("select",{value:d,onChange:function(e){b(e.target.value)},className:"my-1 p-1 mx-1 rounded-lg border-2 border-purple-400",children:[Object(c.jsx)("option",{value:"2",children:"2 Kelompok"}),Object(c.jsx)("option",{value:"3",children:"3 Kelompok"}),Object(c.jsx)("option",{value:"4",children:"4 Kelompok"}),Object(c.jsx)("option",{value:"5",children:"5 Kelompok"}),Object(c.jsx)("option",{value:"6",children:"6 Kelompok"}),Object(c.jsx)("option",{value:"7",children:"7 Kelompok"}),Object(c.jsx)("option",{value:"8",children:"8 Kelompok"}),Object(c.jsx)("option",{value:"9",children:"9 Kelompok"}),Object(c.jsx)("option",{value:"10",children:"10 Kelompok"}),Object(c.jsx)("option",{value:"11",children:"11 Kelompok"}),Object(c.jsx)("option",{value:"12",children:"12 Kelompok"}),Object(c.jsx)("option",{value:"13",children:"13 Kelompok"}),Object(c.jsx)("option",{value:"14",children:"14 Kelompok"}),Object(c.jsx)("option",{value:"15",children:"15 Kelompok"}),Object(c.jsx)("option",{value:"16",children:"16 Kelompok"}),Object(c.jsx)("option",{value:"17",children:"17 Kelompok"}),Object(c.jsx)("option",{value:"18",children:"18 Kelompok"}),Object(c.jsx)("option",{value:"19",children:"19 Kelompok"}),Object(c.jsx)("option",{value:"20",children:"20 Kelompok"})]}),Object(c.jsxs)("div",{className:"my-1 border-2 border-purple-400 p-1 rounded-lg",children:[Object(c.jsx)("input",{value:g,onChange:function(e){f(!g)},id:"ketua",type:"checkbox",className:"text-xl ml-2 mr-2 p-1"}),Object(c.jsx)("label",{htmlFor:"ketua",className:"mr-1",children:"Pilih Ketua"})]})]}),Object(c.jsx)("div",{className:"p-2 text-white rounded-lg font-normal my-3 bg-yellow-400 ",children:Object(c.jsx)("p",{children:"ketika melakukan grouping list pastikan jumlah anggota dengan jumlah kelompok bisa terbagi, tanpa sisa bagi. karna ketika terdapat sisa bagi, pembagian kelompok akan tidak merata."})}),Object(c.jsx)("div",{className:"flex md:flex-row flex-col flex-wrap",children:s&&""!=s?s:Object(c.jsx)("h1",{className:"text-3xl text-gray-400",children:"Tidak Ada Kelompok.."})})]})},f=function(e){var t=e.list,a=e.removeMember,n=Object(l.useRef)(null),s=function(e){n.current.style.transform="translateY(0%)",setTimeout((function(){n.current.style.transform="translateY(-100%)"}),1e3),a(e)},i=Object(l.useState)(!0),r=Object(m.a)(i,2),o=r[0],d=r[1],j=t.map((function(e,t){return Object(c.jsxs)("div",{className:"border-2 my-2 rounded-lg border-purple-400 items-center flex justify-between text-left",children:[Object(c.jsxs)("div",{className:"w-1/2 flex items-center justify-between",children:[Object(c.jsx)("li",{className:"pl-3 w-4/12",children:e.name}),Object(c.jsxs)("li",{className:"4/12",children:[e.age," ",e.age?"Tahun":"None"]}),Object(c.jsx)("li",{className:"4/12",children:e.gender?e.gender:"None"})]}),Object(c.jsx)("button",{onClick:function(){return s(e.id)},className:"p-3 text-white font-semibold bg-red-400",children:"Delete"})]},t)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{ref:n,className:"z-40 containerBoxAlert transition duration-500 w-full flex justify-center bg-transparent p-5 fixed",children:Object(c.jsx)("div",{className:"p-3 shadow-lg  rounded-lg opacity-80 boxAlert z-10 bg-red-100 text-lg inline-block border-2 border-red-400 ",children:"Data Berhasil Dihapus"})}),Object(c.jsxs)("h2",{className:"text-2xl text-purple-500 py-2",children:["List Nama - Nama Anggota Berjumlah ",t.length]}),t.length?Object(c.jsxs)("button",{onClick:function(){d(!o)},className:"p-2 bg-purple-400 font-semibold rounded-lg text-white",children:[o?"Show":"Hide"," List"]}):"",t.length?"":Object(c.jsx)("h2",{className:"text-3xl text-gray-400 text-left",children:"Tidak Ada List..."}),o?"":Object(c.jsx)("ul",{className:"text-center",children:t.length?j:""})]})},O=function(){var e=Object(l.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1];return Object(c.jsxs)("div",{className:"text-left text-gray-700 font-semibold",children:[Object(c.jsx)("h1",{className:"text-4xl font-semibold",children:"Setting Group :"}),Object(c.jsx)(p,{addMember:function(e){n([].concat(Object(j.a)(a),[e]))},list:a}),Object(c.jsx)("hr",{className:"w-full border-b-2 my-5 border-purple-300"}),Object(c.jsx)(f,{removeMember:function(e){var t=a.filter((function(t){return t.id!==e}));n(t)},list:a}),Object(c.jsx)("hr",{className:"w-full border-b-2 my-10 border-purple-300"}),Object(c.jsx)(g,{list:a})]})},k=a.p+"static/media/Meeting2.260930f5.png",N=function(){var e=Object(l.useRef)(null);return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("header",{className:"flex flex-col items-center  justify-center",children:Object(c.jsxs)("div",{className:"lg:flex-row  flex-col flex justify-evenly",children:[Object(c.jsx)("div",{ref:e,className:"w-full transition imgContainer  md:hidden block xl:block lg:w-2/5  bg-purple-300 rounded-full py-8",children:Object(c.jsx)("img",{src:k,className:"w-full",alt:""})}),Object(c.jsxs)("div",{className:"text-center lg:text-left groupHeaderContent w-full xl:w-6/12 text-purple-400 py-10",children:[Object(c.jsx)("h1",{className:"text-4xl font-semibold",children:"Mari Buat Groupmu !"}),Object(c.jsx)("p",{className:"text-xl py-2",children:"disini kamu dapat melakukan grouping kelompok secara adil dan lebih efisien tentunya"}),Object(c.jsx)("br",{}),Object(c.jsx)("h2",{className:"text-2xl text-left font-semibold",children:"Manfaat Menggunakan Fitur Group Ini :"}),Object(c.jsxs)("ul",{className:"pl-4 text-left list-decimal text-xl",children:[Object(c.jsx)("li",{className:"py-2",children:"Tidak Ada Perebutan Anggota Kelompok"}),Object(c.jsx)("li",{className:"py-2",children:"Semua Anggota Terbagi Dengan Adil"}),Object(c.jsx)("li",{className:"py-2",children:"Tidak Akan Ada Kecurangan Dalam Memilih"}),Object(c.jsx)("li",{className:"py-2",children:"Lebih Efisien untuk memilih"})]})]})]})})})},y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(N,{}),Object(c.jsx)("hr",{className:"w-full border-b-2 my-10 border-purple-300"}),Object(c.jsx)(O,{})]})},w=a.p+"static/media/login.1d3534fb.png",v=function(){return Object(c.jsxs)("div",{className:"flex home md:flex-row flex-col pt-10",children:[Object(c.jsx)("img",{className:"w-2/5 md:block hidden",src:w,alt:""}),Object(c.jsxs)("div",{className:"text-left",children:[Object(c.jsx)("h1",{className:"text-3xl text-purple-400 font-semibold",children:"Welcome to grouping it !"}),Object(c.jsx)("p",{className:"text-xl text-gray-700",children:"Selamat datang diwebsite ini, terimakasih sudah mengunjungi website ini untuk melihat fitur grouping nya kalian bsa ke bagian create group"}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{className:"border-2 border-purple-300 bg-white rounded-lg"}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"text-3xl text-purple-400 font-semibold",children:"More Information"}),Object(c.jsx)("p",{className:"text-xl text-gray-700",children:"cek bagian informasi untuk melihat informasi - informasi lainnya seperti teknologi yang digunakan dan lain - lain"})]})]})},M=a.p+"static/media/Coding.b5062ad2.png",K=a.p+"static/media/app.0cc980d2.png",S=a.p+"static/media/Meeting.3e7a7f6c.png",A=a.p+"static/media/Social.8b13d82d.png",C=function(){var e=Object(l.useRef)(null),t=Object(l.useRef)(null),a=Object(l.useRef)(null),n=function(a){e.current.querySelectorAll("span").forEach((function(e){e.classList.remove("text-purple-500")})),t.current.querySelectorAll(".info").forEach((function(e){e.style.transform="translateY(-150%)"})),t.current.querySelector(".".concat(a.target.id,"Info")).style.transform="translateY(0%)",a.target.classList.add("text-purple-500"),console.log(a.target)},s=function(e){"close"==e?a.current.style.transform="translateY(-100%)":"open"==e&&(a.current.style.transform="translateY(0%)")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{ref:a,className:"fixed transition duration-1000 flex justify-center items-center layer w-screen h-screen  bg-black z-30",children:Object(c.jsxs)("div",{className:"p-4 relative layerContent  z-20 w-8/12 transition duration-1000 rounded-lg my-5 justify-start bg-purple-400 text-white shadow-lg flex md:flex-row flex-col",children:[Object(c.jsx)("img",{className:"w-full hidden md:block md:w-1/2 pr-10",src:A,alt:""}),Object(c.jsxs)("div",{className:" text-center mt-5 w-full md:text-left",children:[Object(c.jsxs)("form",{action:"https://formspree.io/f/xvodoqov",method:"POST",children:[Object(c.jsx)("label",{className:"text-1xl md:text-2xl py-2  font-semibold block",children:"Your email:"}),Object(c.jsx)("input",{className:"p-2 text-gray-800 rounded-lg bg-purple-100 w-full mb-3 my-1",type:"email",name:"_replyto"}),Object(c.jsx)("label",{className:"text-1xl md:text-2xl py-2 font-semibold block",children:"Your message: "}),Object(c.jsx)("textarea",{className:"p-3 text-gray-800 rounded-lg bg-purple-100 my-1 block h-full w-full",name:"message"}),Object(c.jsx)("button",{className:"p-2 rounded-lg bg-purple-600 font-semibold mt-2 mx-1",type:"submit",children:"Send"}),Object(c.jsx)("hr",{className:"border-2 border-bottom-white my-5 bg-white rounded-lg"}),Object(c.jsx)("p",{children:"terimakasih sudah mengunjungi website sederhana saya, jika kalian memilik pesan dan kesan silahkan kirimkan melalu form diatas."})]}),Object(c.jsx)("button",{onClick:function(){s("close")},className:"p-2 rounded-lg  font-semibold mt-2 mx-1 absolute absolute closeBtnLayer",type:"submit",children:Object(c.jsx)("i",{class:"fas bg-purle-400 fa-2x fa-window-close"})})]})]})}),Object(c.jsxs)("div",{ref:t,className:"py-10 md:pt-5 flex justify-center relative w-11/12 pb-20 mx-auto",children:[Object(c.jsxs)("div",{className:"p-4 firstInfo info z-20 transition duration-1000 rounded-lg my-5 justify-start bg-purple-400 text-white shadow-lg flex md:flex-row flex-col",children:[Object(c.jsx)("img",{className:"w-full md:w-2/5 pr-10",src:M,alt:""}),Object(c.jsxs)("div",{className:"text-center mt-5 md:text-left",children:[Object(c.jsx)("h1",{className:"text-2xl md:text-4xl font-semibold",children:"Hallo, Hai - Hai Hallo !"}),Object(c.jsx)("p",{className:"text-lg md:text-xl",children:"Perkenalkan nama saya tegar deyustian, saya seorang pelajar SMA dan seorang front-end Developer, diwebsite ini saya sedang mengimplementasikan hasil belajar saya dengan library reactJS dari javascript."}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{className:"border-2 border-bottom-white bg-white rounded-lg"}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"text-2xl md:text-4xl font-semibold",children:"Technologi"}),Object(c.jsx)("p",{className:"text-lg md:text-lg",children:"website ini dibangun dengan beberap teknologi, pertama untuk kerangka website nya pastinya menggunakan HTML lalu untuk styling saya menggunakan CSS dan framework CSS (TailwindCSS) lalu untuk membangun logika - logika websitenya saya menggunakan bahasa pemrogramman javascript dan librarynya yaitu reactJS."})]})]}),Object(c.jsxs)("div",{className:"p-4 secondInfo info z-20 transition duration-1000 rounded-lg my-5 justify-start bg-green-400 text-white shadow-lg flex md:flex-row flex-col",children:[Object(c.jsx)("img",{className:"w-full md:w-1/2 pr-10",src:K,alt:""}),Object(c.jsxs)("div",{className:"text-center mt-5 md:text-left",children:[Object(c.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold",children:"About this website"}),Object(c.jsx)("p",{className:"text-lg md:text-xl",children:"didalam website ini saya membuat sebuah fitur untuk grouping kelompok, terdapat beberapa fitur didalamnya :"}),Object(c.jsxs)("ul",{className:"text-lg list-none md:list-disc pl-5",children:[Object(c.jsx)("li",{children:"mengelompokan list"}),Object(c.jsx)("li",{children:"memilih ketua dalam setiap list secara acak"}),Object(c.jsx)("li",{children:"tambah dan hapus user dari list"}),Object(c.jsx)("li",{children:"sisa bagi dari list akan dimasukan ke kelompok"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{className:"border-2 border-bottom-white bg-white rounded-lg"}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold",children:"Why i made this website"}),Object(c.jsx)("p",{className:"text-lg md:text-lg",children:"saya membuat website ini berdasarkan pengalaman saya, dimana sering dideskriminasi ketika ada pemilihan kelompok dalam sebuah lingkungan, akhirnya saya membuat website ini agar pembagian kelompok lebih adil dan efisien"})]})]}),Object(c.jsxs)("div",{className:"p-4 md:text-left text-center thirdInfo info z-20 transition duration-1000  rounded-lg my-5 justify-start \r bg-indigo-400 text-white shadow-lg flex md:flex-row flex-col",children:[Object(c.jsx)("img",{className:"w-full md:w-1/2 pr-0 md:pr-10",src:S,alt:""}),Object(c.jsxs)("div",{className:" mt-5 md:text-left w-full",children:[Object(c.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold",children:"my other websites"}),Object(c.jsxs)("ul",{className:"text-lg list-none md:list-disc pl-5",children:[Object(c.jsxs)("li",{children:["website to do app & data covid indonesia ",Object(c.jsx)("a",{className:"text-red-600",target:"_blank",href:"https://tegar-deyustian.netlify.app/",children:"Link"})]}),Object(c.jsxs)("li",{children:["website simple games ",Object(c.jsx)("a",{className:"text-red-600",target:"_blank",href:"https://kyo-reactgames.netlify.app/",children:"Link"})]}),Object(c.jsxs)("li",{children:["website card games ",Object(c.jsx)("a",{className:"text-red-600",target:"_blank",href:"http://kyocardgame.netlify.app/",children:" Link"})]}),Object(c.jsxs)("li",{children:["website islami quranku ",Object(c.jsx)("a",{className:"text-red-600",target:"_blank",href:"https://alquranku.netlify.app/",children:"Link"})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{className:"border-2 border-bottom-white bg-white rounded-lg"}),Object(c.jsx)("br",{}),Object(c.jsx)("h1",{className:"text-2xl md:text-3xl font-semibold",children:"Social media"}),Object(c.jsxs)("ul",{className:"text-lg list-none md:list-disc pl-5",children:[Object(c.jsx)("a",{target:"_blank",href:"https://www.facebook.com/tegardm/",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{class:"fab fa-facebook-square"})," Facebook"]})}),Object(c.jsx)("a",{target:"_blank",href:"https://github.com/lynxeevnxx",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{class:"fab fa-github-square"})," Github"]})}),Object(c.jsxs)("a",{target:"_blank",href:"https://www.instagram.com/tegar_deyustian/",children:[" ",Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{class:"fab fa-instagram",children:" "})," Instagram"]})]}),Object(c.jsx)("a",{href:"https://discord.gg/S4rrXQU",target:"_blank",children:Object(c.jsxs)("li",{children:[Object(c.jsx)("i",{class:"fab fa-discord",children:" "})," Discord"]})}),Object(c.jsx)("li",{className:"",children:Object(c.jsxs)("span",{className:"lowercase",children:[Object(c.jsx)("i",{class:"fas fa-envelope"})," tegardm@gmail.com"]})})]}),Object(c.jsx)("p",{className:"text-lg",children:"klik disini jika kalian punya pesan, saran & kritik"}),Object(c.jsxs)("button",{onClick:function(){s("open")},className:"p-2 rounded-lg bg-green-500 shadow-lg font-semibold",children:[Object(c.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Kirim Pesan"]})]})]}),Object(c.jsxs)("div",{ref:e,className:"text-7xl dot absolute",children:[Object(c.jsx)("span",{id:"first",onClick:n,className:"mx-2 text-purple-500 cursor-pointer",children:"."}),Object(c.jsx)("span",{id:"second",onClick:n,className:"mx-2 cursor-pointer",children:"."}),Object(c.jsx)("span",{id:"third",onClick:n,className:"mx-2 cursor-pointer",children:"."})]}),Object(c.jsx)("div",{className:"block md:hidden coverInfo"})]})]})},T=function(){return Object(c.jsx)("footer",{className:"p-10 w-full text-white font-semibold bg-purple-400",children:Object(c.jsx)("p",{children:"Copyright \xa9 2020 - Tegar Deyustian"})})},L=a.p+"static/media/404.b843e102.png",D=function(){var e=Object(d.f)();return setTimeout((function(){e.push("/")}),3e3),Object(c.jsxs)("div",{className:"w-full flex items-center justify-center flex-col",children:[Object(c.jsx)("img",{className:"w-2/5",src:L,alt:""}),Object(c.jsx)("h1",{className:"text-4xl font-bold my-5 text-gray-700",children:"Woops, Sorry This Page Is Not Found"}),Object(c.jsx)("p",{className:"text-xl font-semibol my-2 text-gray-700",children:"you will redirect to home..."})]})};var I=function(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)("div",{className:"App capitalize w-full h-full",children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{className:"w-10/12 allContainer mt-20 my-10 mx-auto",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",children:Object(c.jsx)(v,{})}),Object(c.jsx)(d.a,{path:"/create-group",children:Object(c.jsx)(y,{})}),Object(c.jsx)(d.a,{exact:!0,path:"/info",children:Object(c.jsx)(C,{})}),Object(c.jsx)(d.a,{children:Object(c.jsx)(D,{})})]})}),Object(c.jsx)(T,{})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),l(e),n(e),s(e),i(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),Y()}},[[39,1,2]]]);
//# sourceMappingURL=main.03c5b724.chunk.js.map