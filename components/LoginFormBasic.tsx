import React from 'react'

export default function LoginFormBasic() {
    function sendLoginData(){
        console.log("login data send ");
    }
  return (
    <div className='mx-auto  flex justify-center'>
        <div className='' >
        <div className='text-center text-[#455273] font-khand  text-[64px] font-semibold'>Create account</div>
      <form className='   flex-column ' action={sendLoginData}>
        
      
      <input type="text" name="firstName" id="firstName"  className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]" placeholder="Enter your first name  " ></input>

      <input type="text" name="lastName" id="lastName"  className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]" placeholder="Enter your last name  " ></input>

      <input type="text" name="email" id="email"  className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]" placeholder="Enter your email " ></input>

      <input type="password" name="password" id="password"  className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]" placeholder="Create password  " ></input>

      <input type="password" name="cPassword" id="cPassword"  className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 rounded-[12px]" placeholder="Confirm password  " ></input>
      

      <button type="submit" className='flex text-center p-1 justify-center w-full bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono'>CREATE ACCOUNT </button>
    </form>
        </div>
    </div>
  )
}
