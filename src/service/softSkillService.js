import request from '~/utils/request';

export const getAllSoftSkill = async () => {
    try {
        const res = await request.get('/public/softSkills');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
