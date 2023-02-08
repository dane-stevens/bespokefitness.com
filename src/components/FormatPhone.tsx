var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const phoneNumber = import.meta.env.PUBLIC_PHONE_NUMBER;
export function FormatPhone() {
  return (
    <>{(phoneNumber + "").substring(1).replace(phoneRegex, "($1) $2-$3")}</>
  );
}
