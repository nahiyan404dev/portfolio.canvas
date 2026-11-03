export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <p className="mb-2 text-sm uppercase tracking-widest text-neutral-500">About</p>
      <h2 className="mb-10 text-4xl font-bold">Hi there!</h2>
      <div className="grid items-center gap-10 md:grid-cols-[220px_1fr]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/me.jpg"
          alt="Profile"
          className="h-56 w-56 rounded-2xl border border-white/10 object-cover"
        />
        <div className="space-y-4 text-neutral-400">
          <p>I build web apps, APIs and anything else that looks shiny at 2AM.</p>
          <p>Final year Computer Engineering student, currently doing internships and side projects.</p>
          <p>I like building things, breaking them, and fixing them again.</p>
        </div>
      </div>
    </section>
  );
}