var makeContent = function(data, num){
	var title = data.title;
	var header = data.title;

	var showCase = data.showCase;
	var showCaseFront = data.showCase.frontend;
	var showCaseBack = data.showCase.backend;
	var showCaseDesign = data.showCase.design;

	var techStack = data.techStack;
	var techStackFront = data.techStack.frontend;
	var techStackBack = data.techStack.backend;
	var techStackDesign = data.techStack.design;

	var summary = data.content;
	var links = data.links;

	// remember to add color when there are more than 12 projects in portfolio
	var color = num+1;

	// content
	var contentHTML = $('#js-content-template').html()
		.replace('@color', 'color-' + color)
		.replace('@title', title);
	
	// summary
	var summaryHTML = $('#js-summary-template').html()
		.replace('@summary', summary);
	
	// links
	var linksHTML = links.map(function(linkObject) {
			return $('#js-links-template').html()
				.replace(/@link/g, linkObject.link)
				.replace(/@type/g, linkObject.type)
		}).join('');

	// showCases list
	var showCaseListHTML = function() {
		var typeList = [];
		for (techType in showCase) {
			var techList = showCase[techType].map(function(tech) {
				return $('#js-showcase-li-template').html()
					.replace(/@showcase-tech-type/g, techType)
					.replace(/@showcase-tech-skill/g, tech)
			});
			typeList.push(techList.join(''));
		}

		return typeList.join('');
	};	

	// put showCases list into ul tag
	var showCaseUlHTML = $("#js-showcase-ul-template").html()
		.replace('@showcase-li', showCaseListHTML());

	// techStack list
	var techStackListHTML = function() {
		var typeList = [];
		for (techType in techStack) {
			if (techStack[techType].length > 0) {
				var techList = techStack[techType].reduce(function(tech, tech2) {
					return tech + '|' + tech2;
				});
				techList.slice(0, -1);

				typeList.push(
					$('#js-techstack-li-template').html()
						.replace(/@tech-type/g, techType)
						.replace(/@tech-skill/g, techList)
				);
			}
		};
		return typeList.join('');
	};	

	// put techStack list in ul tag
	var techStackUlHTML = $("#js-techstack-ul-template").html()
		.replace('@techstack-li', techStackListHTML());

	// join everything together into one html content
	contentHTML = contentHTML
		.replace('@summary', summaryHTML)
		.replace('@links', linksHTML)
		.replace('@showcase', showCaseUlHTML)
		.replace('@techstack', techStackUlHTML);

	return contentHTML;





	var htmlElement = '<li class="color-'+ color +' row text-block">' + 
						'<p class="reset-p">' +
							'<span class="light">&lt;section class="</span>' + 
							'<span class="heavy">project</span>' +
							'<span class="light">"&gt;</span>'+
						'</p>';
	
	// add title
	htmlElement += '<p class="reset-p ml-1">' +
 						'<span class="light">&lt;header&gt;</span>' +
						'<span class="highlight-text ml-1">' + header + '</span>' +
						'<span class="light">&lt;/header&gt;</span>' +
					'</p>' +
					'<p class="reset-p ml-1">' +
						'<span class="light">&lt;ul class="</span><span class="heavy">highlighting</span><span class="light">"&gt;</span>' +
					'</p>';

	// add highlights for showCaseFront
	if (showCaseFront.length > 0) {
		console.log(showCaseFront);
		htmlElement += '<p class="reset-p ml-2">';
		for (var i=0; i<showCaseFront.length; i++) {
			htmlElement += '<span class="light">&lt;li class="<b>front-end</b>"&gt;</span>' +
							'<span class="highlight-text inline">' + showCaseFront[i] + '</span>' +
							'<span class="light">&lt;/li&gt;</span><br>';
		}
		htmlElement += '</p>';
	}

	// add highlights for showCaseBack
	if (showCaseBack.length > 0) {
		htmlElement += '<p class="reset-p ml-2">';
		for (var i=0; i<showCaseBack.length; i++) {
			htmlElement += '<span class="light">&lt;li class="<b>back-end</b>"&gt;</span>' +
							'<span class="highlight-text inline">' + showCaseBack[i] + '</span>' +
							'<span class="light">&lt;/li&gt;</span><br>';
		}
		htmlElement += '</p>';
	}

	// add highlights for showCaseDesign
	if (showCaseDesign.length > 0) {
		htmlElement += '<p class="reset-p ml-2">';
		for (var i=0; i<showCaseDesign.length; i++) {
			htmlElement += '<span class="light">&lt;li class="<b>design</b>"&gt;</span>' +
							'<span class="highlight-text inline">' + showCaseDesign[i] + '</span>' +
							'<span class="light">&lt;/li&gt;</span><br>';
		}
		htmlElement += '</p>';
	}

	htmlElement += '<p class="reset-p light ml-1">&lt;/ul&gt;</p>';

	// add the whole stack
	htmlElement += '<p class="reset-p ml-1">' +
					'<span class="light">&lt;ul class="</span><span class="heavy">thisProjectUses</span><span class="light">"&gt;</span>' +
					'</p>';

	// add theWholeStack for techStackFront
	if (techStackFront.length > 0) {
		htmlElement += '<p class="reset-p ml-2">' +
						'<span class="light">&lt;li class="<b>front-end</b>"&gt;</span>' +
						'<span class="highlight-text ml-1">';
		for (var i=0; i<techStackFront.length; i++) {
			htmlElement += techStackFront[i] + '|';
		}
		htmlElement = htmlElement.slice(0, -1);
		htmlElement += '</span><span class="light">&lt;/li&gt;</span>' +
						'</p>';
	}

	// add theWholeStack for techStackBack
	if (techStackBack.length > 0) {
		htmlElement += '<p class="reset-p ml-2">' +
						'<span class="light">&lt;li class="<b>back-end</b>"&gt;</span>' +
						'<span class="highlight-text ml-1">';
		for (var i=0; i<techStackBack.length; i++) {
			htmlElement += techStackBack[i] + '|';
		}
		htmlElement = htmlElement.slice(0, -1);
		htmlElement += '</span><span class="light">&lt;/li&gt;</span>' +
						'</p>';
	}

	// add theWholeStack for techStackDesign
	if (techStackDesign.length > 0) {
		htmlElement += '<p class="reset-p ml-2">' +
						'<span class="light">&lt;li class="<b>design</b>"&gt;</span>' +
						'<span class="highlight-text ml-1">';
		for (var i=0; i<techStackDesign.length; i++) {
			htmlElement += techStackDesign[i] + '|';
		}
		htmlElement = htmlElement.slice(0, -1);
		htmlElement += '</span><span class="light">&lt;/li&gt;</span>' +
						'</p>';
	}

	htmlElement += '<p class="reset-p light ml-1">&lt;/ul&gt;</p>';

	// add summary
	htmlElement += '<p class="reset-p light ml-1">&lt;summary&gt;</p>' +
					'<p class="reset-p ml-2 highlight-text text-block-description">' +
					summary + '</p>';
	htmlElement += '<p class="reset-p light ml-1">&lt;/summary&gt;</p><br>';

	// add links
	htmlElement += '<p class="reset-p ml-1">';
	for (var i=0; i<links.length; i++) {
		htmlElement += '<span class="light">&lt;a href="</span><a href="">' +
						links[i].link +
						'</a><span class="light">"&gt;<b>this is a link to a ' +
						links[i].type +
						'</b>&lt;/a&gt;</span><br>';
	}

	htmlElement += '</p><p class="reset-p light">&lt;/section&gt;</p></li>';
	return htmlElement;
};
