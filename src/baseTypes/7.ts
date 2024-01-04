/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfTheWeek {
	monday = "monday",
	tuesday = "tuesday",
	wednesday = "wednesday",
	thursday = "thursday",
	friday = "friday",
	saturday = "saturday",
	sunday = "sunday",
}

function isWeekend(day: DayOfTheWeek): boolean {
	return day === "saturday" || day === "sunday";
}

const day = isWeekend(DayOfTheWeek.monday);
const result = day ? "It's a day off" : "It's a working day";
