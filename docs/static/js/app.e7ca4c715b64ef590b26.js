webpackJsonp([1],{"5/rq":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},o,!1,function(t){s("c3BV")},null,null).exports,a=s("/ocq"),n=s("mvHQ"),u=s.n(n),l=s("mtWM"),m=s.n(l),c={name:"Feelsbot",data:function(){return{color:"",emotion:"",angry:"",happy:"",sad:"",fearful:"",surprised:"",msg:"tell me anything you want, and i'll tell you how it makes me feel",msg1:"",msg2:"",msg3:"",msg4:"",msg5:"",time:0,gif:[],gifSrc:null,output:0,guider:"robot",guider2:"machine cyborg",video:!1}},methods:{getDataDoStuffWithData:function(){var t=this,e=new Audio("static/angrysound.mp3"),s=new Audio("static/happysound.mp3"),i=new Audio("static/sadsound.mp3"),o=new Audio("static/fearfulsound.mp3"),r=new Audio("static/surprisedsound.mp3");m.a.post("https://apiv2.indico.io/emotion/",u()({api_key:"74327046b0f275d734b4089b24ec6792",data:t.emotion,threshold:.1})).then(function(a){console.log(a),a.data.results.anger&&a.data.results.anger>=.4&&(t.angry="#ff3f3f",t.msg="that makes me feel ",t.msg1="angry ",t.getGif(),e.play(),t.output=1,setTimeout(function(){e.pause()},9500),setTimeout(function(){t.refresh()},1e4)),a.data.results.joy&&a.data.results.joy>=.2&&(t.happy="#2bd1fc",t.msg="that makes me feel ",t.msg2="happy ",t.getGif(),s.play(),t.output=1,setTimeout(function(){s.pause()},9500),setTimeout(function(){t.refresh()},1e4)),a.data.results.sadness&&a.data.results.sadness>=.2&&(t.sad="#c04df9",t.msg="that makes me feel ",t.msg3="sad ",t.getGif(),i.play(),t.output=1,setTimeout(function(){i.pause()},9500),setTimeout(function(){t.refresh()},1e4)),a.data.results.fear&&a.data.results.fear>=.3&&(t.fearful="#f3ea5f",t.msg="that makes me feel ",t.msg4="afraid ",t.getGif(),o.play(),t.output=1,setTimeout(function(){o.pause()},9500),setTimeout(function(){t.refresh()},1e4)),a.data.results.surprise&&a.data.results.surprise>=.2&&(t.surprised="#42f459",t.msg="that makes me feel ",t.msg5="surprised ",t.getGif(),r.play(),t.output=1,setTimeout(function(){r.pause()},9500),setTimeout(function(){t.refresh()},1e4)),0===t.output&&(t.msg="I'm sorry, i don't understand try saying it a different way")})},refresh:function(){this.color="",this.emotion="",this.angry="",this.happy="",this.sad="",this.fearful="",this.surprised="",this.msg="tell me something else. i like feelings",this.msg1="",this.msg2="",this.msg3="",this.msg4="",this.msg5="",this.gifSrc=null,console.log("refresh")},refresh2:function(){this.color="",this.emotion="",this.angry="",this.happy="",this.sad="",this.fearful="",this.surprised="",this.msg="",this.msg1="",this.msg2="",this.msg3="",this.msg4="",this.msg5="",this.gifSrc=null,this.$router.push("/Video")},resetTimer:function(){var t=this;clearTimeout(this.time),this.time=setTimeout(function(){t.refresh2()},45e3),console.log("reset timer")},getGif:function(){var t=this;null!=this.emotion&&(console.log("initializing"),m.a.get("https://api.giphy.com/v1/gifs/search?q="+this.emotion+this.msg1+this.msg2+this.msg3+this.msg4+this.msg5+this.guider2+this.guider+"&limit=1&rating=g&api_key=MOMrgmevbH8gqLMUijBDYM0tCxWQxO8Z").then(function(e){console.log(e),t.gifSrc=e.data.data[0].images.original.url}).catch(function(t){console.log(t)}))}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"emotions"}},[null!=t.gifSrc?s("img",{attrs:{id:"gif",src:t.gifSrc}}):t._e(),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.angry},attrs:{id:"angry"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.happy},attrs:{id:"happy"}}),s("br"),s("br"),s("br"),s("br"),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.getDataDoStuffWithData(e)}}},[s("div",{staticClass:"fakeScreen",attrs:{id:"output"}},[s("p",{staticClass:"line1"},[t._v("$ "+t._s(t.msg)+"\n      "),s("span",{style:{color:t.angry}},[t._v(t._s(t.msg1))]),t._v(" "),s("span",{style:{color:t.happy}},[t._v(t._s(t.msg2))]),t._v(" "),s("span",{style:{color:t.sad}},[t._v(t._s(t.msg3))]),t._v(" "),s("span",{style:{color:t.fearful}},[t._v(t._s(t.msg4))]),t._v(" "),s("span",{style:{color:t.surprised}},[t._v(t._s(t.msg5))]),t._v(" "),s("span",{staticClass:"cursor1"},[t._v("_")])])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emotion,expression:"emotion"}],style:{color:t.color},attrs:{id:"textWindow",type:"text",placeholder:"tell me something"},domProps:{value:t.emotion},on:{keyup:t.resetTimer,input:function(e){e.target.composing||(t.emotion=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.sad},attrs:{id:"sad"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.fearful},attrs:{id:"fearful"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.surprised},attrs:{id:"surprised"}}),s("br"),s("br"),s("br"),s("br")])},staticRenderFns:[]};var f=s("VU/8")(c,d,!1,function(t){s("5/rq")},"data-v-746bdd9f",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"video"}},[1==this.video?e("video",{attrs:{width:"100%",height:"100%",controls:"",autoplay:"",src:"static/feels_bot.mp4",type:"video/mp4"}}):this._e(),this._v(" "),e("img",{attrs:{id:"try",src:"static/try.png"},on:{click:this.returnToBot}})])},staticRenderFns:[]};var g=s("VU/8")({name:"Video",data:function(){return{video:!0}},methods:{returnToBot:function(){this.$router.push("/")}}},p,!1,function(t){s("pAXZ")},null,null).exports;i.a.use(a.a);var h=new a.a({routes:[{path:"/",name:"Feelsbot",component:f},{path:"/Video",name:"Video",component:g}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},c3BV:function(t,e){},pAXZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e7ca4c715b64ef590b26.js.map