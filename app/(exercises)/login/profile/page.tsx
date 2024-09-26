/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from "react";
import { getProfile } from "../actions";

interface ProfileResponse {
  autorizado: boolean;
  usuario?: string;
  error?: any;
}

export default function Page() {
  const [profile, setProfile] = useState<ProfileResponse>();

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  return (
    <main className="px-4">
      {profile?.error ? (
        <pre>{profile.error}</pre>
      ) : (
        <h1>{profile?.usuario}</h1>
      )}
    </main>
  );
}
