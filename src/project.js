window.__require=function t(n,o,i){function c(s,r){if(!o[s]){if(!n[s]){var a=s.split("/");if(a=a[a.length-1],!n[a]){var u="function"==typeof __require&&__require;if(!r&&u)return u(a,!0);if(e)return e(a,!0);throw new Error("Cannot find module '"+s+"'")}}var h=o[s]={exports:{}};n[s][0].call(h.exports,function(t){return c(n[s][1][t]||t)},h,h.exports,t,n,o,i)}return o[s].exports}for(var e="function"==typeof __require&&__require,s=0;s<i.length;s++)c(i[s]);return c}({backui:[function(t,n,o){"use strict";cc._RF.push(n,"294ffpmGjpN0abhcFo6L6eg","backui"),cc.Class({extends:cc.Component,properties:{scrollView:cc.ScrollView,heroPrefab:cc.Prefab},onLoad:function(){for(var t=0;t<20;t++)this.scrollView.content.addChild(this.generateHero())},generateHero:function(){return cc.instantiate(this.heroPrefab)},show:function(){this.node.active=!0,this.node.emit("fade-in")},hide:function(){this.node.emit("fade-out")},start:function(){}}),cc._RF.pop()},{}],buttonscaler:[function(t,n,o){"use strict";cc._RF.push(n,"b90cfFu7ohGfLBC/r1osbzV","buttonscaler"),cc.Class({extends:cc.Component,properties:{duration:.1,scaleRatio:.8},onLoad:function(){var t=this.node.scale,n=cc.scaleTo(this.duration,this.scaleRatio),o=cc.scaleTo(this.duration,t);function i(){this.stopAllActions(),this.runAction(o)}this.node.on("touchstart",function(){this.stopAllActions(),this.runAction(n)},this.node),this.node.on("touchend",i,this.node),this.node.on("touchcancel",i,this.node)},start:function(){},update:function(t){}}),cc._RF.pop()},{}],energycounter:[function(t,n,o){"use strict";cc._RF.push(n,"b23bbhs4eFIsI7v28e45UN3","energycounter"),cc.Class({extends:cc.Component,properties:{progressbar:cc.ProgressBar,label:cc.Label,totalTime:15,currentTime:0},onLoad:function(){},start:function(){},update:function(t){var n=this.currentTime/this.totalTime;this.progressbar.progress=n;var o=this.totalTime-Math.floor(this.currentTime);o=o>=10?o:"0"+o,this.label.string="00:"+o,this.currentTime+=t,this.currentTime>this.totalTime&&(this.currentTime=0)}}),cc._RF.pop()},{}],figure:[function(t,n,o){"use strict";cc._RF.push(n,"dd8b7CJbzBDWrNTGh9LQOV0","figure"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1,1,.96),cc.scaleTo(1,1,1))))},start:function(){}}),cc._RF.pop()},{}],hero:[function(t,n,o){"use strict";cc._RF.push(n,"c2bfaxberFOlaaNU5nEbt2s","hero"),cc.Class({extends:cc.Component,properties:{heroImgs:{default:[],type:cc.SpriteFrame},hero:cc.Sprite},onLoad:function(){var t=this.getRandomInt(this.heroImgs.length),n=this.heroImgs[t];this.hero.spriteFrame=n},getRandomInt:function(t){var n=Math.random();return Math.floor(t*n)},start:function(){}}),cc._RF.pop()},{}],panelTransition:[function(t,n,o){"use strict";cc._RF.push(n,"acba2EB4HlDXoF+YObG/vna","panelTransition"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.duration=.3,this.outOfWorld=cc.v2(2e3,0),this.node.position=this.outOfWorld,this.node.on("fade-in",this.startFadeIn,this),this.node.on("fade-out",this.startFadeOut,this);var t=cc.callFunc(this.onFadeInFinish(),this),n=cc.callFunc(this.onFadeOutFinish(),this);this.actionFadeIn=cc.sequence(cc.spawn(cc.fadeTo(this.duration,255),cc.scaleTo(this.duration,1)),t),this.actionFadeOut=cc.sequence(cc.spawn(cc.fadeTo(this.duration,0),cc.scaleTo(this.duration,1.3)),n)},startFadeIn:function(){cc.log("show"),this.node.position=cc.v2(0,0),this.node.setScale(2),this.node.opacity=0,this.node.runAction(this.actionFadeIn)},startFadeOut:function(){this.node.runAction(this.actionFadeOut),this.node.active=!1},onFadeInFinish:function(){},onFadeOutFinish:function(){},start:function(){}}),cc._RF.pop()},{}],shopUI:[function(t,n,o){"use strict";cc._RF.push(n,"10e5fXH58NKeZfhZEm8Wxi8","shopUI"),cc.Class({extends:cc.Component,properties:{anim:cc.Animation},out:function(){this.anim.play("shop_out1")},in:function(){this.anim.play("shop_in"),this.node.active=!0},onLoad:function(){this.node.active=!1,this.anim.play("show_out1")},outFinish:function(){this.node.active=!1},start:function(){}}),cc._RF.pop()},{}],top:[function(t,n,o){"use strict";cc._RF.push(n,"cfe13hhw85FiYtN/btBJUnK","top"),cc.Class({extends:cc.Component,properties:{anim:cc.Animation,upbtn:cc.Button,bottomBtn:cc.Button},play:function(){this.anim.play("sub_expand")},replay:function(){this.anim.play("sub_fold")},onFinishAnim:function(t){this.upbtn.node.active=t,this.bottomBtn.node.active=!t},start:function(){}}),cc._RF.pop()},{}]},{},["backui","buttonscaler","energycounter","figure","hero","panelTransition","shopUI","top"]);