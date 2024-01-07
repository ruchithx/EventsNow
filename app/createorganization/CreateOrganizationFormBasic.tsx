
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from '@nextui-org/dropdown';

export default function CreateOrganizationFormBasic() {
    const [fullName,setFullName] = useState('');
    const [number,setnumber]= useState('');
    const [numberType,setNumberType]=useState('');
    const [address,setAddress] = useState('');
    const [phoneNumber,setPhoneNumber]=useState();
    const [email,setEmail] =useState('');
async function sendOrganizationData(){

}

  return (
    <div className="  2xl:px-40 px-4 sm:px-20 justify-center">
      <div className="w-full px-10 lg:mx-0 lg:px-0 mt-8 mb-16 leading-none	 text-center text-[#455273] font-khand text-[40px] sm:text-[64px] font-semibold mx-2">
        Create organization account
      </div>
      <form
          className=" flex-column "
          action={sendOrganizationData}
          onSubmit={() => sendOrganizationData}
        >
          <input
            required
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-[#455273] focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
            placeholder="Enter your full name  "
          ></input>
          <div className='flex gap-2'>
          <Dropdown>
      <DropdownTrigger>
        <button className="  h-8 text-center justify-center  bg-transparent   px-4 text-[#455273]  sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
          
        >
          
      {numberType.length > 0 ? (
        <span>{numberType} :-</span>
      ) : (
        <span>Type</span>
      )} 
    
        </button>
      </DropdownTrigger>
      <DropdownMenu className='sm:ml-16 pl-4 pr-2 rounded-[12px] bg-[#D7CFC7]/90 text-[#455273]' aria-label="select identity number type"
      onAction={(key) => setNumberType(String(key))}>
        <DropdownItem  key="NIC ">NIC number </DropdownItem>
        <DropdownItem key="Driving licence">Driving licence number </DropdownItem>
        <DropdownItem key="Passport">Passport number</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
    <input
            required
            type="text"
            name="fullName"
            id="fullName"
            value={number}
            disabled = {numberType.length==0}
            onChange={(e) => setnumber(e.target.value)}
            className="  w-full  block flex-1  bg-transparenttext-gray-900 placeholder:text-[#455273] focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
            placeholder={numberType.length > 0 ? ` Enter  ${numberType} number`: (
                'Select the identify card type that you have'
              )}
          ></input>

          </div>
          <input
            required
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-[#455273] focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
            placeholder="Address  "
          ></input>
<PhoneInput
className="  w-full h-8 block flex-1  bg-transparenttext-gray-900 placeholder:text-[#455273] focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={setPhoneNumber}
      defaultCountry="LK"/>

      
<input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" my-5 w-full h-8 block flex-1  bg-transparent py-1.5 text-gray-900 placeholder:text-[#455273] focus:outline-custom-orange sm:text-sm sm:leading-6 border-2 rounded-[12px] pl-4"
            placeholder="Enter email address "
          ></input>



<button
          type="submit"
          className="flex text-center mt-10 mb-10 xl:mb-20 py-2 px-4 justify-center bg-custom-orange text-white font-semibold rounded-lg  text-base font-mono "
        >
          SEND TO APPROVAL
        </button>
          </form>
      
    </div>
  )
}
