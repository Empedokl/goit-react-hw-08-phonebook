import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={style.title}>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
        <label className={style.label}>
          Имя
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={style.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={style.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button className={style.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
