export default function UserData({
  title,
  data,
}: {
  title: string;
  data: string | number | undefined | null;
}) {
  return (
    <div>
      <div className={"text-sm text-neutral-700"}>{title}</div>
      <div className={"text-lg font-semibold"}>{data ? data : "NULL"}</div>
    </div>
  );
}
