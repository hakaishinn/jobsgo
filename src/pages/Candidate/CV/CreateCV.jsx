import FormCV from '~/components/candidate/cv/formCV';
import Footer from '~/components/candidate/footer';
import Header from '~/components/candidate/header';

function CreateCV() {
    return (
        <>
            <Header></Header>
            <FormCV tab={'create'}></FormCV>
            <Footer></Footer>
        </>
    );
}

export default CreateCV;
