import FormManagerJob from '~/components/recruiter/formManagerJob';
import RecruiterLayout from '~/layout/recruiterLayout';

function JobDenied() {
    return (
        <RecruiterLayout tab={'denied'}>
            <FormManagerJob tab={'denied'} title={'Việc làm bị từ chối'}></FormManagerJob>
        </RecruiterLayout>
    );
}

export default JobDenied;
