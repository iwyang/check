import{S as t,i as e,s as a,r as n,a as r,e as s,m as i,I as c,f as l,c as o,b as d,d as m,n as u,g as h,h as f,p,j as $,t as g,k as v,l as D,o as E,J as w,G as T,A as b,q as A,u as S,v as L,w as _,x as O,y,z as M}from"./client.c5ec0434.js";import{c as x,a as C,h as H,L as I}from"./createOctokit.4995154f.js";function R(t,e,a){const n=t.slice();return n[9]=e[a],n}function N(t){let e,a,c,$,g,v=t[4].title+"",D=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"";return{c(){e=i(v),a=r(),c=s("span"),$=i(D),this.h()},l(t){e=u(t,v),a=o(t),c=d(t,"SPAN",{class:!0});var n=m(c);$=u(n,D),n.forEach(l),this.h()},h(){h(c,"class",g=T(`tag ${t[4].state}`)+" svelte-4o16l6")},m(t,n){f(t,e,n),f(t,a,n),f(t,c,n),p(c,$)},p(t,a){16&a&&v!==(v=t[4].title+"")&&b(e,v),16&a&&D!==(D=("closed"===t[4].state?t[4].metadata.start?n.i18n.incidentCompleted:n.i18n.incidentFixed:t[4].metadata.start?n.i18n.incidentScheduled:n.i18n.incidentOngoing)+"")&&b($,D),16&a&&g!==(g=T(`tag ${t[4].state}`)+" svelte-4o16l6")&&h(c,"class",g)},d(t){t&&l(e),t&&l(a),t&&l(c)}}}function U(t){let e,a=n.i18n.incidentDetails+"";return{c(){e=i(a)},l(t){e=u(t,a)},m(t,a){f(t,e,a)},p:A,d(t){t&&l(e)}}}function P(t){let e,a,c,$,g,v,D,E,w,T,b,_,O,y,M,x,C=n.i18n.incidentSubscribe+"",H=n.i18n.incidentViewOnGitHub+"";function I(t,e){return t[4].metadata.start?k:j}let N=I(t),U=N(t);function P(t,e){return t[4].metadata.start&&t[4].metadata.end?F:t[4].closed_at?B:void 0}let V=P(t),q=V&&V(t),z=t[3],J=[];for(let e=0;e<z.length;e+=1)J[e]=G(R(t,z,e));return{c(){e=s("div"),a=s("dl"),U.c(),c=S(),q&&q.c(),$=r(),g=s("div"),v=s("p"),D=s("a"),E=i(C),T=r(),b=s("p"),_=s("a"),O=i(H),M=r();for(let t=0;t<J.length;t+=1)J[t].c();x=S(),this.h()},l(t){e=d(t,"DIV",{class:!0});var n=m(e);a=d(n,"DL",{});var r=m(a);U.l(r),c=S(),q&&q.l(r),r.forEach(l),$=o(n),g=d(n,"DIV",{class:!0});var s=m(g);v=d(s,"P",{class:!0});var i=m(v);D=d(i,"A",{href:!0});var h=m(D);E=u(h,C),h.forEach(l),i.forEach(l),T=o(s),b=d(s,"P",{class:!0});var f=m(b);_=d(f,"A",{href:!0});var p=m(_);O=u(p,H),p.forEach(l),f.forEach(l),s.forEach(l),n.forEach(l),M=o(t);for(let e=0;e<J.length;e+=1)J[e].l(t);x=S(),this.h()},h(){h(D,"href",w=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`),h(v,"class","svelte-4o16l6"),h(_,"href",y=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`),h(b,"class","svelte-4o16l6"),h(g,"class","r svelte-4o16l6"),h(e,"class","f")},m(t,n){f(t,e,n),p(e,a),U.m(a,null),p(a,c),q&&q.m(a,null),p(e,$),p(e,g),p(g,v),p(v,D),p(D,E),p(g,T),p(g,b),p(b,_),p(_,O),f(t,M,n);for(let e=0;e<J.length;e+=1)J[e].m(t,n);f(t,x,n)},p(t,e){if(N===(N=I(t))&&U?U.p(t,e):(U.d(1),U=N(t),U&&(U.c(),U.m(a,c))),V===(V=P(t))&&q?q.p(t,e):(q&&q.d(1),q=V&&V(t),q&&(q.c(),q.m(a,null))),1&e&&w!==(w=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`)&&h(D,"href",w),1&e&&y!==(y=`https://github.com/${n.owner}/${n.repo}/issues/${t[0]}`)&&h(_,"href",y),40&e){let a;for(z=t[3],a=0;a<z.length;a+=1){const n=R(t,z,a);J[a]?J[a].p(n,e):(J[a]=G(n),J[a].c(),J[a].m(x.parentNode,x))}for(;a<J.length;a+=1)J[a].d(1);J.length=z.length}},i:A,o:A,d(t){t&&l(e),U.d(),q&&q.d(),t&&l(M),L(J,t),t&&l(x)}}}function V(t){let e,a;return e=new I({}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p:A,i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}function j(t){let e,a,r,c,o=n.i18n.incidentOpenedAt+"",h=new Date(t[4].created_at).toLocaleString()+"";return{c(){e=s("dt"),a=i(o),r=s("dd"),c=i(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(l),r=d(t,"DD",{});var s=m(r);c=u(s,h),s.forEach(l)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,c)},p(t,e){16&e&&h!==(h=new Date(t[4].created_at).toLocaleString()+"")&&b(c,h)},d(t){t&&l(e),t&&l(r)}}}function k(t){let e,a,c,h,$,g=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"",v=new Date(t[4].metadata.start).toLocaleString()+"";return{c(){e=s("dt"),a=i(g),c=r(),h=s("dd"),$=i(v)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,g),c=o(n),n.forEach(l),h=d(t,"DD",{});var r=m(h);$=u(r,v),r.forEach(l)},m(t,n){f(t,e,n),p(e,a),p(e,c),f(t,h,n),p(h,$)},p(t,e){16&e&&g!==(g=(new Date(t[4].metadata.start).getTime()<(new Date).getTime()?n.i18n.startedAt:n.i18n.startsAt)+"")&&b(a,g),16&e&&v!==(v=new Date(t[4].metadata.start).toLocaleString()+"")&&b($,v)},d(t){t&&l(e),t&&l(h)}}}function B(t){let e,a,r,c,o=n.i18n.incidentClosedAt+"",h=new Date(t[4].closed_at).toLocaleString()+"";return{c(){e=s("dt"),a=i(o),r=s("dd"),c=i(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(l),r=d(t,"DD",{});var s=m(r);c=u(s,h),s.forEach(l)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,c)},p(t,e){16&e&&h!==(h=new Date(t[4].closed_at).toLocaleString()+"")&&b(c,h)},d(t){t&&l(e),t&&l(r)}}}function F(t){let e,a,r,c,o=n.i18n.duration+"",h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"";return{c(){e=s("dt"),a=i(o),r=s("dd"),c=i(h)},l(t){e=d(t,"DT",{});var n=m(e);a=u(n,o),n.forEach(l),r=d(t,"DD",{});var s=m(r);c=u(s,h),s.forEach(l)},m(t,n){f(t,e,n),p(e,a),f(t,r,n),p(r,c)},p(t,e){16&e&&h!==(h=n.i18n.durationMin.replace(/\$DURATION/g,Math.floor((new Date(t[4].metadata.end).getTime()-new Date(t[4].metadata.start).getTime())/6e4))+"")&&b(c,h)},d(t){t&&l(e),t&&l(r)}}}function G(t){let e,a,i,c,u,$=t[5](t[9].body)+"",g=n.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${t[9].html_url}>${new Date(t[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${t[9].user.html_url}>@${t[9].user.login}</a>`)+"";return{c(){e=s("article"),a=s("p"),i=r(),c=s("div"),u=r(),this.h()},l(t){e=d(t,"ARTICLE",{});var n=m(e);a=d(n,"P",{class:!0}),m(a).forEach(l),i=o(n),c=d(n,"DIV",{}),m(c).forEach(l),u=o(n),n.forEach(l),this.h()},h(){h(a,"class","svelte-4o16l6")},m(t,n){f(t,e,n),p(e,a),a.innerHTML=$,p(e,i),p(e,c),c.innerHTML=g,p(e,u)},p(t,e){8&e&&$!==($=t[5](t[9].body)+"")&&(a.innerHTML=$),8&e&&g!==(g=n.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${t[9].html_url}>${new Date(t[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${t[9].user.html_url}>@${t[9].user.login}</a>`)+"")&&(c.innerHTML=g)},d(t){t&&l(e)}}}function q(t){let e,a,E,w,T,b,A,S,L,_,O,y,M=n.i18n.incidentBack+"";function x(t,e){return t[2]?U:N}document.title=e=n.i18n.incidentTitle.replace("$NUMBER",t[0]);let C=x(t),H=C(t);const I=[V,P],R=[];function j(t,e){return t[1]?0:1}return b=j(t),A=R[b]=I[b](t),{c(){a=r(),E=s("h2"),H.c(),w=r(),T=s("section"),A.c(),S=r(),L=s("footer"),_=s("a"),O=i(M),this.h()},l(t){c('[data-svelte="svelte-slinv8"]',document.head).forEach(l),a=o(t),E=d(t,"H2",{class:!0});var e=m(E);H.l(e),e.forEach(l),w=o(t),T=d(t,"SECTION",{});var n=m(T);A.l(n),n.forEach(l),S=o(t),L=d(t,"FOOTER",{class:!0});var r=m(L);_=d(r,"A",{href:!0});var s=m(_);O=u(s,M),s.forEach(l),r.forEach(l),this.h()},h(){h(E,"class","svelte-4o16l6"),h(_,"href",n.path),h(L,"class","svelte-4o16l6")},m(t,e){f(t,a,e),f(t,E,e),H.m(E,null),f(t,w,e),f(t,T,e),R[b].m(T,null),f(t,S,e),f(t,L,e),p(L,_),p(_,O),y=!0},p(t,[a]){(!y||1&a)&&e!==(e=n.i18n.incidentTitle.replace("$NUMBER",t[0]))&&(document.title=e),C===(C=x(t))&&H?H.p(t,a):(H.d(1),H=C(t),H&&(H.c(),H.m(E,null)));let r=b;b=j(t),b===r?R[b].p(t,a):($(),g(R[r],1,1,(()=>{R[r]=null})),v(),A=R[b],A?A.p(t,a):(A=R[b]=I[b](t),A.c()),D(A,1),A.m(T,null))},i(t){y||(D(A),y=!0)},o(t){g(A),y=!1},d(t){t&&l(a),t&&l(E),H.d(),t&&l(w),t&&l(T),R[b].d(),t&&l(S),t&&l(L)}}}function z(t,e,a){let{number:r}=e,s=w,i=!0,c=!0;const l=x(),o=n.owner,d=n.repo;let m=[],u={};return E((async()=>{try{if(a(4,u=(await C(`issue-${o}-${d}-${r}`,(()=>l.issues.get({owner:o,repo:d,issue_number:r,sort:"created",direction:"desc"})))).data),a(4,u.metadata={},u),u.body.includes("\x3c!--")){const t=u.body.split("\x3c!--")[1].split("--\x3e")[0];t.split("\n").filter((t=>t.trim())).filter((t=>t.includes(":"))).forEach((t=>{a(4,u.metadata[t.split(/:(.+)/)[0].trim()]=t.split(/:(.+)/)[1].trim(),u)}))}}catch(t){H(t)}a(2,c=!1);try{a(3,m=(await C(`issue-comments-${o}-${d}-${r}`,(()=>l.issues.listComments({owner:o,repo:d,issue_number:r})))).data.reverse())}catch(t){H(t)}a(1,i=!1)})),t.$$set=t=>{"number"in t&&a(0,r=t.number)},[r,i,c,m,u,s]}class J extends t{constructor(t){super(),e(this,t,z,q,a,{number:0})}}function K(t){let e,a;return e=new J({props:{number:t[0]}}),{c(){_(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,n){y(e,t,n),a=!0},p(t,[a]){const n={};1&a&&(n.number=t[0]),e.$set(n)},i(t){a||(D(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){M(e,t)}}}async function Q(t){const{number:e}=t.params;return{number:e}}function W(t,e,a){let{number:n}=e;return t.$$set=t=>{"number"in t&&a(0,n=t.number)},[n]}class X extends t{constructor(t){super(),e(this,t,W,K,a,{number:0})}}export{X as default,Q as preload};
