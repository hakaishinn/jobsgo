import { Create, FileUpload, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function MenuCV({ tab }) {
    const classActive = 'bg-sky-700 text-white';
    return (
        <div className="flex gap-4">
            <Link
                to={'/cv/create'}
                className={`flex items-center px-4 py-1 border border-sky-500 rounded-md uppercase font-semibold hover:bg-sky-700 hover:text-white ${
                    tab === 'create' ? classActive : ''
                }`}
            >
                <Create className="mr-1" fontSize="small" />
                Tạo CV
            </Link>
            <Link
                to={'/cv/upload'}
                className={`flex items-center px-4 py-1 border border-sky-500 rounded-md uppercase font-semibold hover:bg-sky-700 hover:text-white ${
                    tab === 'upload' ? classActive : ''
                }`}
            >
                <FileUpload className="mr-1" fontSize="small" />
                Tải lên CV
            </Link>
            <Link
                to={'/cv/view'}
                className={`flex items-center px-4 py-1 border border-sky-500 rounded-md uppercase font-semibold hover:bg-sky-700 hover:text-white ${
                    tab === 'viewCV' ? classActive : ''
                }`}
            >
                <Visibility className="mr-1" fontSize="small" />
                Xem CV
            </Link>
            {/* <Link
                to={'cv/template'}
                className={`flex items-center px-4 py-1 border border-sky-500 rounded-md uppercase font-semibold hover:bg-sky-700 hover:text-white ${
                    tab === 'templateCV' ? classActive : ''
                }`}
            >
                <List className="mr-1" fontSize="small" />
                Chọn mẫu CV
            </Link> */}
        </div>
    );
}

export default MenuCV;
