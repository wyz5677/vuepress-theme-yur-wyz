(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(t,e,s){"use strict";s.r(e);var a={props:{current:{type:Number,default:1},pageSize:{type:Number,default:24},total:{type:Number,default:0}},data(){return{sCurrent:this.current,sTotal:this.total,showTotal:t=>`${this.$l("total")} ${t} ${this.$l("posts")}`}},watch:{current(t){this.sCurrent=t,this.$page.current=t},total(t){this.sTotal=t}},created(){this.handleCurrent()},methods:{handleCurrent(){this.$page.current>1&&this.onChange(this.$page.current)},onChange(t){t=Number(t),this.$emit("change",t)}}},r=s(37),n=Object(r.a)(a,(function(){return(0,this._self._c)("a-pagination",{attrs:{current:this.sCurrent,total:this.sTotal,"show-total":this.showTotal,"page-size":this.pageSize,"show-quick-jumper":!0},on:{change:this.onChange}})}),[],!1,null,null,null);e.default=n.exports}}]);