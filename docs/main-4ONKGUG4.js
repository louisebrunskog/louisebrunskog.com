import{c as ct,d as Ie,f as Ee,g as Fe,h as ze}from"./chunk-XAZLOLJU.js";import{C as G,D as ue,E as fe,F as me,a as at,b as st,c as dt,f as lt,h as he,i as ht,j as pt,k as ut,l as ft,m as mt,n as L,o as N,p as W,q as gt,r as Z,s as _t,t as H,u as vt,v as wt,w as bt,x as Ct,y as pe,z as Oe}from"./chunk-JZM7AVIJ.js";import{$ as k,A as v,Ab as C,B as Se,Bb as E,Ca as ae,Db as ce,E as Ze,Eb as le,Fb as m,G as He,H as ke,Ob as nt,Pb as V,Q as ie,Ra as u,S as h,Sa as a,Ta as Ye,Tb as ot,U as Ge,Ua as Ke,V as Ue,Va as Xe,W as w,X as re,Ya as Je,Yb as F,Z as q,_a as De,aa as x,cb as $,db as et,dc as P,ea as f,eb as Re,fa as ne,fb as tt,g as Ce,ga as Qe,gb as D,hb as Y,ia as qe,ib as K,j as p,kb as X,lb as se,mb as de,n as Ne,na as O,nb as c,oa as T,ob as l,pb as R,qb as j,r as ye,ra as xe,rb as it,sb as M,ta as oe,tb as rt,ua as g,ub as _,vb as J,wa as B,wb as I,xa as $e,xb as Me,y as Q,yb as A,z as We,zb as b}from"./chunk-677CNPHX.js";var Tt="@",Bt=(()=>{class r{constructor(e,t,i,o,s){this.doc=e,this.delegate=t,this.zone=i,this.animationType=o,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=x(Ke,{optional:!0}),this.loadingSchedulerFn=x(jt,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-GGIWDR2A.js").then(i=>i),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(i=>{throw new Ge(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:o})=>{this._engine=i(this.animationType,this.doc);let s=new o(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,t){let i=this.delegate.createRenderer(e,t);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let o=new Te(i);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let S=s.createRenderer(e,t);o.use(S),this.scheduler?.notify(10)}).catch(s=>{o.use(i)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(t){Ye()}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac})}}return r})(),Te=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,i){this.delegate.insertBefore(n,e,t,i)}removeChild(n,e,t){this.delegate.removeChild(n,e,t)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,i){this.delegate.setAttribute(n,e,t,i)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,i){this.delegate.setStyle(n,e,t,i)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(i=>i.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(n,e,t)),this.delegate.listen(n,e,t)}shouldReplay(n){return this.replay!==null&&n.startsWith(Tt)}},jt=new q("");function yt(r="animations"){return Je("NgAsyncAnimations"),qe([{provide:Xe,useFactory:(n,e,t)=>new Bt(n,e,t,r),deps:[F,st,g]},{provide:ae,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var St=[{path:"",loadComponent:()=>import("./chunk-EL44JJQA.js").then(r=>r.MainComponent)}];var kt={providers:[yt(),at(),pt(St,ft(ht),ut({anchorScrolling:"disabled"}),mt({onSameUrlNavigation:"reload"})),nt({eventCoalescing:!0})]};var Lt=20,Be=(()=>{class r{constructor(e,t,i){this._ngZone=e,this._platform=t,this._scrolled=new p,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Lt){return this._platform.isBrowser?new Ce(t=>{this._globalSubscription||this._addGlobalListener();let i=e>0?this._scrolled.pipe(Se(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Ne()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(v(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let i=vt(t),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return Q(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(t){return new(t||r)(k(g),k(N),k(F,8))}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})(),ge=(()=>{class r{constructor(e,t,i,o){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=i,this.dir=o,this._destroyed=new p,this._elementScrolled=new Ce(s=>this.ngZone.runOutsideAngular(()=>Q(this.elementRef.nativeElement,"scroll").pipe(h(this._destroyed)).subscribe(s)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&Z()!=W.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),Z()==W.INVERTED?e.left=e.right:Z()==W.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;gt()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",i="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?i:t:e=="end"&&(e=s?t:i),s&&Z()==W.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Z()==W.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static{this.\u0275fac=function(t){return new(t||r)(a(B),a(Be),a(g),a(pe,8))}}static{this.\u0275dir=Qe({type:r,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}}return r})(),Nt=20,xt=(()=>{class r{constructor(e,t,i){this._platform=e,this._change=new p,this._changeListener=o=>{this._change.next(o)},this._document=i,t.runOutsideAngular(()=>{if(e.isBrowser){let o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),s=-o.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,S=-o.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:s,left:S}}change(e=Nt){return e>0?this._change.pipe(Se(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(t){return new(t||r)(k(N),k(g),k(F,8))}}static{this.\u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var je=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=ne({type:r})}static{this.\u0275inj=re({})}}return r})();var Dt=["*"],Ht=["content"],Gt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ut=["mat-drawer","mat-drawer-content","*"];function Qt(r,n){if(r&1){let e=j();c(0,"div",1),M("click",function(){O(e);let i=_();return T(i._onBackdropClicked())}),l()}if(r&2){let e=_();K("mat-drawer-shown",e._isShowingBackdrop())}}function qt(r,n){r&1&&(c(0,"mat-drawer-content"),I(1,2),l())}var $t={transformDrawer:ct("transform",[Fe("open, open-instant",Ee({transform:"none",visibility:"visible"})),Fe("void",Ee({"box-shadow":"none",visibility:"hidden"})),ze("void => open-instant",Ie("0ms")),ze("void <=> open, open-instant => void",Ie("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var Yt=new q("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:Kt}),Rt=new q("MAT_DRAWER_CONTAINER");function Kt(){return!1}var ee=(()=>{class r extends ge{constructor(e,t,i,o,s){super(i,o,s),this._changeDetectorRef=e,this._container=t}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}static{this.\u0275fac=function(t){return new(t||r)(a(V),a(Ue(()=>Ae)),a(B),a(Be),a(g))}}static{this.\u0275cmp=f({type:r,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(t,i){t&2&&Y("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},standalone:!0,features:[le([{provide:ge,useExisting:r}]),De,m],ngContentSelectors:Dt,decls:1,vars:0,template:function(t,i){t&1&&(J(),I(0))},encapsulation:2,changeDetection:0})}}return r})(),te=(()=>{class r{get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=H(e)}get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=H(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle(H(e))}constructor(e,t,i,o,s,S,be,Ot){this._elementRef=e,this._focusTrapFactory=t,this._focusMonitor=i,this._platform=o,this._ngZone=s,this._interactivityChecker=S,this._doc=be,this._container=Ot,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new p,this._animationEnd=new p,this._animationState="void",this.openedChange=new oe(!0),this._openedStream=this.openedChange.pipe(v(d=>d),ye(()=>{})),this.openedStart=this._animationStarted.pipe(v(d=>d.fromState!==d.toState&&d.toState.indexOf("open")===0),ke(void 0)),this._closedStream=this.openedChange.pipe(v(d=>!d),ye(()=>{})),this.closedStart=this._animationStarted.pipe(v(d=>d.fromState!==d.toState&&d.toState==="void"),ke(void 0)),this._destroyed=new p,this.onPositionChanged=new oe,this._modeChanged=new p,this._injector=x(xe),this._changeDetectorRef=x(V),this.openedChange.pipe(h(this._destroyed)).subscribe(d=>{d?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{Q(this._elementRef.nativeElement,"keydown").pipe(v(d=>d.keyCode===27&&!this.disableClose&&!_t(d)),h(this._destroyed)).subscribe(d=>this._ngZone.run(()=>{this.close(),d.stopPropagation(),d.preventDefault()}))}),this._animationEnd.subscribe(d=>{let{fromState:Pe,toState:Le}=d;(Le.indexOf("open")===0&&Pe==="void"||Le==="void"&&Pe.indexOf("open")===0)&&this.openedChange.emit(this._opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Re(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",t&&this._restoreFocus(i)),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(He(1)).subscribe(s=>o(s?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}static{this.\u0275fac=function(t){return new(t||r)(a(B),a(bt),a(Ct),a(N),a(g),a(wt),a(F,8),a(Rt,8))}}static{this.\u0275cmp=f({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&A(Ht,5),t&2){let o;b(o=C())&&(i._content=o.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&1&&rt("@transform.start",function(s){return i._animationStarted.next(s)})("@transform.done",function(s){return i._animationEnd.next(s)}),t&2&&(it("@transform",i._animationState),tt("align",null),K("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[m],ngContentSelectors:Dt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(J(),c(0,"div",1,0),I(2),l())},dependencies:[ge],encapsulation:2,data:{animation:[$t.transformDrawer]},changeDetection:0})}}return r})(),Ae=(()=>{class r{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=H(e)}get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:H(e)}get scrollable(){return this._userContent||this._content}constructor(e,t,i,o,s,S=!1,be){this._dir=e,this._element=t,this._ngZone=i,this._changeDetectorRef=o,this._animationMode=be,this._drawers=new $e,this.backdropClick=new oe,this._destroyed=new p,this._doCheckSubject=new p,this._contentMargins={left:null,right:null},this._contentMarginChanges=new p,this._injector=x(xe),e&&e.change.pipe(h(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),s.change().pipe(h(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=S}ngAfterContentInit(){this._allDrawers.changes.pipe(ie(this._allDrawers),h(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ie(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ze(10),h(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(v(t=>t.fromState!==t.toState),h(this._drawers.changes)).subscribe(t=>{t.toState!=="open-instant"&&this._animationMode!=="NoopAnimations"&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(h(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e&&e.onPositionChanged.pipe(h(this._drawers.changes)).subscribe(()=>{Re(()=>{this._validateDrawers()},{injector:this._injector,phase:et.Read})})}_watchDrawerMode(e){e&&e._modeChanged.pipe(h(We(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static{this.\u0275fac=function(t){return new(t||r)(a(pe,8),a(B),a(g),a(V),a(xt),a(Yt),a(ae,8))}}static{this.\u0275cmp=f({type:r,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,o){if(t&1&&(Me(o,ee,5),Me(o,te,5)),t&2){let s;b(s=C())&&(i._content=s.first),b(s=C())&&(i._allDrawers=s)}},viewQuery:function(t,i){if(t&1&&A(ee,5),t&2){let o;b(o=C())&&(i._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){t&2&&K("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],standalone:!0,features:[le([{provide:Rt,useExisting:r}]),m],ngContentSelectors:Ut,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(J(Gt),$(0,Qt,1,2,"div",0),I(1),I(2,1),$(3,qt,2,0,"mat-drawer-content")),t&2&&(X(i.hasBackdrop?0:-1),u(3),X(i._content?-1:3))},dependencies:[ee],styles:['.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0})}}return r})();var Mt=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=ne({type:r})}static{this.\u0275inj=re({imports:[Oe,je,je,Oe]})}}return r})();var y=class r{drawer;static \u0275fac=function(e){return new(e||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})};var U=class r{links=[{localizationId:"efa4382f-4f6f-453d-a1c3-2957c6eedb32",href:"",fragment:""},{localizationId:"285c1ce9-540b-4699-a992-f9d0f2aea1fc",href:"",fragment:"about-louise"},{localizationId:"454a943c-c1a0-45ab-9009-f997fbc43461",href:"",fragment:"what-i-offer"},{localizationId:"d2e91717-7c64-4b43-9c0b-d0ca198c8b0d",href:"",fragment:"prices"},{localizationId:"30bc43f5-2309-42f2-87f8-cc0ef6292845",href:"",fragment:"contact"},{localizationId:"674b0dc2-a685-4d1a-8e65-e103fddd6468",href:"",fragment:"collaborators"}];static \u0275fac=function(e){return new(e||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})};var ti=(r,n)=>n.localizationId;function ii(r,n){if(r&1){let e=j();c(0,"div",7),M("click",function(){O(e);let i=_();return T(i.drawerService.drawer.toggle())}),R(1,"mat-icon",8),l()}}function ri(r,n){if(r&1&&(c(0,"a",10),E(1),l()),r&2){let e=n.$implicit,t=_(2);D("routerLink",e.href)("fragment",e.fragment),u(),ce(" ",t.loc.get(e.localizationId)," ")}}function ni(r,n){if(r&1&&(c(0,"div",9),se(1,ri,2,3,"a",10,ti),l()),r&2){let e=_();Y("column-gap",e.getLinksColumnGap()),u(),de(e.menuService.links)}}var _e=class r{constructor(n,e,t,i){this.breakpointService=n;this.drawerService=e;this.menuService=t;this.loc=i}getLinksColumnGap(){let n=this.breakpointService.breakpoint();return n===2?"16px":n===3?"32px":n===4?"48px":"0px"}static \u0275fac=function(e){return new(e||r)(a(G),a(y),a(U),a(ue))};static \u0275cmp=f({type:r,selectors:[["app-bar"]],standalone:!0,features:[m],decls:9,vars:1,consts:[["routerLink","","fragment","",2,"width","var(--bar-button)","height","var(--bar-height)","display","flex","justify-content","center","align-items","center"],["src","images/logos/louisebrunskog.png","alt","logo",2,"width","calc(var(--bar-button) * 0.55)","height","calc(var(--bar-height) * 0.55)"],[2,"display","flex","flex-direction","column","justify-content","center","align-items","center","white-space","nowrap","user-select","none"],[2,"font-size","18px","font-weight","500"],[2,"font-size","16px","font-weight","300"],[2,"width","var(--bar-button)","height","var(--bar-height)","display","flex","justify-content","center","align-items","center","cursor","pointer"],[2,"display","flex","justify-content","center","align-items","center","white-space","nowrap","margin-right","10px",3,"column-gap"],[2,"width","var(--bar-button)","height","var(--bar-height)","display","flex","justify-content","center","align-items","center","cursor","pointer",3,"click"],["fontIcon","menu"],[2,"display","flex","justify-content","center","align-items","center","white-space","nowrap","margin-right","10px"],[1,"link",2,"text-decoration","none","font-size","16px","font-weight","500","transition","color 0.3s ease",3,"routerLink","fragment"]],template:function(e,t){e&1&&(c(0,"a",0),R(1,"img",1),l(),c(2,"div",2)(3,"div",3),E(4,"LOUISE BRUNSKOG"),l(),c(5,"div",4),E(6,"TENNIS COACH"),l()(),$(7,ii,2,0,"div",5)(8,ni,3,2,"div",6)),e&2&&(u(7),X(t.breakpointService.breakpoint()<=1?7:8))},dependencies:[P,me,fe,L,he],styles:["[_nghost-%COMP%]{width:100%;display:grid;background-color:var(--background-color);z-index:3}.link[_ngcontent-%COMP%]{color:#fff}.link[_ngcontent-%COMP%]:hover{color:var(--text-color-blue)}@media only screen and (min-width: 0px){[_nghost-%COMP%]{grid-template-columns:var(--bar-button) 1fr var(--bar-button)}}@media only screen and (min-width: 960px){[_nghost-%COMP%]{grid-template-columns:var(--bar-button) min-content 1fr}}"]})};var oi=(r,n)=>n.localizationId;function ai(r,n){if(r&1){let e=j();c(0,"a",4),M("click",function(){O(e);let i=_();return T(i.drawerService.drawer.close())}),E(1),l()}if(r&2){let e=n.$implicit,t=_();D("routerLink",e.href)("fragment",e.fragment),u(),ce(" ",t.loc.get(e.localizationId)," ")}}var ve=class r{constructor(n,e,t,i){this.breakpointService=n;this.drawerService=e;this.menuService=t;this.loc=i;ot(()=>{this.breakpointService.breakpoint()>=2&&this.drawerService.drawer.close()})}static \u0275fac=function(e){return new(e||r)(a(G),a(y),a(U),a(ue))};static \u0275cmp=f({type:r,selectors:[["app-drawer-content"]],standalone:!0,features:[m],decls:7,vars:0,consts:[[2,"display","flex","justify-content","flex-end"],[2,"width","80px","height","80px","display","flex","justify-content","center","align-items","center","color","white","cursor","pointer",3,"click"],[2,"display","flex","flex-direction","column","justify-content","center","align-items","center","row-gap","28px"],[1,"link",2,"text-decoration","none","font-size","20px","font-weight","500","transition","color 0.3s ease",3,"routerLink","fragment"],[1,"link",2,"text-decoration","none","font-size","20px","font-weight","500","transition","color 0.3s ease",3,"click","routerLink","fragment"]],template:function(e,t){e&1&&(c(0,"div",0)(1,"div",1),M("click",function(){return t.drawerService.drawer.close()}),c(2,"mat-icon"),E(3,"close"),l()()(),c(4,"div",2),se(5,ai,2,3,"a",3,oi),l()),e&2&&(u(5),de(t.menuService.links))},dependencies:[P,me,fe,L,he],styles:["[_nghost-%COMP%]{min-height:100%;display:flex;flex-direction:column}.link[_ngcontent-%COMP%]{color:#fff}.link[_ngcontent-%COMP%]:hover{color:var(--text-color-blue)}"]})};var we=class r{constructor(n,e){this.breakpointService=n;this.drawerService=e}drawer=null;ngAfterViewInit(){this.drawerService.drawer=this.drawer}static \u0275fac=function(e){return new(e||r)(a(G),a(y))};static \u0275cmp=f({type:r,selectors:[["app-root"]],viewQuery:function(e,t){if(e&1&&A(te,5),e&2){let i;b(i=C())&&(t.drawer=i.first)}},standalone:!0,features:[m],decls:7,vars:3,consts:[["drawer",""],[3,"autosize","hasBackdrop"],["position","end",3,"mode"],[1,"mat-elevation-z3"]],template:function(e,t){e&1&&(c(0,"mat-drawer-container",1)(1,"mat-drawer",2,0),R(3,"app-drawer-content"),l(),c(4,"mat-drawer-content"),R(5,"app-bar",3)(6,"router-outlet"),l()()),e&2&&(D("autosize",!0)("hasBackdrop",t.breakpointService.breakpoint()<=1),u(),D("mode",t.breakpointService.breakpoint()<=1?"over":"side"))},dependencies:[_e,P,ve,Mt,te,Ae,ee,L,lt],styles:["[_nghost-%COMP%]{flex-grow:1;display:flex;flex-direction:column}mat-drawer-container[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}mat-drawer[_ngcontent-%COMP%]{position:fixed}mat-drawer-content[_ngcontent-%COMP%]{position:relative;flex-grow:1;display:flex;flex-direction:column}app-bar[_ngcontent-%COMP%]{position:fixed}"]})};dt(we,kt).catch(r=>console.error(r));