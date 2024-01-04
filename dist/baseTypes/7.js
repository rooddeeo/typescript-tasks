/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek["monday"] = "monday";
    DayOfTheWeek["tuesday"] = "tuesday";
    DayOfTheWeek["wednesday"] = "wednesday";
    DayOfTheWeek["thursday"] = "thursday";
    DayOfTheWeek["friday"] = "friday";
    DayOfTheWeek["saturday"] = "saturday";
    DayOfTheWeek["sunday"] = "sunday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
function isWeekend(day) {
    return day === "saturday" || day === "sunday";
}
const day = isWeekend(DayOfTheWeek.monday);
const result = day ? "It's a day off" : "It's a working day";
//# sourceMappingURL=7.js.map