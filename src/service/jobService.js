import request from '~/utils/request';

export const addJob = async (job) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.post('/jobs', job, {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateJob = async (job, id) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.put(`/jobs/${id}`, job, {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const viewJobPending = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.get('/jobs/pending', {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const viewJobOpen = async () => {
    try {
        const res = await request.get('/public/jobs/open');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const viewJobPause = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.get('/jobs/pause', {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const viewJobExpired = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.get('/jobs/expired', {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getJobById = async (id) => {
    try {
        const res = await request.get(`/public/jobs/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const changeStatusPause = async (id) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.put(`/jobs/changeStatusPause/${id}`, null, {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const changeStatusApply = async (id) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.put(`/jobs/changeStatusApply/${id}`, null, {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const viewAllJobApplyByCandidateId = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await request.get(`/jobs/apply/candidate/${user.userId}`, {
            headers: {
                Authorization: 'Bearer ' + user.accessToken,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const search = async (keyword = null, address = null) => {
    try {
        const res = await request.get(`/public/jobs/search`, {
            params: {
                keyword: keyword,
                address: address,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const viewJobByCareerId = async (id) => {
    try {
        const res = await request.get(`/public/jobs/careers/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const viewJobNoExp = async () => {
    try {
        const res = await request.get(`/public/jobs/noExp`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
