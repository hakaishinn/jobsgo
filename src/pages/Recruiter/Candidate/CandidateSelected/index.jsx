import FormManagerCandidate from '~/components/recruiter/formManagerCandidate';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function CandidateSelected() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'selected'} className="col-span-1"></Sidebar>
                <FormManagerCandidate
                    tab={'selected'}
                    title={'Danh sách ứng viên đã được chọn'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerCandidate>
            </div>
        </>
    );
}

export default CandidateSelected;
