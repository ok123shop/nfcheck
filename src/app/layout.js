import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "奈飞同户验证",
  description: "奈飞、奈飞同户验证、奈飞合租、奈飞拼车",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" data-theme="light">
      
      <body className="bg-white">
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
          <main className="p-4 sm:px-12 w-full " style={{ marginTop: '-280px' }}>
          {children}
          <SpeedInsights />
          </main>
        </div>
        <div className="mt-40">
          <svg class="bg" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" viewBox="0 0 1920 30.000000000000234">
            <g transform="matrix(-1,-1.2246468525851679e-16,1.2246468525851679e-16,-1,3840,60.0000000000007)">
              <path d="M1920,30.000000000000234C1920,30.000000000000234,3840,30.000000000000234,3840,30.000000000000234C3840,30.000000000000234,3840,60.000000000000234,3840,60.000000000000234C3840,60.000000000000234,3416.5,30.000000000000234,2881.5,30.000000000000234C2346.5,30.000000000000234,1920,60.000000000000234,1920,60.000000000000234C1920,60.000000000000234,1920,30.000000000000234,1920,30.000000000000234Z" fill-rule="evenodd" fill="#242e37" fill-opacity="1"/>
            </g>
          </svg>


          <footer className="footer bg-neutral text-neutral-content p-10">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
