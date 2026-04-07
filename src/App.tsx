import './App.css';
import Title from './Title.tsx';
import { UserCard } from './UserCard';
import type { User } from './User.ts';
function App() {
  const u1: User = {
    name: 'Gertruda Nováková',
    age: 18,
    email: 'gertruda@example.com',
    isStudent: true,
    address: 'Jecna 30',
    hobbies: ['programování', 'programování'],
  };

  const u2: User = {
    name: 'Teodor Velký',
    age: 34,
    email: 'teodor@example.com',
    address: 'Praha 2',
    hobbies: ['programování', 'programování'],
  };

  return (
    <>
      <div>
        <Title text="Nadpis 1" color="red" />
        <Title text="Nadpis 2" color="green" />
        <Title text="Nadpis 3" color="blue" />
      </div>
      <div>
        <UserCard user={u1} />
        <UserCard user={u2} />
      </div>
    </>
  );
}

export default App;
