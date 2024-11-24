export default function formatDateYYMMDD(date: Date) {
  const year = date.getFullYear().toString().slice(2); // 마지막 두 자리를 가져옵니다.
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월을 2자리로 만듭니다.
  const day = date.getDate().toString().padStart(2, "0"); // 일을 2자리로 만듭니다.
  return `${year}.${month}.${day}`;
}
