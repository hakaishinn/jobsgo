import request from '~/utils/request';

export const getAllCareer = async () => {
    try {
        const res = await request.get('/public/careers');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
