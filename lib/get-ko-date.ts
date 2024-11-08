export default function getKoDate(date: Date) {
  const targetDate = new Date(date); // 현재 날짜와 시간

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).format(targetDate);
}
