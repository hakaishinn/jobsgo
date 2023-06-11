import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '~/App.css';
import Home from '~/pages/Candidate/Home';
import Company from './pages/Candidate/Company';
import SearchJob from './pages/Candidate/SearchJob';
import DetailJobPage from './pages/Candidate/DetailJob';
import Login from './components/auth/login';
import Register from './components/auth/register';
import CompanyDetailPage from './pages/Candidate/CompanyDetail';
import CreateCV from './pages/Candidate/CV/CreateCV';
import JobOpen from './pages/Recruiter/Job/JobOpen';
import JobDetailPage from './pages/Recruiter/Job/JobDetail';
import CandidateSelected from './pages/Recruiter/Candidate/CandidateSelected';
import SearchCandidatePage from './pages/Recruiter/SearchCandidate';
import JobPause from './pages/Recruiter/Job/JobPause';
import JobExpired from './pages/Recruiter/Job/JobExpired';
import JobPending from './pages/Recruiter/Job/JobPending';
import CandidateApply from './pages/Recruiter/Candidate/CandidateApply';
import CandidateConsider from './pages/Recruiter/Candidate/CandidateConsider';
import CandidateDenied from './pages/Recruiter/Candidate/CandidateDenied';
import CandidateFit from './pages/Recruiter/Candidate/CandidateFit';
import CreateJobPage from './pages/Recruiter/Job/CreateJob';
import LoginRecruiter from './components/auth/loginRecruiter';
import RegisterRecruiter from './components/auth/registerRecruiter';
import ViewAllCV from './pages/Candidate/CV/ViewAllCV';
import ViewDetailCVPage from './pages/Candidate/CV/ViewDetailCV';
import UploadCVPage from './pages/Candidate/CV/UpLoadCV';
import InfoPage from './pages/Recruiter/Info';
import ChangePasswordPage from './pages/Recruiter/changePassword';
import UpdateCV from './pages/Candidate/CV/UpdateCV';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/company" element={<Company />}></Route>
                    <Route path="/company/:id" element={<CompanyDetailPage />}></Route>
                    <Route path="/jobs" element={<SearchJob />}></Route>
                    <Route path="/jobs/:id" element={<DetailJobPage />}></Route>
                    <Route path="/cv/create" element={<CreateCV />}></Route>
                    <Route path="/cv/upload" element={<UploadCVPage />}></Route>
                    <Route path="/cv/view" element={<ViewAllCV />}></Route>
                    <Route path="/cv/view/:id" element={<ViewDetailCVPage />}></Route>
                    <Route path="/cv/update/:id" element={<UpdateCV />}></Route>

                    <Route path="/recruiter/login" element={<LoginRecruiter />}></Route>
                    <Route path="/recruiter/register" element={<RegisterRecruiter />}></Route>
                    <Route path="/recruiter/managerJobs/open" element={<JobOpen />}></Route>
                    <Route path="/recruiter/managerJobs/pause" element={<JobPause />}></Route>
                    <Route path="/recruiter/managerJobs/expired" element={<JobExpired />}></Route>
                    <Route path="/recruiter/managerJobs/pending" element={<JobPending />}></Route>
                    <Route path="/recruiter/jobs/:id" element={<JobDetailPage />}></Route>
                    <Route path="/recruiter/managerCandidate/apply" element={<CandidateApply />}></Route>
                    <Route path="/recruiter/managerCandidate/selected" element={<CandidateSelected />}></Route>
                    <Route path="/recruiter/managerCandidate/consider" element={<CandidateConsider />}></Route>
                    <Route path="/recruiter/managerCandidate/denied" element={<CandidateDenied />}></Route>
                    <Route path="/recruiter/search" element={<SearchCandidatePage />}></Route>
                    <Route path="/recruiter/fit" element={<CandidateFit />}></Route>
                    <Route path="/recruiter/jobs/create" element={<CreateJobPage />}></Route>
                    <Route path="/recruiter/info" element={<InfoPage />}></Route>
                    <Route path="/recruiter/changePassword" element={<ChangePasswordPage />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
