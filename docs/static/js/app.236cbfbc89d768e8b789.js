webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},r,!1,function(t){s("c3BV")},null,null).exports,o=s("/ocq"),n=s("mvHQ"),u=s.n(n),m=s("mtWM"),l=s.n(m),d={name:"Feelsbot",data:function(){return{color:"",emotion:"",angry:"",happy:"",sad:"",fearful:"",surprised:"",msg:"$  tell me anything you want, and i'll tell you how it makes me feel",msg1:"",msg2:"",msg3:"",msg4:"",msg5:"",time:0,gif:[],gifSrc:null,output:0,radomizer:""}},methods:{getDataDoStuffWithData:function(){var t=this,e=new Audio("static/angrysound.mp3"),s=new Audio("static/happysound.mp3"),i=new Audio("static/sadsound.mp3"),r=new Audio("static/fearfulsound.mp3"),a=new Audio("static/surprisedsound.mp3");l.a.post("https://apiv2.indico.io/emotion/",u()({api_key:"74327046b0f275d734b4089b24ec6792",data:t.emotion,threshold:.1})).then(function(o){console.log(o),o.data.results.anger&&o.data.results.anger>=.4&&(t.angry="#ff3f3f",t.msg="",t.msg1="$ that makes me feel angry",t.randomizer="angry",t.getGif(),e.play(),t.output=1,setTimeout(function(){e.pause()},5e3),setTimeout(function(){t.refresh()},5e3)),o.data.results.joy&&o.data.results.joy>=.2&&(t.happy="#2bd1fc",t.msg="",t.msg2="$  that makes me feel happy",t.randomizer="happy",t.getGif(),s.play(),t.output=1,setTimeout(function(){s.pause()},5e3),setTimeout(function(){t.refresh()},5e3)),o.data.results.sadness&&o.data.results.sadness>=.2&&(t.sad="#c04df9",t.msg="",t.msg3="$  that makes me feel sad",t.randomizer="sad",t.getGif(),i.play(),t.output=1,setTimeout(function(){i.pause()},5e3),setTimeout(function(){t.refresh()},5e3)),o.data.results.fear&&o.data.results.fear>=.2&&(t.fearful="#f3ea5f",t.msg="",t.msg4="$  that makes me feel afraid",t.randomizer="afraid",t.getGif(),r.play(),t.output=1,setTimeout(function(){r.pause()},5e3),setTimeout(function(){t.refresh()},5e3)),o.data.results.surprise&&o.data.results.surprise>=.2&&(t.surprised="#42f459",t.msg="",t.msg5="$  that makes me feel surprised",t.randomizer="surprised",t.getGif(),a.play(),t.output=1,setTimeout(function(){a.pause()},5e3),setTimeout(function(){t.refresh()},5e3)),0===t.output&&(t.msg="$  I'm sorry, i don't understand try saying it a different way")})},refresh:function(){this.color="",this.emotion="",this.angry="",this.happy="",this.sad="",this.fearful="",this.surprised="",this.msg="$  tell me something else. i like feelings",this.msg1="",this.msg2="",this.msg3="",this.msg4="",this.msg5="",this.gifSrc=null,this.randomizer="",console.log("refresh")},refresh2:function(){this.color="",this.emotion="",this.angry="",this.happy="",this.sad="",this.fearful="",this.surprised="",this.msg="$  tell me anything you want, and i'll tell you how it makes me feel",this.msg1="",this.msg2="",this.msg3="",this.msg4="",this.msg5="",this.gifSrc=null,this.randomizer="",this.console.log("refresh2")},resetTimer:function(){var t=this;clearTimeout(this.time),this.time=setTimeout(function(){t.refresh2()},5e3),console.log("reset timer")},getGif:function(){var t=this;null!=this.emotion&&(console.log("initializing"),l.a.get("https://api.giphy.com/v1/gifs/search?q="+this.emotion+Math.random()+this.randomizer+"&limit=1&rating=pg&api_key=MOMrgmevbH8gqLMUijBDYM0tCxWQxO8Z").then(function(e){console.log(e),t.gifSrc=e.data.data[0].images.original.url}).catch(function(t){console.log(t)}))}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"emotions","vbind:src":""}},[null!=t.gifSrc?s("img",{attrs:{id:"gif",src:t.gifSrc}}):t._e(),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.angry},attrs:{id:"angry"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.happy},attrs:{id:"happy"}}),s("br"),s("br"),s("br"),s("br"),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.getDataDoStuffWithData(e)}}},[s("div",{staticClass:"fakeScreen",attrs:{id:"output"}},[s("p",{staticClass:"line1"},[t._v(t._s(t.msg)+t._s(t.msg1)+t._s(t.msg2)+t._s(t.msg3)+t._s(t.msg4)+t._s(t.msg5)),s("span",{staticClass:"cursor1"},[t._v("_")])])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emotion,expression:"emotion"}],style:{color:t.color},attrs:{id:"textWindow",type:"text",placeholder:"tell me something"},domProps:{value:t.emotion},on:{keyup:t.resetTimer,input:function(e){e.target.composing||(t.emotion=e.target.value)}}}),t._v(" "),s("audio",{ref:"colorSoundAngry"},[s("source",{attrs:{src:"static/angrysound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundHappy"},[s("source",{attrs:{src:"static/happysound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundSad"},[s("source",{attrs:{src:"static/sadsound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundFearful"},[s("source",{attrs:{src:"static/fearfulsound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundSurprised"},[s("source",{attrs:{src:"static/surprisedsound.mp3"}})])]),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.sad},attrs:{id:"sad"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.fearful},attrs:{id:"fearful"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.surprised},attrs:{id:"surprised"}}),s("br"),s("br"),s("br"),s("br")])},staticRenderFns:[]};var f=s("VU/8")(d,c,!1,function(t){s("TZQ7")},"data-v-531a7e74",null).exports;i.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"Feelsbot",component:f}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:p,components:{App:a},template:"<App/>"})},TZQ7:function(t,e){},c3BV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.236cbfbc89d768e8b789.js.map