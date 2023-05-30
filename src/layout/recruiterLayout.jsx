import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function RecruiterLayout({ children, tab }) {
    return (
        <>
            <Header />
            <div className="grid grid-cols-5">
                <Sidebar tab={tab} className="col-span-1"></Sidebar>
                <div className="col-span-4 text-sm border-l">{children}</div>
            </div>
        </>
    );
}

export default RecruiterLayout;
