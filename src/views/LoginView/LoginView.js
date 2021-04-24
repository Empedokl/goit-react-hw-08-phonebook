import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './LoginView.module.css';
import { FormGroup } from '@material-ui/core';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={style.title}>Страница логина</h1>

      <FormGroup>
        <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
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
            Войти
          </button>
        </form>
      </FormGroup>
    </div>
  );
}
