export function toPersianDigits(input) {
  return input.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export function timeToPersianDigits(input) {
  var timeParts = input.split(":");
  return toPersianDigits(timeParts[0]) + ":" + toPersianDigits(timeParts[1]);
}