export const POST = async ({ locals }) => {
  await locals.session.destroy();
  return new Response('Logout successful', { status: 200 });
};
