webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("c3BV")},null,null).exports,i=s("/ocq"),n={name:"Feelsbot",data:function(){return{color:"",emotion:"",angry:"",happy:"",sad:"",fearful:"",disgusted:"",msg:"$  tell me anything you want, and i'll tell you how it makes me feel"}},methods:{eventPlay:function(){var t=this;"angry"===this.emotion&&(this.angry="#ff3f3f",this.$refs.colorSoundAngry.play(),this.msg="that makes me feel angry"),"happy"===this.emotion&&(this.happy="#2bd1fc",this.$refs.colorSoundHappy.play(),this.msg="that makes me feel happy"),"sad"===this.emotion&&(this.sad="#c04df9",this.$refs.colorSoundSad.play(),this.msg="that makes me feel sad"),"fearful"===this.emotion&&(this.fearful="#f3ea5f",this.$refs.colorSoundFearful.play(),this.msg="that makes me feel fearful"),"disgusted"===this.emotion&&(this.disgusted="#f2ae04",this.$refs.colorSoundDisgusted.play(),this.msg="that makes me feel disgusted",setTimeout(function(){t.refresh()},5e3))},refresh:function(){null!=this.msg&&(this.color="",this.emotion="",this.angry="",this.happy="",this.sad="",this.fearful="",this.disgusted="",this.msg="$  tell me something else. i like feelings",this.$refs.colorSoundDisgusted.pause())}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"emotions"}},[s("div",{staticClass:"emotion",style:{backgroundColor:t.angry},attrs:{id:"angry"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.happy},attrs:{id:"happy"}}),s("br"),s("br"),s("br"),s("br"),t._v(" "),s("form",{on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),t.eventPlay(e)):null}}},[s("div",{staticClass:"fakeScreen",attrs:{id:"output"}},[s("p",{staticClass:"line1"},[t._v(t._s(t.msg)),s("span",{staticClass:"cursor1"},[t._v("_")])])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.emotion,expression:"emotion"}],style:{color:t.color},attrs:{type:"text",placeholder:"tell me something"},domProps:{value:t.emotion},on:{input:function(e){e.target.composing||(t.emotion=e.target.value)}}}),t._v(" "),s("audio",{ref:"colorSoundAngry"},[s("source",{attrs:{src:"static/angrysound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundHappy"},[s("source",{attrs:{src:"static/happysound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundSad"},[s("source",{attrs:{src:"static/sadsound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundFearful"},[s("source",{attrs:{src:"static/fearfulsound.mp3"}})]),t._v(" "),s("audio",{ref:"colorSoundDisgusted"},[s("source",{attrs:{src:"static/disgustedsound.mp3"}})])]),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.sad},attrs:{id:"sad"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.fearful},attrs:{id:"fearful"}}),s("br"),s("br"),t._v(" "),s("div",{staticClass:"emotion",style:{backgroundColor:t.disgusted},attrs:{id:"disgusted"}}),s("br"),s("br"),s("br"),s("br")])},staticRenderFns:[]};var u=s("VU/8")(n,l,!1,function(t){s("tz87")},"data-v-548ced67",null).exports;o.a.use(i.a);var d=new i.a({routes:[{path:"/",name:"Feelsbot",component:u}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:d,components:{App:r},template:"<App/>"})},c3BV:function(t,e){},tz87:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9c65de75a664beea9c2e.js.map