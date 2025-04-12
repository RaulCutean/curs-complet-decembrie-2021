export function generateUsers() {
  const users = [];

  for (let i = 1; i <= 100; i++) {
    users.push({ name: `User ${i}`, id: i, count: 0 });
  }

  return users;
}
