import request from '~/utils/request';

export const getAllProSkill = async () => {
    try {
        const res = await request.get('/public/proSkills');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
