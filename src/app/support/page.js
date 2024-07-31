
export default function Support() {

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-3xl font-bold my-4 text-white">同户验证 - 如何发送邮件</div>

      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">情况一</h2>
          <h2 className="card-title text-sm">点击《正在旅行》 或 《暂时观看》</h2>
          <div className="flex w-full flex-col border-opacity-50">
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
            <div className="divider">OR</div>
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">情况二</h2>
          <h2 className="card-title text-sm">点击更新同户装置</h2>
          <div className="flex w-full flex-col border-opacity-50">
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
            <div className="divider">OR</div>
            <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">已成功发送验证码</h2>
          <a href="/" className="btn btn-block btn-error text-white my-5">返回首页接受邮箱结果</a>
        </div>
      </div>


    </div>
  );
}
