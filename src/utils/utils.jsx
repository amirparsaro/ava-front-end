export function toPersianDigits(input) {
  return input.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export function timeToPersianDigits(input) {
  return input.split(":").map(toPersianDigits).join(":");
}

export function dateToPersianDigits(input) {
  if (typeof input !== "string" || input == "") {
    return "";
  }
  return input.split("-").map(toPersianDigits).join("-");
}

export function getFileExtension(filePath) {
  if (typeof filePath !== "string") return null;

  const lastDotIndex = filePath.lastIndexOf(".");
  if (lastDotIndex === -1 || lastDotIndex === filePath.length - 1) {
    return null;
  }

  return filePath.substring(lastDotIndex + 1).toLowerCase();
}

export function timeToSeconds(time) {
  let splitTime = time.split(":");
  let power = 3600;
  let sum = 0;

  for (const part of splitTime) {
    let intPart = parseInt(part, 10);
    sum += intPart * power;
    power /= 60;
  }

  return sum;
}
