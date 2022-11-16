// Enter Supabase Information
const SUPABASE_URL = 'https://giwptggnnkyngbvntavn.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpd3B0Z2dubmt5bmdidm50YXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDg1MDUsImV4cCI6MTk4MzY4NDUwNX0.IpqZ1fOasMiRTSsQIkHj5BOCwSYQSi4zxsS9Hhx76x0';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function checkAuth() {
    const user = await getUser();
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./other-page');
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}
