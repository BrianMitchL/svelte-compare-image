function y(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(O)}function S(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function st(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(I(e,n))}function ft(t,e,n,r){if(t){const i=q(t,e,n,r);return t[0](i)}}function q(t,e,n,r){return t[1]&&r?F(n.ctx.slice(),t[1](r(e))):n.ctx}function at(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|i[s];return o}return e.dirty|i}return e.dirty}function dt(t,e,n,r,i,o){if(i){const c=q(e,n,r,o);t.p(c,i)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ht(t){return t&&S(t.destroy)?t.destroy:y}let w=!1;function J(){w=!0}function K(){w=!1}function R(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,a=(i>0&&e[n[i]].claim_order<=l?i+1:R(1,i,b=>e[n[b]].claim_order,l))-1;r[u]=n[a]+1;const f=a+1;n[f]=u,i=Math.max(f,i)}const o=[],c=[];let s=e.length-1;for(let u=n[i]+1;u!=0;u=r[u-1]){for(o.push(e[u-1]);s>=u;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[u],a)}}function Q(t,e){if(w){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){w&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function pt(){return j(" ")}function yt(){return j("")}function gt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function xt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,r,i=!1){Y(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,i||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const u=n(s);return u===void 0?t.splice(c,1):t[c]=u,i?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,e,n,r){return B(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const s=i.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function $t(t,e,n){return Z(t,e,n,V)}function tt(t,e){return B(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>j(e),!0)}function Et(t){return tt(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function vt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Nt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function At(t,e){return new t(e)}let g;function p(t){g=t}function H(){if(!g)throw new Error("Function called outside component initialization");return g}function St(t){H().$$.on_mount.push(t)}function jt(t){H().$$.after_update.push(t)}const h=[],T=[];let m=[];const k=[],L=Promise.resolve();let N=!1;function P(){N||(N=!0,L.then(z))}function Ct(){return P(),L}function A(t){m.push(t)}const v=new Set;let _=0;function z(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;k.length;)k.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function nt(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const E=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Mt(){d.r||x(d.c),d=d.p}function rt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Tt(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function kt(t){t&&t.c()}function Ot(t,e){t&&t.l(e)}function it(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||A(()=>{const c=t.$$.on_mount.map(O).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(A)}function ct(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qt(t,e,n,r,i,o,c,s=[-1]){const u=g;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,b,...C)=>{const D=C.length?C[0]:b;return l.ctx&&i(l.ctx[f],l.ctx[f]=D)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](D),a&&ut(t,f)),b}):[],l.update(),a=!0,x(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){J();const f=X(e.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),K(),z()}p(u)}class Bt{$destroy(){ct(this,1),this.$destroy=y}$on(e,n){if(!S(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{it as A,ct as B,ft as C,Q as D,dt as E,_t as F,at as G,y as H,ot as I,st as J,gt as K,xt as L,x as M,I as N,ht as O,Nt as P,Bt as S,pt as a,mt as b,Et as c,Tt as d,yt as e,Mt as f,rt as g,U as h,qt as i,jt as j,V as k,$t as l,X as m,bt as n,St as o,vt as p,j as q,tt as r,lt as s,Ct as t,wt as u,Dt as v,T as w,At as x,kt as y,Ot as z};