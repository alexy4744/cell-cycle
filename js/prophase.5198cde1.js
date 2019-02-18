(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["prophase"],{"253d":function(t,e,s){},"36b9":function(t,e,s){},"4c34":function(t,e,s){},"4ddd":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",{staticClass:"tagline"},[t._v("\n    The phase where the cell begins to break itself down to form new structures in favor of\n    mitosis.\n  ")]),s("p",{staticClass:"information"},[t._v("\n    Prophase is the stage where the cell loses its nucleolus and chromosomes become tightly\n    and condensely packed together. By condensing chromosomes, you can see them clearly now\n    as they are packed together so tightly unlike decondensed chromosomes.\n  ")]),t._m(1),s("p",{staticClass:"information"},[t._v("\n    The mitotic spindle is extremely important during mitosis. It is used to transport chromosomes\n    and are made with centrosomes. Centrosomes are made from microtubules, which are composed of the\n    protein, tubulin. This is why the cell needed to make more protein during\n    "),s("router-link",{attrs:{to:"/interphase"}},[t._v("interphase")]),t._v(" as they are used to make one of the most\n    important structures of mitosis. As prophase continues, the nucleolus breaks down, where the packed\n    chromosomes are released and the mitotic spindle will start to bind to chromosomes.\n  ")],1),s("v-img",{staticClass:"img",attrs:{src:"https://cdn.kastatic.org/ka-perseus-images/28bb23d0a9f1dc1e0be333eaab8808a014120c8d.png"}}),t._m(2),s("p",{staticClass:"information"},[t._v("\n    Microtubules bind in order to allow the mitotic spindle to move and organize during for\n    "),s("router-link",{attrs:{to:"/metaphase"}},[t._v("metaphase")]),t._v(". They can bind near the center of the chromosome\n    as they are the strongest point to bind to. These microtubules are called kinetochore microtubules\n    because the strongest point of the chromosome is made from the protein, kinetochore. However, not all\n    microtubules bind to chromosomes. Some microtubules extend and bind to a microtubule on the opposing pole\n    in order to stabilize the mitotic spindle.\n  ")],1),s("v-img",{staticClass:"img",attrs:{src:"https://cdn.kastatic.org/ka-perseus-images/e606653dc9793b3a29b399553d252e06d2586658.png"}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"topic"},[s("strong",[t._v("Prophase")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"sub-topic"},[s("strong",[t._v("Mitotic Spindle")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"sub-topic"},[s("strong",[t._v("Microtubules Binding")])])}],r=s("d225"),a=s("308d"),o=s("6bb5"),c=s("4e2b"),h=s("9ab4"),l=s("60a3"),d=function(t){function e(){return Object(r["a"])(this,e),Object(a["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(l["b"]);d=h["a"]([l["a"]],d);var m=d,u=m,p=(s("fb22"),s("2877")),g=s("6544"),f=s.n(g),b=s("adda"),v=Object(p["a"])(u,i,n,!1,null,"e7b0850c",null);e["default"]=v.exports;f()(v,{VImg:b["a"]})},adda:function(t,e,s){"use strict";s("253d"),s("4c34");var i=s("23bf"),n=s("58df"),r=Object(n["a"])(i["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),a=r,o=s("d9bd");e["a"]=a.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(o["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(o["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=function i(){var n=t.naturalHeight,r=t.naturalWidth;n||r?e.calculatedAspectRatio=r/n:null!=s&&setTimeout(i,s)};i()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=a.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},fb22:function(t,e,s){"use strict";var i=s("36b9"),n=s.n(i);n.a}}]);
//# sourceMappingURL=prophase.5198cde1.js.map