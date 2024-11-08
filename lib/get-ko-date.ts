export default function getKoDate(date: Date | null | undefined) {
  if (date) {
    const targetDate = new Date(date); // 현재 날짜와 시간

    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }).format(targetDate);
  } else {
    return "날짜 정보가 없습니다.";
  }
}
