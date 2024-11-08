export default function getMemberName({
  name,
  firstName,
  lastName,
}: {
  name: string | undefined | null;
  firstName: string | undefined | null;
  lastName: string | undefined | null;
}) {
  if (name || firstName || lastName) {
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return name;
    }
  } else {
    return "Loading...";
  }
}
