var library = (function() {
	var d = new Date();
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			return Math.round(d.getTime() / 1000 - 0.5);
		},
		UnixMillisecond: function(){
			var d = new Date();
			return String(d.getTime());
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						d.now();
					},
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){},
			Name: function(){}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		var d = new Date();
		return{
			Second: function(){
				return String(d.getSeconds());
			},
			DblDigit: function(){
			if (d.getSeconds() < 10) {
								return  '0' + String(d.getSeconds());
						} else {
								return String(d.getSeconds());
						}
			}
		}
	})(),
	Minute: (function(){
		var d = new Date();
		return{
			Minute: function(){
				return String(d.getMinutes());
			},
			DblDigit: function(){
				if (d.getMinutes() < 10) {
								return  '0' + String(d.getMinutes());
						} else {
								return String(d.getMinutes());
						}
			}
		}
	})(),
	Hour: (function(){
		var d = new Date();
		return {
			TwentyFourHour: function() {
				return String(d.getHours());
			},
			TwelveHour: function() {
				return String(d.getHours() %12);
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var hours = d.getHours();
						if (hours <= 12) { 
						return String('AM');
						} else {
							return String('PM');
						}
		
					},
					LowerCase: function(){
						var hours = d.getHours();
						if (hours <= 12) { 
						return String('am');
						} else {
							return String('pm');
						} 
					}
				}
			})()
		}
	})(),
	Week: (function(){
		var d = new Date();
		return {
			DayOfWeek: function(){
				var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				return week[d.getDay()];
			},
			AbrDayOfWeek: function(){
				var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
				return week[d.getDay()];
			},
			FirstTwoOfWeek: function(){
				var week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
				return week[d.getDay()];
			},
			WeekOfYear: function(){
						var weeksOf = [0, 5, 9, 14, 18, 22, 27, 31, 35, 40, 44, 48, 54];
						var mm = d.getMonth();
						var weeks = weeksOf[d.getMonth()];
						var week = Math.floor(d.getDate()/7);
						var weekOfYear = week + weeksOf[mm] + 1;
						return String(weekOfYear);
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				var d = new Date();
				return {
					Numeral: function(){
						return String(d.getDate());
					},
					Ordinal: function(){
						return String(d.getDate() + 'th');
					},
					DateDblDigit: function(){
						if (d.getDate() < 10) {
								return  '0' + String(d.getDate());
						} else {
								return String(d.getDate());
				}
					}
				}
			})(),
			MonthNumber: function(){
				var d = new Date();
				return String(d.getMonth() + 1);
			},
			MonthNumberDblDigit: function(){
				var d = new Date();
				if (d.getMonth() < 10) {
				return  '0' + String(d.getMonth() +1);
				} else {
					return String(d.getMonth() +1);
				}
			},
			AbrOfCurrentMonth: function(){
				var d = new Date();
				var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				return month[d.getMonth()];
			},
			CurrentMonth: function(){
					var d = new Date();
				var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				return month[d.getMonth()];
			}
		}
	})(),
	Year: (function(){
		var d = new Date();
		return {
			DayOfYear: (function(){
				
				return {
					Numeral: function(){
						var day = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
						console.log(day[d.getMonth()]);
						console.log(d.getDate());
						var finalDayCount = day[d.getMonth()] + d.getDate() + 1;
						return String(finalDayCount);
					},
					Ordinal: function(){
						var day = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
						console.log(day[d.getMonth()]);
						console.log(d.getDate());
						var finalDayCount = day[d.getMonth()] + d.getDate() + 1;
						return String(finalDayCount) + 'th';
					}
				}
			})(),
			YearFull: function(){
				var d = new Date();
				var full = d.getFullYear();
				return String(full);
			},
			YearAbr: function(){
				var yearAbr = parseInt(new Date().getFullYear().toString().substr(2,2))
				return String(yearAbr)
			}
		}
	})(),
	Defaults: function(){}
  }
})();

