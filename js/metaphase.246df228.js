(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["metaphase"],{"253d":function(t,e,i){},3236:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",{staticClass:"tagline"},[t._v("A checkpoint before\n    "),i("router-link",{attrs:{to:"/anaphase"}},[t._v("anaphase")]),t._v(".\n  ")],1),i("p",{staticClass:"information"},[t._v("\n    Metaphase makes use of the\n    "),i("router-link",{attrs:{to:"/prophase"}},[t._v("kinetochore microtubules")]),t._v(" created\n    in previous stages to align the chromosomes at the metaphase plate/equatorial plane (center of the cell).\n    It also runs through a series of checkpoint to ensure that it is ready for\n    "),i("router-link",{attrs:{to:"/anaphase"}},[t._v("anaphase")])],1),t._m(1),i("ol",[i("li",[t._v("It verifies that the\n      "),i("router-link",{attrs:{to:"/prophase"}},[t._v("kinetochore microtubules")]),t._v(" are properly binded to the chromosome.\n    ")],1),i("li",[t._v("Make sure that the duplicated chromosomes will divide equally in\n      "),i("router-link",{attrs:{to:"/anaphase"}},[t._v("anaphase")]),t._v(".\n    ")],1)]),i("p",{staticClass:"information"},[t._v("\n    If the cell does not meet all of the checkpoints, mitosis will be temporarily stopped until the problem has\n    been fixed so that it will pass all the required checkpoints. This further prevents mutation so that it ensures\n    there are equal number of chromosomes in the daughter and parent cells.\n  ")]),i("v-img",{staticClass:"img",attrs:{src:"https://cdn.kastatic.org/ka-perseus-images/5407efeb0c059ef99297910a4a46e0fbaec19211.png"}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"topic"},[i("strong",[t._v("Metaphase")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"sub-topic"},[i("strong",[t._v("Checkpoints")])])}],r=i("d225"),n=i("308d"),c=i("6bb5"),o=i("4e2b"),h=(i("cadf"),i("551c"),i("f751"),i("097d"),i("9ab4")),l=i("60a3"),d=function(t){function e(){return Object(r["a"])(this,e),Object(n["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),e}(l["b"]);d=h["a"]([l["a"]],d);var u=d,m=u,p=(i("4d3a"),i("2877")),g=i("6544"),f=i.n(g),v=i("adda"),_=Object(p["a"])(m,s,a,!1,null,"14dc5126",null);e["default"]=_.exports;f()(_,{VImg:v["a"]})},"4c34":function(t,e,i){},"4d3a":function(t,e,i){"use strict";var s=i("f053"),a=i.n(s);a.a},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var s=i("23bf"),a=i("58df"),r=Object(a["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),n=r,c=i("d9bd");e["a"]=n.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(c["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,r=t.naturalWidth;a||r?e.calculatedAspectRatio=r/a:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=n.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},f053:function(t,e,i){}}]);
//# sourceMappingURL=metaphase.246df228.js.map