export async function onRequestPost(context: { request: Request }) {
  const data = await context.request.json();
  const { email } = data;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return new Response(JSON.stringify({ ok: false, error: "Please enter a valid email." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  


  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
