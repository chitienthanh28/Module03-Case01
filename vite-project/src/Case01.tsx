import React, { useState, ChangeEvent, FormEvent } from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigator = useNavigate();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra định dạng dữ liệu và xử lý validation
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert('Đăng ký thành công!');
    console.log('Danh sách khách hàng:', formData);

    //Khi submit thành công thì auto chuyển trang
    navigator("/posts");

    // Reset form và errors sau khi đăng ký thành công
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    setErrors({});
  };

  const validateFormData = (data: FormData): Errors => {
  
    const errors: Errors = {};

    // Kiểm tra FirstName
    if (!data.firstName || !/^[a-z0-9_-]{1,15}$/.test(data.firstName)) {
      errors.firstName = "FisrtName không hợp lệ";
    }

    // Kiểm tra LastName
    if (!data.lastName || !/^[a-z0-9_-]{1,15}$/.test(data.lastName)) {
      errors.lastName = "LastName không hợp lệ";
    }

    // Kiểm tra email
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Email không hợp lệ";
    }

    // Kiểm tra Password
    if (!data.password || !/^[a-z0-9_-]{1,15}$/.test(data.password)) {
      errors.password = "LastName không hợp lệ";
    }

    return errors;
  };

  return (
    <>
      <h2>Apply as a Employee</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
    </>
  )
}

export default RegistrationForm
