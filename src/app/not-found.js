
import Ok123Card from "./components/ok123Card"
import VpnCard from "./components/vpnCard"
import HelpCard from "./components/helpCard"

export default function NotFoundPage() {

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="text-3xl font-bold my-4 text-white">查无此页？</div>
        <div className="text-1xl  text-gray-100">抱歉，找不到该页面。您会在主页上发现许多值得探索的内容。</div>
        <a className="btn btn-active btn-neutral" href="/">返回首页</a>

        <Ok123Card/>
        <VpnCard/>
        <HelpCard/>
  
      </div>
    );
  }
  