import{s as Zt,d as Cl,f as ft,u as wl,g as Ll,e as kl,r as pl,h as Il,i as ut,n as Sl}from"../chunks/scheduler.DI_v52n4.js";import{S as $t,i as el,e as a,s as g,c as r,a as h,f as p,d as n,o as l,p as B,g as S,h as e,z as q,n as tl,l as ll,t as E,b as C,u as vl,y as F,v as cl,A as Y,w as _l,j as Z,x as bl,B as Yt,C as Tl}from"../chunks/index.3k_B-fqz.js";const Al=t=>({}),gl=t=>({});function yl(t){let o;return{c(){o=E(`Set the visibility of one image over the other. 0 is full visibility of
        the second image and 100 is full visibility of the first image. Any
        amount in-between is a left/right cutoff at the percentage of the
        slider.`)},l(s){o=C(s,`Set the visibility of one image over the other. 0 is full visibility of
        the second image and 100 is full visibility of the first image. Any
        amount in-between is a left/right cutoff at the percentage of the
        slider.`)},m(s,k){S(s,o,k)},d(s){s&&n(o)}}}function Dl(t){let o,s,k,w,d,I,A,L,_,u,c,m,T,G;const R=t[7]["slider-label"],H=Cl(R,t,t[6],gl),U=H||yl();return{c(){o=a("div"),s=a("img"),w=g(),d=a("img"),A=g(),L=a("label"),_=a("span"),U&&U.c(),u=g(),c=a("input"),this.h()},l(b){o=r(b,"DIV",{class:!0,style:!0,"data-testid":!0});var v=h(o);s=r(v,"IMG",{src:!0,alt:!0,class:!0}),w=p(v),d=r(v,"IMG",{src:!0,alt:!0,class:!0}),A=p(v),L=r(v,"LABEL",{class:!0});var X=h(L);_=r(X,"SPAN",{class:!0});var N=h(_);U&&U.l(N),N.forEach(n),u=p(X),c=r(X,"INPUT",{type:!0,min:!0,max:!0,class:!0}),X.forEach(n),v.forEach(n),this.h()},h(){ft(s.src,k=t[0])||l(s,"src",k),l(s,"alt",t[1]),l(s,"class","left-img svelte-1tnkxgk"),ft(d.src,I=t[2])||l(d,"src",I),l(d,"alt",t[3]),l(d,"class","right-img svelte-1tnkxgk"),l(_,"class","visually-hidden svelte-1tnkxgk"),l(c,"type","range"),l(c,"min","0"),l(c,"max","100"),c.value=t[4],l(c,"class","svelte-1tnkxgk"),l(L,"class","svelte-1tnkxgk"),l(o,"class","svelte-compare-image-container svelte-1tnkxgk"),B(o,"--slider-position",t[4]+"%"),l(o,"data-testid","svelte-compare-image")},m(b,v){S(b,o,v),e(o,s),e(o,w),e(o,d),e(o,A),e(o,L),e(L,_),U&&U.m(_,null),e(L,u),e(L,c),m=!0,T||(G=[q(c,"input",t[5]),q(c,"change",t[5]),q(c,"click",Pl)],T=!0)},p(b,[v]){(!m||v&1&&!ft(s.src,k=b[0]))&&l(s,"src",k),(!m||v&2)&&l(s,"alt",b[1]),(!m||v&4&&!ft(d.src,I=b[2]))&&l(d,"src",I),(!m||v&8)&&l(d,"alt",b[3]),H&&H.p&&(!m||v&64)&&wl(H,R,b,b[6],m?kl(R,b[6],v,Al):Ll(b[6]),gl),(!m||v&16)&&(c.value=b[4]),(!m||v&16)&&B(o,"--slider-position",b[4]+"%")},i(b){m||(tl(U,b),m=!0)},o(b){ll(U,b),m=!1},d(b){b&&n(o),U&&U.d(b),T=!1,pl(G)}}}function Pl(t){t.target.focus()}function Ul(t,o,s){let{$$slots:k={},$$scope:w}=o,{imageLeftSrc:d=""}=o,{imageLeftAlt:I=""}=o,{imageRightSrc:A=""}=o,{imageRightAlt:L=""}=o,_=50,u=null;function c(m){u&&cancelAnimationFrame(u),u=requestAnimationFrame(()=>{s(4,_=m.target.valueAsNumber)})}return t.$$set=m=>{"imageLeftSrc"in m&&s(0,d=m.imageLeftSrc),"imageLeftAlt"in m&&s(1,I=m.imageLeftAlt),"imageRightSrc"in m&&s(2,A=m.imageRightSrc),"imageRightAlt"in m&&s(3,L=m.imageRightAlt),"$$scope"in m&&s(6,w=m.$$scope)},[d,I,A,L,_,c,w,k]}class Bl extends $t{constructor(o){super(),el(this,o,Ul,Dl,Zt,{imageLeftSrc:0,imageLeftAlt:1,imageRightSrc:2,imageRightAlt:3})}}function Hl(t){let o;return{c(){o=E(`Set the visibility of one image over the other. 0 is full visibility of
      the second image and 100 is full visibility of the first image. Any amount
      in-between is a left/right cutoff at the percentage of the slider.`)},l(s){o=C(s,`Set the visibility of one image over the other. 0 is full visibility of
      the second image and 100 is full visibility of the first image. Any amount
      in-between is a left/right cutoff at the percentage of the slider.`)},m(s,k){S(s,o,k)},d(s){s&&n(o)}}}function Nl(t){let o,s="Example",k,w,d,I,A="Left Image Size",L,_,u,c="Width",m,T,G,R,H,U="Height",b,v,X,N,ke,J,Ie,$,Se,dt,ht,V,Te,il="Right Image Size",mt,se,oe,al="Width",gt,K,pt,fe,ue,rl="Height",vt,Q,ct,ee,_t,te,Ve,bt,ze,Et,xe,P,de,Ae,Ct,x,wt,he,Me,Lt,kt,me,ye,It,le,St,De,je,Tt,ge,pe,nl="Handle Background Image",At,M,yt,ve,Pe,Dt,j,Pt,ce,We,Ut,Bt,_e,Ue,Ht,ie,Nt,Be,Oe,Rt,be,He,Vt,W,zt,Ee,Fe,xt,qe,Ce,ae,y,Ge,Je,Ke,Qe,re,sl="Code Snippet",Xe,we,ol=`The CSS Custom Properties are optional. The configuration for the preview
  above is shown below.`,Ye,Le,Ze,D,Mt,fl;return ae=new Bl({props:{imageLeftSrc:"https://via.placeholder.com/"+t[1]+"x"+t[0]+"/ffaa00/ffffff/?text=Example+Text",imageLeftAlt:"left",imageRightSrc:"https://via.placeholder.com/"+t[3]+"x"+t[2]+"/00aaff/ffffff?text=Example+Text",imageRightAlt:"right",$$slots:{"slider-label":[Hl]},$$scope:{ctx:t}}}),{c(){o=a("h2"),o.textContent=s,k=g(),w=a("div"),d=a("fieldset"),I=a("legend"),I.textContent=A,L=g(),_=a("div"),u=a("label"),u.textContent=c,m=g(),T=a("input"),G=g(),R=a("div"),H=a("label"),H.textContent=U,b=g(),v=a("input"),X=g(),N=a("output"),ke=E("Dimensions are "),J=a("code"),Ie=E(t[1]),$=E("px x "),Se=E(t[0]),dt=E("px"),ht=g(),V=a("fieldset"),Te=a("legend"),Te.textContent=il,mt=g(),se=a("div"),oe=a("label"),oe.textContent=al,gt=g(),K=a("input"),pt=g(),fe=a("div"),ue=a("label"),ue.textContent=rl,vt=g(),Q=a("input"),ct=g(),ee=a("output"),_t=E("Dimensions are "),te=a("code"),Ve=E(t[3]),bt=E("px x "),ze=E(t[2]),Et=E("px"),xe=g(),P=a("div"),de=a("div"),Ae=a("label"),Ct=E(`Handle Size
      `),x=a("input"),wt=g(),he=a("output"),Me=E(t[4]),Lt=E("rem"),kt=g(),me=a("div"),ye=a("label"),It=E(`Handle Background Color
      `),le=a("input"),St=g(),De=a("output"),je=E(t[5]),Tt=g(),ge=a("div"),pe=a("div"),pe.textContent=nl,At=g(),M=a("pre"),yt=g(),ve=a("div"),Pe=a("label"),Dt=E(`Handle Border Width
      `),j=a("input"),Pt=g(),ce=a("output"),We=E(t[7]),Ut=E("rem"),Bt=g(),_e=a("div"),Ue=a("label"),Ht=E(`Slider Color
      `),ie=a("input"),Nt=g(),Be=a("output"),Oe=E(t[8]),Rt=g(),be=a("div"),He=a("label"),Vt=E(`Slider Width
      `),W=a("input"),zt=g(),Ee=a("output"),Fe=E(t[9]),xt=E("rem"),qe=g(),Ce=a("div"),y=a("div"),vl(ae.$$.fragment),Qe=g(),re=a("h3"),re.textContent=sl,Xe=g(),we=a("p"),we.textContent=ol,Ye=g(),Le=a("pre"),Ze=E(t[10]),this.h()},l(i){o=r(i,"H2",{"data-svelte-h":!0}),F(o)!=="svelte-1jcu5zc"&&(o.textContent=s),k=p(i),w=r(i,"DIV",{class:!0});var f=h(w);d=r(f,"FIELDSET",{"aria-describedby":!0,class:!0});var z=h(d);I=r(z,"LEGEND",{"data-svelte-h":!0}),F(I)!=="svelte-12sw1xp"&&(I.textContent=A),L=p(z),_=r(z,"DIV",{});var $e=h(_);u=r($e,"LABEL",{for:!0,"data-svelte-h":!0}),F(u)!=="svelte-kmw41q"&&(u.textContent=c),m=p($e),T=r($e,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),$e.forEach(n),G=p(z),R=r(z,"DIV",{});var et=h(R);H=r(et,"LABEL",{for:!0,"data-svelte-h":!0}),F(H)!=="svelte-kxegpi"&&(H.textContent=U),b=p(et),v=r(et,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),et.forEach(n),X=p(z),N=r(z,"OUTPUT",{id:!0,for:!0});var jt=h(N);ke=C(jt,"Dimensions are "),J=r(jt,"CODE",{});var Ne=h(J);Ie=C(Ne,t[1]),$=C(Ne,"px x "),Se=C(Ne,t[0]),dt=C(Ne,"px"),Ne.forEach(n),jt.forEach(n),z.forEach(n),ht=p(f),V=r(f,"FIELDSET",{"aria-describedby":!0,class:!0});var ne=h(V);Te=r(ne,"LEGEND",{"data-svelte-h":!0}),F(Te)!=="svelte-ly61mw"&&(Te.textContent=il),mt=p(ne),se=r(ne,"DIV",{});var tt=h(se);oe=r(tt,"LABEL",{for:!0,"data-svelte-h":!0}),F(oe)!=="svelte-1p0l477"&&(oe.textContent=al),gt=p(tt),K=r(tt,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),tt.forEach(n),pt=p(ne),fe=r(ne,"DIV",{});var lt=h(fe);ue=r(lt,"LABEL",{for:!0,"data-svelte-h":!0}),F(ue)!=="svelte-vcnpa3"&&(ue.textContent=rl),vt=p(lt),Q=r(lt,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),lt.forEach(n),ct=p(ne),ee=r(ne,"OUTPUT",{id:!0,for:!0});var Wt=h(ee);_t=C(Wt,"Dimensions are "),te=r(Wt,"CODE",{});var Re=h(te);Ve=C(Re,t[3]),bt=C(Re,"px x "),ze=C(Re,t[2]),Et=C(Re,"px"),Re.forEach(n),Wt.forEach(n),ne.forEach(n),f.forEach(n),xe=p(i),P=r(i,"DIV",{class:!0});var O=h(P);de=r(O,"DIV",{});var it=h(de);Ae=r(it,"LABEL",{});var Ot=h(Ae);Ct=C(Ot,`Handle Size
      `),x=r(Ot,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),Ot.forEach(n),wt=p(it),he=r(it,"OUTPUT",{for:!0});var Ft=h(he);Me=C(Ft,t[4]),Lt=C(Ft,"rem"),Ft.forEach(n),it.forEach(n),kt=p(O),me=r(O,"DIV",{});var at=h(me);ye=r(at,"LABEL",{});var qt=h(ye);It=C(qt,`Handle Background Color
      `),le=r(qt,"INPUT",{id:!0,type:!0}),qt.forEach(n),St=p(at),De=r(at,"OUTPUT",{for:!0});var ul=h(De);je=C(ul,t[5]),ul.forEach(n),at.forEach(n),Tt=p(O),ge=r(O,"DIV",{});var rt=h(ge);pe=r(rt,"DIV",{id:!0,"data-svelte-h":!0}),F(pe)!=="svelte-v7r6f7"&&(pe.textContent=nl),At=p(rt),M=r(rt,"PRE",{contenteditable:!0,"aria-labelledby":!0,class:!0}),h(M).forEach(n),rt.forEach(n),yt=p(O),ve=r(O,"DIV",{});var nt=h(ve);Pe=r(nt,"LABEL",{});var Gt=h(Pe);Dt=C(Gt,`Handle Border Width
      `),j=r(Gt,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),Gt.forEach(n),Pt=p(nt),ce=r(nt,"OUTPUT",{for:!0});var Jt=h(ce);We=C(Jt,t[7]),Ut=C(Jt,"rem"),Jt.forEach(n),nt.forEach(n),Bt=p(O),_e=r(O,"DIV",{});var st=h(_e);Ue=r(st,"LABEL",{});var Kt=h(Ue);Ht=C(Kt,`Slider Color
      `),ie=r(Kt,"INPUT",{id:!0,type:!0}),Kt.forEach(n),Nt=p(st),Be=r(st,"OUTPUT",{for:!0});var dl=h(Be);Oe=C(dl,t[8]),dl.forEach(n),st.forEach(n),Rt=p(O),be=r(O,"DIV",{});var ot=h(be);He=r(ot,"LABEL",{});var Qt=h(He);Vt=C(Qt,`Slider Width
      `),W=r(Qt,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),Qt.forEach(n),zt=p(ot),Ee=r(ot,"OUTPUT",{for:!0});var Xt=h(Ee);Fe=C(Xt,t[9]),xt=C(Xt,"rem"),Xt.forEach(n),ot.forEach(n),O.forEach(n),qe=p(i),Ce=r(i,"DIV",{class:!0});var hl=h(Ce);y=r(hl,"DIV",{style:!0});var El=h(y);cl(ae.$$.fragment,El),hl.forEach(n),Qe=p(i),re=r(i,"H3",{id:!0,"data-svelte-h":!0}),F(re)!=="svelte-g2f56h"&&(re.textContent=sl),Xe=p(i),we=r(i,"P",{"data-svelte-h":!0}),F(we)!=="svelte-19i4qdw"&&(we.textContent=ol),Ye=p(i),Le=r(i,"PRE",{"aria-labelledby":!0});var ml=h(Le);Ze=C(ml,t[10]),ml.forEach(n),this.h()},h(){l(u,"for","left-image-width"),l(T,"id","left-image-width"),l(T,"type","range"),l(T,"min","100"),l(T,"max","2000"),l(T,"step","50"),T.value=t[1],l(H,"for","left-image-height"),l(v,"id","left-image-height"),l(v,"type","range"),l(v,"min","100"),l(v,"max","2000"),l(v,"step","50"),v.value=t[0],l(N,"id","left-dimensions"),l(N,"for","left-image-width left-image-height"),l(d,"aria-describedby","left-dimensions"),l(d,"class","svelte-1fjfrg1"),l(oe,"for","right-image-width"),l(K,"id","right-image-width"),l(K,"type","range"),l(K,"min","100"),l(K,"max","2000"),l(K,"step","50"),K.value=t[3],l(ue,"for","right-image-height"),l(Q,"id","right-image-height"),l(Q,"type","range"),l(Q,"min","100"),l(Q,"max","2000"),l(Q,"step","50"),Q.value=t[2],l(ee,"id","right-dimensions"),l(ee,"for","right-image-width right-image-height"),l(V,"aria-describedby","right-dimensions"),l(V,"class","svelte-1fjfrg1"),l(w,"class","image-resizers form-group svelte-1fjfrg1"),l(x,"id","handle-size"),l(x,"type","range"),l(x,"min","1"),l(x,"max","5"),l(x,"step","0.125"),l(he,"for","handle-size"),l(le,"id","handle-background-color"),l(le,"type","color"),l(De,"for","handle-background-color"),l(pe,"id","handle-background-image-label"),l(M,"contenteditable","true"),l(M,"aria-labelledby","handle-background-image-label"),l(M,"class","svelte-1fjfrg1"),t[6]===void 0&&Il(()=>t[14].call(M)),l(j,"id","handle-border-width"),l(j,"type","range"),l(j,"min","0"),l(j,"max","1"),l(j,"step","0.0625"),l(ce,"for","handle-border-width"),l(ie,"id","slider-color"),l(ie,"type","color"),l(Be,"for","slider-color"),l(W,"id","slider-width"),l(W,"type","range"),l(W,"min","0"),l(W,"max","1"),l(W,"step","0.0625"),l(Ee,"for","slider-width"),l(P,"class","form-group svelte-1fjfrg1"),B(y,"display","contents"),B(y,"--handle-size",Ge=t[4]+"rem"),B(y,"--handle-background-color",t[5]),B(y,"--handle-background-image",t[6]),B(y,"--handle-border-width",Je=t[7]+"rem"),B(y,"--slider-color",t[8]),B(y,"--slider-width",Ke=t[9]+"rem"),l(Ce,"class","wrapper svelte-1fjfrg1"),l(re,"id","code-snippet"),l(Le,"aria-labelledby","code-snippet")},m(i,f){S(i,o,f),S(i,k,f),S(i,w,f),e(w,d),e(d,I),e(d,L),e(d,_),e(_,u),e(_,m),e(_,T),e(d,G),e(d,R),e(R,H),e(R,b),e(R,v),e(d,X),e(d,N),e(N,ke),e(N,J),e(J,Ie),e(J,$),e(J,Se),e(J,dt),e(w,ht),e(w,V),e(V,Te),e(V,mt),e(V,se),e(se,oe),e(se,gt),e(se,K),e(V,pt),e(V,fe),e(fe,ue),e(fe,vt),e(fe,Q),e(V,ct),e(V,ee),e(ee,_t),e(ee,te),e(te,Ve),e(te,bt),e(te,ze),e(te,Et),S(i,xe,f),S(i,P,f),e(P,de),e(de,Ae),e(Ae,Ct),e(Ae,x),Y(x,t[4]),e(de,wt),e(de,he),e(he,Me),e(he,Lt),e(P,kt),e(P,me),e(me,ye),e(ye,It),e(ye,le),Y(le,t[5]),e(me,St),e(me,De),e(De,je),e(P,Tt),e(P,ge),e(ge,pe),e(ge,At),e(ge,M),t[6]!==void 0&&(M.textContent=t[6]),e(P,yt),e(P,ve),e(ve,Pe),e(Pe,Dt),e(Pe,j),Y(j,t[7]),e(ve,Pt),e(ve,ce),e(ce,We),e(ce,Ut),e(P,Bt),e(P,_e),e(_e,Ue),e(Ue,Ht),e(Ue,ie),Y(ie,t[8]),e(_e,Nt),e(_e,Be),e(Be,Oe),e(P,Rt),e(P,be),e(be,He),e(He,Vt),e(He,W),Y(W,t[9]),e(be,zt),e(be,Ee),e(Ee,Fe),e(Ee,xt),S(i,qe,f),S(i,Ce,f),e(Ce,y),_l(ae,y,null),S(i,Qe,f),S(i,re,f),S(i,Xe,f),S(i,we,f),S(i,Ye,f),S(i,Le,f),e(Le,Ze),D=!0,Mt||(fl=[ut(t[11].call(null,T)),ut(t[11].call(null,v)),ut(t[11].call(null,K)),ut(t[11].call(null,Q)),q(x,"change",t[12]),q(x,"input",t[12]),q(le,"input",t[13]),q(M,"input",t[14]),q(j,"change",t[15]),q(j,"input",t[15]),q(ie,"input",t[16]),q(W,"change",t[17]),q(W,"input",t[17])],Mt=!0)},p(i,[f]){(!D||f&2)&&(T.value=i[1]),(!D||f&1)&&(v.value=i[0]),(!D||f&2)&&Z(Ie,i[1]),(!D||f&1)&&Z(Se,i[0]),(!D||f&8)&&(K.value=i[3]),(!D||f&4)&&(Q.value=i[2]),(!D||f&8)&&Z(Ve,i[3]),(!D||f&4)&&Z(ze,i[2]),f&16&&Y(x,i[4]),(!D||f&16)&&Z(Me,i[4]),f&32&&Y(le,i[5]),(!D||f&32)&&Z(je,i[5]),f&64&&i[6]!==M.textContent&&(M.textContent=i[6]),f&128&&Y(j,i[7]),(!D||f&128)&&Z(We,i[7]),f&256&&Y(ie,i[8]),(!D||f&256)&&Z(Oe,i[8]),f&512&&Y(W,i[9]),(!D||f&512)&&Z(Fe,i[9]),f&16&&Ge!==(Ge=i[4]+"rem")&&B(y,"--handle-size",Ge),f&32&&B(y,"--handle-background-color",i[5]),f&64&&B(y,"--handle-background-image",i[6]),f&128&&Je!==(Je=i[7]+"rem")&&B(y,"--handle-border-width",Je),f&256&&B(y,"--slider-color",i[8]),f&512&&Ke!==(Ke=i[9]+"rem")&&B(y,"--slider-width",Ke);const z={};f&3&&(z.imageLeftSrc="https://via.placeholder.com/"+i[1]+"x"+i[0]+"/ffaa00/ffffff/?text=Example+Text"),f&12&&(z.imageRightSrc="https://via.placeholder.com/"+i[3]+"x"+i[2]+"/00aaff/ffffff?text=Example+Text"),f&262144&&(z.$$scope={dirty:f,ctx:i}),ae.$set(z),(!D||f&1024)&&Z(Ze,i[10])},i(i){D||(tl(ae.$$.fragment,i),D=!0)},o(i){ll(ae.$$.fragment,i),D=!1},d(i){i&&(n(o),n(k),n(w),n(xe),n(P),n(qe),n(Ce),n(Qe),n(re),n(Xe),n(we),n(Ye),n(Le)),bl(ae),Mt=!1,pl(fl)}}}function Rl(t,o,s){let k,w=400,d=600,I=400,A=600;const L=N=>{let ke;function J(Ie){const{valueAsNumber:$,id:Se}=Ie.target;clearTimeout(ke),ke=window.setTimeout(()=>{switch(Se){case"left-image-height":{s(0,w=$);break}case"left-image-width":{s(1,d=$);break}case"right-image-height":{s(2,I=$);break}case"right-image-width":{s(3,A=$);break}}},300)}return N.addEventListener("input",J),{destroy(){N.removeEventListener("input",J)}}};let _=2.5,u="rgba(0, 0, 0, 0.6)",c=`url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')`,m=.125,T="#ffffff",G=.125;function R(){_=Yt(this.value),s(4,_)}function H(){u=this.value,s(5,u)}function U(){c=this.textContent,s(6,c)}function b(){m=Yt(this.value),s(7,m)}function v(){T=this.value,s(8,T)}function X(){G=Yt(this.value),s(9,G)}return t.$$.update=()=>{t.$$.dirty&1023&&s(10,k=`<CompareImage
  imageLeftSrc="https://via.placeholder.com/${d}x${w}/ffaa00/ffffff/?text=Example+Text"
  imageLeftAlt="left"
  imageRightSrc="https://via.placeholder.com/${A}x${I}/00aaff/ffffff?text=Example+Text"
  imageRightAlt="right"
  --handle-size="${_}rem"
  --handle-background-color="${u}"
  --handle-background-image="${c}"
  --handle-border-width="${m}rem"
  --slider-color="${T}"
  --slider-width="${G}rem"
>
  <svelte:fragment slot="slider-label">
    Set the visibility of one image over the other. 0 is full visibility of
    the second image and 100 is full visibility of the first image. Any
    amount in-between is a left/right cutoff at the percentage of the slider.
  </svelte:fragment>
</CompareImage>`)},[w,d,I,A,_,u,c,m,T,G,k,L,R,H,U,b,v,X]}class Vl extends $t{constructor(o){super(),el(this,o,Rl,Nl,Zt,{})}}function zl(t){let o,s,k="Svelte Compare Image",w,d,I=`A Svelte component to compare two images with a slider to reveal one over the
  other. Find the source on <a href="https://github.com/BrianMitchL/svelte-compare-image">GitHub</a>
  and on NPM at
  <a href="https://npmjs.com/package/svelte-compare-image"><code>svelte-compare-image</code></a>. <img alt="npm" src="https://img.shields.io/npm/v/svelte-compare-image"/>`,A,L,_;return L=new Vl({}),{c(){o=g(),s=a("h1"),s.textContent=k,w=g(),d=a("p"),d.innerHTML=I,A=g(),vl(L.$$.fragment),this.h()},l(u){Tl("svelte-l9pt6u",document.head).forEach(n),o=p(u),s=r(u,"H1",{"data-svelte-h":!0}),F(s)!=="svelte-1wovre1"&&(s.textContent=k),w=p(u),d=r(u,"P",{"data-svelte-h":!0}),F(d)!=="svelte-1uxs046"&&(d.innerHTML=I),A=p(u),cl(L.$$.fragment,u),this.h()},h(){document.title="Svelte Compare Image"},m(u,c){S(u,o,c),S(u,s,c),S(u,w,c),S(u,d,c),S(u,A,c),_l(L,u,c),_=!0},p:Sl,i(u){_||(tl(L.$$.fragment,u),_=!0)},o(u){ll(L.$$.fragment,u),_=!1},d(u){u&&(n(o),n(s),n(w),n(d),n(A)),bl(L,u)}}}class jl extends $t{constructor(o){super(),el(this,o,null,zl,Zt,{})}}export{jl as component};