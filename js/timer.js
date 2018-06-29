function Timer(timerContainerId) {
	
	var that = this;	
	this.timeUnitTemplateHtml = '<div class="time-unit"><div class="time-unit-body"><label class="time-number">{0}</label><label class="time-description">{1}</label></div>';	
	this.timerContainerId = timerContainerId;
	this.$timerContainer = $('#' + timerContainerId);
	this.initialTime = new Date(2018,01,01);
	this.start = function() {
		updateTimeDifference();
	}

	function render(timeElapsed) {
		
		that.$timerContainer.html('');
		that.appendTemplate(timeElapsed.days, 'Days');
		that.appendTemplate(timeElapsed.hours, 'Hours');
		that.appendTemplate(timeElapsed.minutes, 'Minutes');
		that.appendTemplate(timeElapsed.seconds, 'Seconds');
	}
	
	this.appendTemplate = function(unitValue, unitDescription) {	
		that.$timerContainer.append(that.timeUnitTemplateHtml.replace('{0}', unitValue).replace('{1}', unitDescription));
	}

	function updateTimeDifference() {
		
		var currentTimeStamp = new Date();
		// time difference in milliseconds
		var timeDifference = currentTimeStamp.getTime() - that.initialTime.getTime(); 
		var seconds = Math.floor(timeDifference / 1000) % 60;
		var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
		var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 60;
		var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		
		var timeElapsed = {
			seconds: seconds,
			minutes: minutes,
			hours: hours,
			days: days
		};
		
		render(timeElapsed);
		setTimeout(updateTimeDifference, 1000);
	}
	
}

