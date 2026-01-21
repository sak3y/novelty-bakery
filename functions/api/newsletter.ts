export async function onRequestPost(context: { request: Request }) {
  const data = await context.request.json();
  const { email } = data;

  // 1) Basic validation
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return new Response(JSON.stringify({ ok: false, error: "Please enter a valid email." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2) TODO: store email or send to newsletter service here
  const emails: string[] = [];

  emails.push(email);

  // 3) Respond to the client
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
