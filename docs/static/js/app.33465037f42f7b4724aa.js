webpackJsonp([1],{DUW5:function(o,e){},NHnr:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("7+uW"),n={render:function(){var o=this.$createElement,e=this._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=t("VU/8")({name:"App"},n,!1,function(o){t("gsu9")},null,null).exports,a=t("/ocq"),l={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{style:{backgroundColor:o.color},attrs:{id:"app"}},[t("div",{staticClass:"color"},[t("form",{on:{submit:o.play}},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.color,expression:"color"}],style:{color:o.color},attrs:{type:"text",placeholder:"enter a color"},domProps:{value:o.color},on:{input:function(e){e.target.composing||(o.color=e.target.value)}}}),o._v(" "),t("audio",{ref:"colorSound"},[t("source",{attrs:{src:o.sound}})])])])])},staticRenderFns:[]};var c=t("VU/8")({name:"Feelsbot",data:function(){return{color:"",sound:""}},methods:{play:function(){"red"===this.color&&(this.sound="static/angrysound.mp3",this.$refs.colorSound.play()),"blue"===this.color&&(this.sound="static/happysound.mp3",this.$refs.colorSound.play())}}},l,!1,function(o){t("DUW5")},null,null).exports;r.a.use(a.a);var u=new a.a({routes:[{path:"/",name:"Feelsbot",component:c}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:u,components:{App:s},template:"<App/>"})},gsu9:function(o,e){}},["NHnr"]);
//# sourceMappingURL=app.33465037f42f7b4724aa.js.map