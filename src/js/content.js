var makeContent = function(data, num){
	var header = data.title;
	var showCaseFront = data.showCase.frontend;
	var showCaseBack = data.showCase.backend;
	var showCaseDesign = data.showCase.design;
	var techStackFront = data.techStack.frontend;
	var techStackBack = data.techStack.backend;
	var techStackDesign = data.techStack.design;
	var summary = data.content;
	var links = data.links;

	// remember to add color when there are more than 12 projects in portfolio
	var color = num+1;

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
