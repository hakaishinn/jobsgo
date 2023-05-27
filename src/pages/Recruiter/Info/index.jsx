import Header from '~/components/recruiter/header';
import Info from '~/components/recruiter/info';
import Sidebar from '~/components/recruiter/sidebar';

function InfoPage() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'search'} className="col-span-1"></Sidebar>
                <Info title={'Thông tin công ty'} className="col-span-4 text-sm border-l"></Info>
            </div>
        </>
    );
}

export default InfoPage;
