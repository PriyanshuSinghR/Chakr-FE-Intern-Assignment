
const UserInfo = ()=>{
  return(
   <div className="p-2 flex gap-2 border-2 border-gray-200 rounded-md">
    <img src='/images/ChakrLogo.png' className="h-14 w-14 " alt="user-icon"/>
    <div className="flex flex-col gap-1">
      <h1 className="text-md font-bold">Yuvraj Singh</h1>
      <p className="text-sm text-gray-400">yuvraj01@chakr.com</p>
    </div>

   </div>
  )
}
export default UserInfo;
