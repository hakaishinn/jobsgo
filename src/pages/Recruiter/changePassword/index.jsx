import ChangePassword from '~/components/recruiter/changePassword';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function ChangePasswordPage() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar className="col-span-1"></Sidebar>
                <ChangePassword title={'Đổi mật khẩu'} className="col-span-4 border-l"></ChangePassword>
            </div>
        </>
    );
}

export default ChangePasswordPage;
