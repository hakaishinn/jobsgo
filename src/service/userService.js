import request from '~/utils/request';

export const getUserById = async (id) => {
    try {
        const res = await request.get(`/public/user/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
