import request from '~/utils/request';

const user = JSON.parse(localStorage.getItem('user'));
const config = {
    headers: {
        Authorization: 'Bearer ' + user.accessToken,
    },
};

export const getResumeById = async (id) => {
    try {
        const res = await request.get(`/resumes/${id}`, config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllByCandidateID = async () => {
    try {
        const res = await request.get(`/resumes/candidate/${user.userId}`, config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const create = async (resume) => {
    try {
        const res = await request.post('/resumes', resume, config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const update = async (resume, id) => {
    try {
        const res = await request.put(`/resumes/${id}`, resume, config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteById = async (id) => {
    try {
        const res = await request.delete(`/resumes/${id}`, config);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
