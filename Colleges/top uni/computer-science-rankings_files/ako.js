function rsi_img(p,u,c){if(u.indexOf(location.protocol)==0){var i=new Image(2,3);if(c){i.onload=c;}
i.src=u;p[p.length]=i;}}
function rsi_simg(p,s,i){if(i<s.length){rsi_img(p,s[i],function(){rsi_simg(p,s,i+1);});}}
function rsi_req_pix(l,s){var w=window;if(typeof(w.rsi_imgs)=="undefined"){w.rsi_imgs=[];}
if(typeof(w.rsi_simgs)=="undefined"){w.rsi_simgs=[];}
var a=w.rsi_imgs;var b=w.rsi_simgs;var i;for(i=0;i<l.length;++i){if(s){b[b.length]=l[i];}else{rsi_img(a,l[i]);}}
if(s){rsi_simg(a,b,0);}}
rsi_req_pix([],0);rsi_req_pix(['http://ad.yieldmanager.com/pixel?id=604594&id=1264419&id=1085863&id=1259575&id=1347082&id=725074&id=1093105&id=1009722&id=285419&id=481704&id=1103533&id=715905&id=301852&id=1095891&id=119198&id=1004774&id=1256164&t=2','http://ads.revsci.net/adserver/ako?record_activation&rsi_dpr=604594-1264419-1085863-1259575-1347082-725074-1093105-1009722-285419-481704-1103533-715905-301852-1095891-119198-1004774-1256164'],1);