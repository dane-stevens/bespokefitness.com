import { MdLocationPin, MdPhone } from "react-icons/md";

export default function Icon({ path, className = "" }) {
  if (path === "phone") return <MdPhone className={className} />;
  if (path === "directions") return <MdLocationPin className={className} />;
  return null;
}
