type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}
type NewUser = Partial<Record<keyof User, string>>
function createOrUpdateUser(initialValues: NewUser) {
    // Оновлення користувача
}

createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123'
});
