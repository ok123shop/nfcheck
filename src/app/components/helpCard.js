const questionsData = [
  {icon:"https://cdn2.yicanggongyi.com/picture/d6486b7101f0d31753413fea1a6fdda8-1701071127351.png",label:"Netflix"},
  {icon:"https://cdn2.yicanggongyi.com/picture/80b1126906d9d308e8ca7808a0bff56e-1701071208425.png",label:"Disney"},
  {icon:"https://cdn2.yicanggongyi.com/picture/4f2748f84c02b70bc0039a5a71dc4905-1701071271612.png",label:"HBO GO"},
  {icon:"https://cdn2.yicanggongyi.com/picture/274e2a8a7c73277304628380a14eb6ec-1701071254790.png",label:"Prime video"},
  {icon:"https://cdn2.yicanggongyi.com/picture/3a4a5c99ac7347e058a991511194f01e-1701071240584.png",label:"Youtube"},
]

const Button = () => {
  
  return (
    <div className="card bg-base-100 image-full w-full shadow-xl">
        <figure>
          <img
            src="/help.png"
            alt="Shoes" />
        </figure>
       
        <div className="card-body">
          <h2 className="card-title">流媒体常见问题</h2>
          <p>常见错误、软件下载、使用技巧等问题在这里都能快速找到答案</p>

          <div className="flex justify-center items-center content-center gap-4 flex-wrap">
            {
              questionsData.map((item) => {
                return (
                  <div key={item.label} className="avatar cursor-pointer active:scale-95 transition">
                    <div className="w-10 sm:w-20 rounded">
                      <img src={item.icon} className="w-full" />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      
  );
};

export default Button;
