import FormManagerCandidate from '~/components/recruiter/formManagerCandidate';
import Header from '~/components/recruiter/header';
import Sidebar from '~/components/recruiter/sidebar';

function CandidateApply() {
    return (
        <>
            <Header></Header>
            <div className="grid grid-cols-5">
                <Sidebar tab={'apply'} className="col-span-1"></Sidebar>
                <FormManagerCandidate
                    tab={'apply'}
                    title={'Danh sách ứng viên mới ứng tuyển'}
                    className="col-span-4 text-sm border-l"
                ></FormManagerCandidate>
            </div>
        </>
    );
}

export default CandidateApply;
