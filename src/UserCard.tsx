import type { User } from './User.ts';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, marginBottom: 12 }}>
      <h2>{user.name}</h2>
      <p>Věk: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Adress: {user.address}</p>
      {user.hobbies && user.hobbies.length > 0 && (
        <p>Zájmy: {user.hobbies.join(', ')}</p>
      )}
      <p>
        Student:{' '}
        {user.isStudent === undefined
          ? 'neuvedeno'
          : user.isStudent
            ? 'ano'
            : 'ne'}
      </p>

      <p>Ahoj</p>
    </div>
  );
}
