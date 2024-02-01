'use client';

export default function ErrorOMG({ error }: { error: Error }) {
  return <h1>{error.message}</h1>;
}