
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/search/search","pages/my/my"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#BFBFBF","selectedColor":"#515151","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home/home","iconPath":"static/n-movie.png","selectedIconPath":"static/movie.png","text":"首页"},{"pagePath":"pages/search/search","iconPath":"static/n-search.png","selectedIconPath":"static/search.png","text":"搜索"},{"pagePath":"pages/my/my","iconPath":"static/n-my.png","selectedIconPath":"static/my.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-movie","compilerVersion":"2.6.5","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","titleNView":false}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索","titleNView":false}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});