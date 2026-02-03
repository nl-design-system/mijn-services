import { redirect } from 'next/navigation';

export default async function HomePage() {
  redirect('/templates/mijn-omgeving-home');
}
