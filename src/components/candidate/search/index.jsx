import { SearchOutlined } from '@mui/icons-material';

function Search({ className }) {
    const classes = className ? className : '';
    return (
        <div className={classes}>
            <div className="bg-white shadow-ssm rounded-full flex justify-center items-center">
                <input
                    className="p-1 pl-4 outline-0 w-[50%] rounded-full"
                    type="text"
                    placeholder="Việc làm, công ty, ngành nghề"
                ></input>
                <div className="border h-[40px]"></div>
                <div className="w-[50%] flex">
                    <input className="p-1 pl-4 outline-0 flex-[1]" type="text" placeholder="Địa điểm"></input>
                    <button className="font-bold px-4 py-2 bg-[#1167ad] text-white uppercase rounded-full m-1">
                        <SearchOutlined />
                        Tìm việc
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
