export const dynamic = 'force-dynamic';
import ServerComponent from "./ServerComponent";

export default async function Page() {
    return <>{await ServerComponent()}</>;
}