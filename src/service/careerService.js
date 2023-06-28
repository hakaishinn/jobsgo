import request from '~/utils/request';

export const getAllCareer = async (size = 0) => {
    try {
        const res = await request.get('/public/careers', {
            params: {
                size,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
