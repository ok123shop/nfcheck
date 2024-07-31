"use client"

import Image from "next/image";
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [linkResult, setLinkResult] = useState(false);
  const [msg, setMsg] = useState('正在获取中...');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // 简单的邮箱格式验证正则表达式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsButtonDisabled(!emailRegex.test(email));
  }, [email]);


  const openModalHandler = async () => {
    if (!modalRef.current) {
      return;
    }
    setSuccess(false)
    setLoading(true);
    modalRef.current.showModal();
    try {
      const response = await fetch('https://api.gg-ai.vip/users/open/xianyu/helper/check?email=' + email);
      // const response = await fetch('http://localhost:8782/users/open/xianyu/helper/check?email=' + email);
      if (!response.ok) {
        setMsg("网络异常")
        return;
      }
      const data = await response.json();
      data.success = true;
      data.data = {url: 'https://baidu.com'}
      if(!data.success){
        setMsg(data.msg)
        return;
      }
      setMsg("获取成功，请点击下方按钮跳转至《奈飞》官网查看")
      setSuccess(true)
      setLinkResult(data.data.url)


    } catch (error) {
      setMsg(error.toString())
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex flex-col items-center ">
      <div className="text-3xl font-bold my-4 text-white">同户验证</div>

      <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>
            获取验证结果前，请<span className="text-xl text-red-500 px-2">务必</span>保证已经<span className="text-xl px-2 text-red-500">发送邮件</span>，如果不会，可查看
            <a className="link link-primary" href="/support">《教程》</a>
          </span>
      </div>

      <div className="card bg-base-100 w-full shadow-xl mt-4">
        <div className="card-body">
          <h2 className="card-title">验证结果获取</h2>
          <p>请确保您当前网络可以访问奈飞官网</p>
          <div className="text-red-400">需要开启魔法、需要开启魔法、需要开启魔法</div>

          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="请输入《奈飞》的登陆邮箱" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </label>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" disabled={isButtonDisabled} onClick={openModalHandler}>获取验证结果</button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        <div className="modal-box">
          <div className="flex items-center gap-3">
            <div className="font-bold text-xl flex-1">正在获取结果</div>
            <div className="badge badge-warning badge-lg text-white">通常需要20 - 80秒</div>
          </div>
          
          <p className="py-4 text-gray-500">获取到结果后，将会自动为您跳转至《奈飞》官网查看，请务必保证您当前网络可以正常访问《奈飞官网》</p>

          
            <div className=" text-center ">
            { loading ? 
              (<span className="loading loading-infinity loading-lg text-error "></span>) 
              : 
              (<p target="_blank" className={`py-4 text-xl font font-bold ${success ? 'text-green-500' : 'text-red-500'}`}>{msg}</p>)
            }
          </div>
          


          <div className="modal-action">
            <form method="dialog">
              {
                success ? 
                (<a href={linkResult} className="btn btn-success text-white" >前往奈飞查看验证结果</a>)
                :
                (<button className="btn">放弃获取</button>) 
              }
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
