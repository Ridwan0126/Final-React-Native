import React from 'react';
import {Password, Profile, Shoping, LogOut} from '../../assets';

export const dummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <Profile />,
    halaman: 'EditProfile',
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <Password />,
    halaman: 'ChangePassword',
  },
  {
    id: 3,
    nama: 'History Pemesanan',
    gambar: <Shoping />,
    halaman: 'History',
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <LogOut />,
    halaman: 'Login',
  },
];
