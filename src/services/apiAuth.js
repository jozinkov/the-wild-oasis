import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
}

export async function updateUser({ fullName, avatar, password }) {
  let updateDetails;
  if (password) updateDetails = { password };
  if (fullName) updateDetails = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateDetails);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const imageName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: errorUpload } = await supabase.storage
    .from("avatars")
    .upload(imageName, avatar);

  if (errorUpload) throw new Error(errorUpload.message);

  const { data: dataWithAvatar, error: errorAvatar } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`,
      },
    });

  if (errorAvatar) throw new Error(errorAvatar.message);
  return dataWithAvatar;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
