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
