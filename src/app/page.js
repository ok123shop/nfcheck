"use client"

import Image from "next/image";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState('正在获取中...');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // 简单的邮箱格式验证正则表达式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsButtonDisabled(!emailRegex.test(email));
  }, [email]);

  



  return (
    <div></div>
  );
}
