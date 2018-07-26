(function () {
	var datepicker = {};

	datepicker.getMonthData = function (year, month) { //获取本月的数据
		var ret = [];
		if(!year || !month) {
			var today = new Date(); //当前时间
			year = today.getFullYear(); //当前时间-年
			month = today.getMonth() + 1; //当前时间-月
		}

		var firstDay = new Date(year, month - 1, 1); //本月的第一天
		var firstDayWeekDay = firstDay.getDay(); //本月的第一天是周几
		if(firstDayWeekDay === 0) firstDayWeekDay = 7;

		year = firstDay.getFullYear(); //本月时间-当前年
		month = firstDay.getMonth() + 1; //本月时间-当前月


		var lastDayOfLastMonth = new Date(year, month -1, 0);//本月的上一个月的最后一天
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();//本月的上一个月的最后一天的天数

		var preMonthDayCount = firstDayWeekDay - 1;//上个月显示几天

		var lastDay = new Date(year, month, 0); //本月的最后一天
		var lastDate = lastDay.getDate(); //本月的最后一天的天数

		for(var i = 0; i < 7 * 6; i++) {
			var date = i + 1 - preMonthDayCount;
			var showDate = date;
			var thisMonth = month;
				//上一月
			if(date <= 0) {
				thisMonth = month - 1;
				showDate = lastDateOfLastMonth + date;
			}else if(date > lastDate) {
				//下一个月
				thisMonth = month + 1;
				showDate = showDate -lastDate;
			}

			if(thisMonth === 0) thisMonth = 12;
			if(thisMonth === 13) thisMonth = 1;

			ret.push({
				month: thisMonth,
				date: date,//真实日期
				showDate: showDate
			});
		}
		return {
			year: year,
			month: month,
			days: ret
		};
	};

	window.datepicker = datepicker;
})();


















