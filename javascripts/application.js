var StyleSwitcher = {
	setupDefaultStyle : function() {
		if(!Cookie.get('style')){Cookie.set('style', 's656A80');}
	},
	
	attachStyleControls : function() {
		$$('#style_switcher a').each(function(link){
			link.addEvent('click', function(){Cookie.set('style', link.id); StyleSwitcher.switchStyles();});
		});
	},
	
	switchStyles : function() {
		$$('body').each(function(body){
			body.removeProperty('class');
			body.addClass(Cookie.get('style'));
		});
	},
	
	setupFAQs : function() {
		var accordion = new Accordion('h3.question', 'div.answer', {
			opacity: false,
			onActive: function(toggler, element){
				toggler.addClass('active_faq');
			},
			onBackground: function(toggler, element){
				toggler.removeClass('active_faq');
			}			
		}, $('faqs'));
	}
};

window.addEvent('domready', StyleSwitcher.setupDefaultStyle);
window.addEvent('domready', StyleSwitcher.attachStyleControls);
window.addEvent('domready', StyleSwitcher.switchStyles);
window.addEvent('domready', StyleSwitcher.setupFAQs);