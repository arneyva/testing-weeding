export const dynamic = 'force-dynamic';
import ServerComponent from "./ComponentServer";

export default async function Page() {
  return <>{await ServerComponent()}</>;
}