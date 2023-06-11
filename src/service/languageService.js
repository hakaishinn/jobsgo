import request from '~/utils/request';

export const getAllLanguage = async () => {
    try {
        const res = await request.get('/public/languages');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
