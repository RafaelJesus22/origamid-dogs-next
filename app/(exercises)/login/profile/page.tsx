import { getProfile } from "../actions";

export default async function Page() {
  const profile = await getProfile();

  console.log(profile);

  return (
    <main className="px-4">
      {profile.error ? <pre>{profile.error}</pre> : <h1>{profile.usuario}</h1>}
    </main>
  );
}
