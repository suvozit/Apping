


/*! Copyright 2009,2010 the Rubicon Project.  All Rights Reserved.  No permission is granted to use, copy or extend this code */





oz_partner = "rubicon";
oz_partner_channel="7715/12318";






if(typeof oz_page_profiled=="undefined"){oz_page_profiled=false;}if(typeof oz_subframes_allowed=="undefined"){oz_subframes_allowed=false;}if(typeof oz_source=="undefined"){oz_source=document;}var oz_scripts_loaded=new Object();function OthersOnlineSensor(){this.config={delayAfterLoad:2*1000,sensor_sample:100,pixel_sample:25,domain_specific_parsing:false,use_local_storage:false,subframes_allowed:false,host:"http://tap.rubiconproject.com",statichost:"http://tap-cdn.rubiconproject.com"};
this.default_context={oz_partner:"othersonline.com",oz_session_id:null,oz_partner_user_id:null,oz_partner_channel:null,oz_partner_tracking_channel:null};this.context=null;this.page_parser=null;this.timeout=1500;this.init=function(A){try{if(A){this.context=this.mergeProperties(A,this.default_context);
}else{this.context=this.default_context;}if(this.context.oz_host){this.config.host=this.context.oz_host;}if(this.context.oz_statichost){this.config.statichost=this.context.oz_statichost;}if(this.context.oz_delay){this.config.delayAfterLoad=this.context.oz_delay;}if(this.context.oz_subframes_allowed){this.config.subframes_allowed=this.context.oz_subframes_allowed;
}if(this.context.oz_local_storage){this.config.use_local_storage=this.context.oz_local_storage;}if(this.config.use_local_storage&&!this.context.oz_user_token&&(typeof oz_swfobject=="object")){try{if(!document.getElementById("oo_storage")){var C=document.createElement("div");C.setAttribute("id","oo_storage");
C.setAttribute("name","oo_storage");document.getElementsByTagName("*")[document.getElementsByTagName("*").length-1].parentNode.appendChild(C);oz_swfobject.embedSWF(this.config.statichost+"/oz/flash/persist.swf","oo_storage","1","1","9",null,{enablejs:"true",autostart:"true"},{allowScriptAccess:"always",swLiveConnect:"true"},{});
}}catch(B){}}}catch(B){}};this.scriptsLoaded=new Object();this.addScript=function(B,C){var A;if(oz_scripts_loaded[B]){return ;}oz_scripts_loaded[B]=true;A=document.createElement("script");if(C){A.setAttribute("id",C);}A.setAttribute("type","text/javascript");B=B.replace(/\s/g,"+");A.setAttribute("src",B);
document.getElementsByTagName("head").item(0).appendChild(A);};this.trim=function(A){return A.replace(/^\s+|\s+$/g,"");};this.start=function(){try{var A=this;if(window.addEventListener){window.addEventListener("load",function(D){A.onPageLoad();},false);}else{window.attachEvent("onload",function(D){A.onPageLoad();
});if(typeof window.attachEvent=="function"){var B=window.onload;window.onload=function(D){if(B){B(D);}A.onPageLoad();};}else{window.attachEvent("onload",function(D){A.onPageLoad();});}}}catch(C){}};this.format_phrases=function(B){var E="";var A;var D=40;for(var C=0;C<B.length&&C<D;C++){A=B[C];E+=A.word+":"+A.count;
if(C<B.length){E+=",";}}return E;};this.mergeProperties=function(B,A){if(typeof (B)=="undefined"||!B){return A;}if(typeof (A)=="undefined"||!A){return new Object();}for(var C in A){if(typeof B[C]=="undefined"){B[C]=A[C];}}return B;};this.cookiesEnabled=function(){try{var B=(navigator.cookieEnabled)?true:false;
if(typeof navigator.cookieEnabled=="undefined"&&!B){document.cookie="testcookie";B=(document.cookie.indexOf("testcookie")!=-1)?true:false;}return(B);}catch(A){}};this.isContentPage=function(){return((this.oz_source!=document)||this.config.subframes_allowed||(window==top));};this.shouldSamplePage=function(){if(this.isContentPage()){return(Math.floor(Math.random()*100)<this.config.sensor_sample);
}return false;};this.shouldPixelPage=function(){return(Math.floor(Math.random()*100)<this.config.pixel_sample);};this.getTopPhrases=function(){if(this.page_parser==null){return null;}return this.page_parser.getTopPhrasesFromDocument(this.oz_source);};this.getUserProfile=function(){if(!this.isContentPage()||this.page_parser==null){return null;
}return this.page_parser.getProfileFromDocument(this.oz_source);};this.getPartnerUserProfile=function(){return this.context.oz_profile;};this.getPixels=function(){return oz_sensor_pixels;};this.getPixelsForPage=function(){var C=this.getPixels();if(C){for(var A=0;A<C.length;A++){var B=C[A].uri;setTimeout(function(){new Image().src=B;
},250);}}};this.profileUserForPage=function(){if(oz_page_profiled){return ;}try{if(this.oz_source.location.protocol.indexOf("http:")<0){return ;}if(typeof PageParser!="function"){if(this.config.domain_specific_parsing){this.addScript(this.config.statichost+"/partner/scripts/"+this.context.oz_partner+"/page_parser.js?d="+this.oz_source.location.host);
}else{this.addScript(this.config.statichost+"/partner/scripts/"+this.context.oz_partner+"/page_parser.js");}var I=this;setTimeout(function(){I.profileUserForPage();},500);return ;}if(this.page_parser==null){this.page_parser=new PageParser();this.page_parser.doc=this.oz_source;this.page_parser.init();
}var K;if(this.shouldSamplePage()){oz_page_profiled=true;if(!this.context.oz_user_token&&(typeof OOStorage=="function")){try{var E=new OOStorage();E.init("oo_storage");this.context.oz_user_token=E.get("token");if(this.context.oz_user_token=="null"){this.context.oz_user_token=null;}if(!this.context.oz_user_token){var F;
F="";F+=new Date().getTime().toString(36).toUpperCase();F+="-";F+=Math.floor(Math.random()*4096*4096).toString(36).toUpperCase();this.context.oz_user_token=F;E.set("token",this.context.oz_user_token);}}catch(G){}}K=this.getTopPhrases();if(K){var B;B=this.config.host+"/oz/sensor";B+="?p="+this.context.oz_partner;
if(this.context.oz_session_id){B+="&fps="+this.context.oz_session_id;}if(this.context.oz_partner_user_id){B+="&afu="+this.context.oz_partner_user_id;}if(this.context.oz_user_token){B+="&lid="+this.context.oz_user_token;}if(this.context.oz_partner_channel){B+="&pc="+this.context.oz_partner_channel;}if(this.context.oz_partner_tracking_channel){B+="&ptc="+this.context.oz_partner_tracking_channel;
}if(this.cookiesEnabled()){B+="&cd=false";}if(K.duration){B+="&xt="+K.duration;}B+="&k="+this.format_phrases(K.summary).replace(/\s+/g,"+");try{var J;J=this.page_parser.selectSERPStats(window.location.href);if((J)&&(J.queryTerms)){B+="&q="+J.queryTerms+":"+J.adCount;}else{J=this.page_parser.selectSERPStats(this.oz_source.referrer);
if((J)&&(J.queryTerms)){B+="&q="+J.queryTerms+":1";}}}catch(G){}try{var H;if(this.oz_source.referrer){H=this.oz_source.referrer.split("/")[2];}if(H&&(H!=this.oz_source.location.host)){B+="&rd="+H;}if(this.oz_source.title){B+="&t="+this.oz_source.title.replace(/\s+/g,"+");}}catch(G){}new Image().src=B;
}}var D=this.getUserProfile();if(D){var C=false;var B;B=this.config.host+"/oz/feeds/"+this.context.oz_partner+"/profile";B+="?p="+this.context.oz_partner;if(this.context.oz_session_id){B+="&fps="+this.context.oz_session_id;}if(this.context.oz_partner_user_id){B+="&afu="+this.context.oz_partner_user_id;
}if(this.context.oz_partner_channel){B+="&pc="+this.context.oz_partner_channel;}if(this.context.oz_partner_tracking_channel){B+="&ptc="+this.context.oz_partner_tracking_channel;}for(var A in D){if(!D.hasOwnProperty(A)){continue;}C=true;if(typeof A!="function"){B+="&"+A+"="+D[A];}}if(C){new Image().src=B;
}}var D=this.getPartnerUserProfile();if(D){var C=false;var B;B=this.config.host+"/oz/feeds/"+this.context.oz_partner+"/profile";B+="?p="+this.context.oz_partner;B+="&oz_source=partner";if(this.context.oz_session_id){B+="&fps="+this.context.oz_session_id;}if(this.context.oz_partner_user_id){B+="&afu="+this.context.oz_partner_user_id;
}if(this.context.oz_partner_channel){B+="&pc="+this.context.oz_partner_channel;}if(this.context.oz_partner_tracking_channel){B+="&ptc="+this.context.oz_partner_tracking_channel;}for(var A in D){if(!D.hasOwnProperty(A)){continue;}C=true;if(typeof A!="function"){B+="&"+A+"="+D[A];}}if(C){new Image().src=B;
}}}catch(G){}};this.onPageLoad=function(){if(this.pageLoadHandled){return ;}this.pageLoadHandled=true;if(this.oz_source.location.protocol.indexOf("http:")<0){return ;}if(this.config.use_local_storage&&(Math.floor(Math.random()*100)<0)){if(typeof OOStorage!="function"){this.addScript(this.config.statichost+"/oz/scripts/persist.js");
}if(typeof oz_swfobject!="object"){this.addScript(this.config.statichost+"/oz/scripts/swfobject.js");}}var A=this;setTimeout(function(){A.profileUserForPage();},this.config.delayAfterLoad);try{var A=this;setTimeout(function(){A.getPixelsForPage();},this.config.delayAfterLoad);if(window!=top){if(Math.floor(Math.random()*100)<1){var B;
var C;B=this.config.host+"/empty.gif?p="+this.context.oz_partner+"&frames=nested";if(this.context.oz_partner_channel){B+="&pc="+this.context.oz_partner_channel;}if(this.context.oz_partner_tracking_channel){B+="&ptc="+this.context.oz_partner_tracking_channel;}try{if(this.oz_source.referrer){C=this.oz_source.referrer.split("/")[2];
}if(C&&(C!=this.oz_source.location.host)){B+="&rd="+C;}}catch(D){}new Image().src=B;}}}catch(D){}};}function oz_sensor(E){try{var D=new OthersOnlineSensor();var C=new Object();var G=["oz_partner","oz_session_id","oz_partner_user_id","oz_host","oz_statichost","oz_delay","oz_sensor_filter","oz_local_storage","oz_profile","oz_partner_channel","oz_subframes_allowed"];
var A;if(oz_source){D.oz_source=oz_source;}for(var B=0;B<G.length;B++){A=G[B];if(window[A]){C[A]=window[A];}}D.init(C);oz_sensor_partner_hook(D);D.start();if(E||D.autorun){D.onPageLoad();}return D;}catch(F){}}var oz_sensor_pixels=[];function oz_sensor_partner_hook(A){return A;}function oz_parseUri(E){var D=oz_parseUri.options;
var A=D.parser[D.strictMode?"strict":"loose"].exec(E);var C={};var B=14;while(B--){C[D.key[B]]=A[B]||"";}C[D.q.name]={};C[D.key[12]].replace(D.q.parser,function(G,F,H){if(F){C[D.q.name][F]=H;}});return C;}oz_parseUri.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};



/*
	*/

function oz_get_domain_config(configs,host)
{
	var segments = host.split(".");
	var domain;

	for (var i = 0; i < segments.length; i++)
	{
		domain = "";
		for (var j = i; j < segments.length; j++)
		{
			domain += segments[j];
			if (j < segments.length - 1)
				domain += ".";
		}
		if (configs[domain] != null)
			return configs[domain];
	}
	
	return null;
}

function oz_get_account_config(configs,account)
{
	if (configs[account] != null)
		return configs[account];
	return null;
}

function oz_update_sensor_config(sensor,cfg)
{
	if (cfg != null)
	{
		if (cfg.delay_after_load)
			sensor.config.delayAfterLoad = cfg.delay_after_load; 
		if (cfg.sampling != null)
			sensor.config.sensor_sample = cfg.sampling;
		if (cfg.userdata_sampling != null)
			sensor.config.userdata_sample = cfg.userdata_sampling;
		if (cfg.local_storage != null && cfg.local_storage.sampling)
		{
			if (Math.floor(Math.random()*100) < cfg.local_storage.sampling)
				sensor.config.use_local_storage=true;
		}

		if (cfg.domain_specific_parsing != null)
			sensor.config.domain_specific_parsing = cfg.domain_specific_parsing;

		if (cfg.subframes_allowed != null)
			sensor.config.subframes_allowed = cfg.subframes_allowed;
		
		if (cfg.ajax_pageviews != null)
			sensor.config.ajax_pageviews = cfg.ajax_pageviews;
		
		if (cfg.ajax_polling != null)
			sensor.config.ajax_polling = cfg.ajax_polling;
	}
}

function oz_sensor_gather_rp_context(sensor)
{
	// rubicon_zone = "http://optimized-by.rubiconproject.com/a/2697/2718/8352" + "." + "js";
	// rubicon_zone = "http://optimized-by.rubiconproject.com/a/6291/9346/15214-9" + "." + "js";
	var rp_context;
	
	if (typeof rubicon_zone != "undefined" && (rubicon_zone != null))
	{
		rp_context = rubicon_zone;
	}
	else
	{
		var scripts;
		scripts = sensor.oz_source.getElementsByTagName("script");
		for (var i=0; i < scripts.length; i++)
		{
			var url;
			url = scripts[i].getAttribute("src");
			if (url && (url.indexOf("optimized-by.rubiconproject.com") >= 0) && (url.indexOf("optimized-by.rubiconproject.com") < 10) )
			{
				rp_context = url;
				break;
			}
		}
	}

	var account_id;
	var site_id;
	var zone_id;
	
	if (sensor.context.oz_partner_channel)
	{
		account_id = sensor.context.oz_partner_channel.split("/")[0];
		site_id = sensor.context.oz_partner_channel.split("/")[1];
	}	
	else
	if (rp_context)
	{
		var segments = rp_context.split("/");
		if (segments.length > 6)
		{
			account_id = segments[4];
			site_id = segments[5];
			zone_id = segments[6];
			if (zone_id.indexOf(".") > 0)
				zone_id = zone_id.split(".")[0];	
		}
	}
	
	return {account_id : account_id, site_id: site_id, zone_id: zone_id };
	
}

function oz_sensor_partner_hook(sensor)
{
	try
	{
		// update service URLs
		sensor.config.host = "http://tap.rubiconproject.com";
		sensor.config.statichost = "http://tap-cdn.rubiconproject.com";

		// Gather the sub-channel (oz_partner_channel)
		var rp_context = oz_sensor_gather_rp_context(sensor);
		sensor.context.oz_partner_channel = rp_context.account_id+"/"+rp_context.site_id;
		if (rp_context.zone_id && !sensor.context.oz_partner_tracking_channel)
			sensor.context.oz_partner_tracking_channel = rp_context.zone_id;

		// configs for sensor
		try
		{
			if (typeof oz_sensor_config != "undefined" && (oz_sensor_config != null) && (oz_sensor_config.sensor != null))
			{
				var cfg = null;
				cfg = oz_sensor_config.sensor;
				
				// system wide configs
				oz_update_sensor_config(sensor,cfg);
	
				// account based configs for sensor
				if (cfg.account_filter)
				{
					var account_cfg;
					account_cfg = oz_get_account_config(cfg.account_filter.accounts,rp_context.account_id);
					oz_update_sensor_config(sensor,account_cfg);
				}

				// domain based configs for sensor
				if (sensor.context.oz_sensor_filter == "domain")
				{
					sensor.config.domain_specific_parsing = true;
					if (cfg.domain_filter != null)
					{
						oz_update_sensor_config(sensor,cfg.domain_filter);
						if (cfg.domain_filter.domains != null)
						{
							var domain_cfg;
	
							domain_cfg = oz_get_domain_config(cfg.domain_filter.domains,sensor.oz_source.location.host);
							if (domain_cfg != null)
							{
								oz_update_sensor_config(sensor,domain_cfg);
							}
						}
					}
				}
			}
			
			// site_id based 
			if (typeof oz_sensor_config_site != "undefined" && (oz_sensor_config_site != null) && (oz_sensor_config_site.sensor != null))
			{
				var cfg = null;
				cfg = oz_sensor_config_site.sensor;
				oz_update_sensor_config(sensor,cfg);

				// domain specific per-site (some 'sites' have many domains)
				if (cfg.domain_filter != null)
				{
					oz_update_sensor_config(sensor,cfg.domain_filter);
					if (cfg.domain_filter.domains != null)
					{
						var domain_cfg;
	
						domain_cfg = oz_get_domain_config(cfg.domain_filter.domains,sensor.oz_source.location.host);
						if (domain_cfg != null)
						{
							oz_update_sensor_config(sensor,domain_cfg);
						}
					}
				}
			}
		}
		catch(e)
		{
			//alert(e.message);
		}

		// support for Ajax based pageviews
		if (sensor.config.ajax_pageviews)
		{
			sensor.context.autorun=true;

			// hook the onPageLoad method
			sensor.old_onPageLoad = sensor.onPageLoad;
			sensor.onPageLoad = function()
			{
				this.old_onPageLoad();
				this.pageLoadHandled = false;
			}
			
			// hook the profiling method
			sensor.old_profileUserForPage = sensor.profileUserForPage;
			sensor.profileUserForPage = function()
			{
				if (this.old_location != this.oz_source.location.href)
				{
					this.old_profileUserForPage();
					if (oz_page_profiled)
						this.old_location = this.oz_source.location.href;
					
					// hack to allow multiple sensor hits for lifetime of an ajax page
					oz_page_profiled = false;
				}

				if (this.config.ajax_polling)
				{
					var self=this;
					setTimeout(function() {	 self.profileUserForPage();	},this.config.delayAfterLoad);
				}
			}
		}
		
		// support for local storage
		try
		{
			if (sensor.config.use_local_storage && !sensor.context.oz_user_token && (typeof oz_swfobject == "object"))
			{
				try
				{
					if (!document.getElementById("oo_storage"))
					{
						var n = document.createElement("div");
						n.setAttribute("id", "oo_storage");
						n.setAttribute("name", "oo_storage");				
						document.getElementsByTagName("*")[document.getElementsByTagName("*").length-1].parentNode.appendChild(n);

						oz_swfobject.embedSWF(sensor.config.statichost+"/oz/flash/persist.swf", "oo_storage", "1", "1", "9", null, 
								{enablejs:"true",autostart:"true"}, 
								{allowScriptAccess:"always",swLiveConnect:"true"}, 
								{} );
					}
				}
				catch(e)
				{
					//alert(e.message);
				}
			}
		}
		catch(e)
		{
			
		}
		
		// configs for pixel
		try
		{
			var cfg = null;
			if (typeof oz_sensor_config != "undefined" && (oz_sensor_config != null) && (oz_sensor_config.pixel != null))
			{
				// system wide configs
				cfg = oz_sensor_config.pixel;
				
				if (cfg.sampling != null)
					sensor.config.pixel_sample = cfg.sampling ;
			}

			// domain based configs for pixel
			if (sensor.context.oz_sensor_filter == "domain")
			{
				sensor.config.pixel_sample = 0;
				if (cfg != null)
				{
					var domain_cfg;

					sensor.config.pixel_sample = cfg.domain_filter.sampling;
					domain_cfg = oz_get_domain_config(cfg.domain_filter.domains,sensor.oz_source.location.host);
					if (domain_cfg != null)
					{
						if (domain_cfg.sampling != null)
							sensor.config.pixel_sample = domain_cfg.sampling;
					}
				}
			}

			// site_id based 
			if (typeof oz_sensor_config_site != "undefined" && (oz_sensor_config_site != null) && (oz_sensor_config_site.pixel != null))
			{
				cfg = oz_sensor_config_site.pixel;
				if (cfg.sampling != null)
					sensor.config.pixel_sample = cfg.sampling ;

				if (cfg.domain_filter != null)
				{
					if (cfg.domain_filter.sampling != null)
						sensor.config.pixel_sample = cfg.domain_filter.sampling;

					if (cfg.domain_filter.domains != null)
					{
						var domain_cfg;

						domain_cfg = oz_get_domain_config(cfg.domain_filter.domains,sensor.oz_source.location.host);
						if (domain_cfg != null)
						{
							if (domain_cfg.sampling != null)
								sensor.config.pixel_sample = domain_cfg.sampling;
						}
					}
				}
			}
		}
		catch(e)
		{
			
		}
		
		
		// hook the sensor object with new pixel drop methods
		sensor.getPixels = function ()
		{
			// do pixels 50% of the time
			var sampling=50;
			sampling = this.config.pixel_sample;

			if (Math.floor(Math.random()*100) < sampling)
			{
				var url;
				url = sensor.config.host + "/partner/agent/rubicon/channels.js?cb=oz_onPixelsLoaded";
				if (sensor.context.oz_partner_channel)
					url += "&pc="+sensor.context.oz_partner_channel;
				if (sensor.context.oz_user_token)
					url += "&lid="+sensor.context.oz_user_token;
				
				// fetch the pixel data after 1s
				var self=this;
				setTimeout(function() {	 self.addScript(url);	},1000);
			}
			return null;
		}
		sensor.onPixelsLoaded = function(pixels)
		{
			for (var i=0; i < pixels.tagcloud.length; i++)
			{
				var uri = pixels.tagcloud[i].token;
				if (uri && (uri.indexOf("http:") == 0))
					new Image().src = uri;
			}
			for (var i=0; i < pixels.pixels.length; i++)
			{
				var uri = pixels.pixels[i].url;
				if (uri && (uri.indexOf("http:") == 0))
					new Image().src = uri; 
			}
		}
		window.oz_onPixelsLoaded = function(pixels){sensor.onPixelsLoaded(pixels)};
		
		// hook the sensor object with new profile extraction
		sensor.getPartnerUserProfileOld =sensor.getPartnerUserProfile;  
		sensor.getPartnerUserProfile = function()
		{
			var profile=null;
			profile = this.getPartnerUserProfileOld();
			if (!profile)
			{
				var sampling = this.config.userdata_sample || 20;

				if (Math.floor(Math.random()*100) < sampling)
				{
					var scripts;
					var url;
					var ignore = {"cb": true, "keyword": true};
					var allow = {"gender": true, "age": true, "ethnicity": true, "age_range": true};

					scripts = this.oz_source.getElementsByTagName("script");
					for (var i=0; i < scripts.length; i++)
					{
						url = scripts[i].getAttribute("src");
						if (url && url.indexOf("optimized-by.rubiconproject.com") >= 0)
						{
							var uri = oz_parseUri(url);
							for (var name in uri.queryKey)
							{
								if (!allow[name] || !uri.queryKey.hasOwnProperty(name))
									continue;
								if (!profile)
									profile = {};
								if (uri.queryKey[name] && (uri.queryKey[name].length > 0) 
										&& (uri.queryKey[name] != "null") 
										&& (uri.queryKey[name] != "[]") 
										&& (uri.queryKey[name].indexOf("VALUE%20HERE") < 0)
										&& (uri.queryKey[name].indexOf("VALUE HERE") < 0))
									profile[name] = uri.queryKey[name];
							}
						}
					}
				}
			}
			return profile;
		}

	}
	catch(e)
	{
		// alert(e.message);
	}
	
}

/*
*/

oz_sensor_config = {"sensor":{"local_storage":{"sampling":0},"sampling":100,"userdata_sampling":25,"domain_filter":{"sampling":25,"userdata_sampling":25,"local_storage":{"sampling":0},"domains":{"localhost":{"sampling":100},"ad.doubleclick.net":{"sampling":1},"yieldmanager.com":{"sampling":1},"babycenter.com":{"sampling":100},"essence.com":{"sampling":100},"totalbeauty.com":{"sampling":100},"momlogic.com":{"sampling":100},"healthgrades.com":{"sampling":50},"cliffsnotes.com":{"sampling":100},"trulia.com":{"sampling":25},"primedia.com":{"sampling":25},"homes.com":{"sampling":25},"listingbook.com":{"sampling":50},"tomshardware.com":{"sampling":100},"toptenreviews.com":{"sampling":100},"oncars.com":{"sampling":100},"tomsguide.com":{"sampling":100},"myfantasyleague.com":{"sampling":100},"goal.com":{"sampling":100},"sbnation.com":{"sampling":100},"highschoolsports.net":{"sampling":50},"fantasysportsventures.com":{"sampling":50},"powersoccer.com":{"sampling":100},"cinesport.com":{"sampling":100,"subframes_allowed":true},"king.com":{"sampling":20},"candystand.com":{"sampling":100},"gamehouse.com":{"sampling":100},"realgames.com":{"sampling":100},"popcap.com":{"sampling":100},"zedge.net":{"sampling":10},"iminent.com":{"sampling":25,"subframes_allowed":true},"okcupid.com":{"sampling":25},"jdate.com":{"sampling":75},"gay.com":{"sampling":75},"christianmingle.com":{"sampling":50},"deviantart.com":{"sampling":100},"grooveshark.com":{"sampling":50},"tunegenie.com":{"sampling":50},"contactmusic.com":{"sampling":100},"livenation.com":{"sampling":100},"tweetphoto.com":{"sampling":25},"picnik.com":{"sampling":25,"userdata_sampling":1},"webshots.com":{"sampling":100},"mediafire.com":{"sampling":100},"mangafox.com":{"sampling":10,"subframes_allowed":true},"anchorfree.com":{"sampling":10},"fuse.net":{"sampling":100},"proboards.com":{"sampling":100},"webs.com":{"sampling":100},"netlog.com":{"sampling":25},"newsweek.com":{"sampling":100},"suntimes.com":{"sampling":100},"sltrib.com":{"sampling":100},"timesonline.co.uk":{"sampling":75},"thesun.co.uk":{"sampling":75},"newsoftheworld.co.uk":{"sampling":50},"rasmussenreports.com":{"sampling":100},"politico.com":{"sampling":100},"talkingpointsmemo.com":{"sampling":100},"drudgereport.com":{"sampling":75},"hotair.com":{"sampling":50},"salon.com":{"sampling":100},"digitalspy.co.uk":{"sampling":100},"digitalspy.com":{"sampling":100},"thr.com":{"sampling":100},"creativeloafing.com":{"sampling":100},"collegehumor.com":{"sampling":50},"stockhouse.com":{"sampling":100},"intermarkets.com":{"sampling":10},"dealbreaker.com":{"sampling":100},"thebigmoney.com":{"sampling":100},"marketwatch.com":{"sampling":100},"bigcharts.com":{"sampling":100},"dowjones.com":{"sampling":100},"xe.com":{"sampling":100},"ireland.com":{"sampling":100},"bravotv.com":{"sampling":100},"televisionwithoutpity.com":{"sampling":100},"nbc.com":{"sampling":100},"oxygen.com":{"sampling":100},"usanetwork.com":{"sampling":100},"expedia.com":{"sampling":100},"aetv.com":{"sampling":100},"biography.com":{"sampling":100},"history.com":{"sampling":100},"allrecipes.com":{"sampling":100},"weather.com":{"sampling":10},"intellicast.com":{"sampling":50},"facebook.com":{"sampling":10,"ajax_pageviews":true},"spanishdict.com":{"sampling":100},"townhall.com":{"sampling":100},"style.com":{"sampling":50},"wired.com":{"sampling":50},"usnews.com":{"sampling":50},"blogtalkradio.com":{"sampling":100},"dailymotion.com":{"sampling":25},"newsquest.co.uk":{"sampling":100},"ajc.com":{"sampling":100},"ea.com":{"sampling":50}}},"account_filter":{"accounts":{"4275":{"sampling":10}}}},"pixel":{"sampling":20,"domain_filter":{"sampling":10,"domains":{"myfantasyleague.com":{"sampling":25},"babycenter.com":{"sampling":50},"trulia.com":{"sampling":50},"stockhouse.com":{"sampling":50},"tomshardware.com":{"sampling":50},"okcupid.com":{"sampling":50},"deviantart.com":{"sampling":25},"facebook.com":{"sampling":5},"iminent.com":{"sampling":1},"yontoo.com":{"sampling":5},"ad.doubleclick.net":{"sampling":1},"optimized-by.rubiconproject.com":{"sampling":1}}}}}



oz_sensor(true);
