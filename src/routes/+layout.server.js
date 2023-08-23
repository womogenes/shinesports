export const load = ({ locals }) => {
  return { user: locals.session.data.user };
};
