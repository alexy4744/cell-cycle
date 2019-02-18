(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["interphase"],{"253d":function(t,e,s){},"4c34":function(t,e,s){},"679d":function(t,e,s){},"864f":function(t,e,s){"use strict";var i=s("679d"),a=s.n(i);a.a},adda:function(t,e,s){"use strict";s("253d"),s("4c34");var i=s("23bf"),a=s("58df"),r=Object(a["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),n=r,c=s("d9bd");e["a"]=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(c["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var a=t.naturalHeight,r=t.naturalWidth;a||r?e.calculatedAspectRatio=r/a:null!=s&&setTimeout(i,s)};i()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},fb61:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",{staticClass:"tagline"},[t._v("The phase where the cell prepares for cell division.")]),s("p",{staticClass:"information"},[t._v("\n    Interphase is the stage where the cell spends most of its life in. It is the stage where it cells prepares\n    itself for the next division. Within this stage, there are 3 phases that the cell goes through while in interphase.\n  ")]),t._m(1),s("p",{staticClass:"tagline"},[t._v("Phase where the cell begins to grow larger and copy organelles.")]),t._m(2),s("v-img",{staticClass:"img",attrs:{src:"https://cdn.kastatic.org/ka-perseus-images/9c6a08e9311df5529c5899ec3639a29048509e44.png"}}),t._m(3),s("p",{staticClass:"tagline"},[t._v("The phase where DNA and the centrosome are replicated.")]),s("p",{staticClass:"information"},[t._v("\n    The S phase is the second step of interphase. During this phase, DNA is replicated and packaged into chromosome, where\n    "),s("strong",[t._v("each chromosome has 2 sister chromatids")]),t._v(". Centrosomes, are also duplicated as they are needed for the\n    mitotic spindle during\n    "),s("router-link",{attrs:{to:"/prophase"}},[t._v("prophase")]),t._v(". By the end of S phase, there will be\n    "),s("strong",[t._v("double the amount of DNA")]),t._v(" and the cell will proceed to the G2 phase.\n  ")],1),s("v-img",{staticClass:"img",attrs:{src:"http://cyberbridge.mcb.harvard.edu/images/mitosis4_2.png"}}),t._m(4),s("p",{staticClass:"tagline"},[t._v("The cell undergoes growth and organization to prepare for mitosis.")]),t._m(5),s("v-img",{staticClass:"img",attrs:{src:"https://cdn.kastatic.org/ka-perseus-images/3af02c1c6486f416ccaa4c328232fab788639a2c.png"}})],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"topic"},[s("strong",[t._v("Interphase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"sub-topic"},[s("strong",[t._v("G1 phase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"information"},[s("strong",[t._v("G1 phase")]),t._v(" is the first phase where the cell prepares for mitosis by undergoing cell growth by producing protein.\n    The cell does not proceed to the S phase if it doesn't meet all the growth factors. Instead, it will go back to the\n    "),s("strong",[t._v("G0 phase")]),t._v(", where the cell stops preparing to divide unless it is required to attempt dividing again for specific reasons.\n    This is regulates the process of cell cycle as it checks whether the cell has enough nutrients and is big enough to divide. It also\n    checks whether the DNA has been damaged or not before proceeding to the S phase.\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"sub-topic"},[s("strong",[t._v("S phase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"sub-topic"},[s("strong",[t._v("G2 phase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"information"},[t._v("\n    G1 and G2 phases are similar. They both are phases that the cell undergoes to produce more protein to prepare for mitosis.\n    G1 occurs prior the S phase and G2 occurs after. Protein is produced, more specifically microtubules that will be needed for\n    mitosis. The G2 phase also checks again whether the DNA is damaged or not and to ensure that it has fully copied the DNA.\n    If there is a problem with the DNA, the cell either has to fix it, or else it will self-destruct. Self destruction of a cell\n    is called\n    "),s("strong",[t._v("apoptosis")]),t._v(". By ensuring the validity of the DNA, it significantly helps prevent mutations and cancer\n    in offspring cells.\n  ")])}],r=s("d225"),n=s("308d"),c=s("6bb5"),o=s("4e2b"),h=s("9ab4"),l=s("60a3"),d=function(t){function e(){return Object(r["a"])(this,e),Object(n["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(l["b"]);d=h["a"]([l["a"]],d);var p=d,u=p,g=(s("864f"),s("2877")),m=s("6544"),f=s.n(m),v=s("adda"),_=Object(g["a"])(u,i,a,!1,null,"3ecc1e66",null);e["default"]=_.exports;f()(_,{VImg:v["a"]})}}]);
//# sourceMappingURL=interphase.d1420f93.js.map