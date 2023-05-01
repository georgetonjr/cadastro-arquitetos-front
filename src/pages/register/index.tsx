import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [gender, setGender] = useState<string>('male');
  const [age, setAge] = useState<number>(18);

  const loginAction = async (event) => {
    event.preventDefault();
    const req = await axios.post('http://localhost:9000/api/public/v1/register-customer', {
      email,
      name,
      gender,
      age,
      phone,
      password,
    });
    console.log(req)
  }

  return (
    <div className='Form'>
      <div className='Header'>
        <h1>Registro</h1>
      </div>
      <form className='FormInput' >
        <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Nome' />
        <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Email' />
        <input value={phone} onChange={e => setPhone(e.target.value)} type='text' placeholder='phone' />
        <select name="gender" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        <input value={age} onChange={e => setAge(Number(e.target.value))} type='number' placeholder='18' />
        <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
        <button onClick={loginAction}>Cadastre-se</button>
      </form>
    </div>
  );
}