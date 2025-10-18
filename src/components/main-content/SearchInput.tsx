import { memo } from "react";
import { CiSearch } from "react-icons/ci";


interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const SearchInput = memo(({ value, onChange }: SearchInputProps) => {
    return (
      <div className=" lg:w-[100%] lg:ml-[6px] lg:h-[60px] md:w-[130px] md:h-[47px] bg-[#FFFFFF] rounded-lg flex justify-between items-center ">
        <label className="flex justify-start">
          <CiSearch className="lg:w-[24px] lg:h-[24px] md:w-[16px] md:h-[16px] mx-[7px] " />
        </label>
        <input
          type="text"
          placeholder="جستجو ..."
          value={value}
          className="border border-none lg:px-3 py-2 lg:w-[200px] md:w-25 text-right lg:ml-[6px] outline-none lg:text-[18px] md:text-[11px]"
          onChange={onChange}
        />
      </div>
    );
  });
  
  export default SearchInput;