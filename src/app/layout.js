import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "奈飞同户验证",
  description: "奈飞、奈飞同户验证、奈飞合租、奈飞拼车",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <div className="navbar bg-base-100 bg-red-500 text-white">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl text-white" href="/">奈飞自助平台</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 ">
              <li><a href="https://ok123.shop" target="_blank">合租推荐</a></li>
              <li><a href="https://blob.oknaifei.com/posts/tizi.html" target="_blank">机场推荐</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-red-500 h-64"></div>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 1920 30"  preserveAspectRatio="none">
            <g>
              <path
                d="M0,0C0,0,1920,0,1920,0C1920,0,1920,30,1920,30C1920,30,1496.5,-1.66533e-15,961.5,0C426.5,1.66533e-15,0,30,0,30C0,30,0,0,0,0Z"
                fillRule="evenodd"
                fill="#EF4444"
                fillOpacity="1"
              />
            </g>
        </svg>
        <div className="max-w-screen-sm relative mx-auto">
          <main className="p-4 sm:px-12 w-full absolute " style={{ top: '-280px' }}>
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
