import { CameraAlt, SaveOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import * as userService from '~/service/userService';
import AvatarRecruiter from '~/assets/images/recruiter/avatar-recruiter.png';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { v4 } from 'uuid';
import { storage } from '~/firebase';
import { AppContext } from '~/context/AppProvider';

function Info({ className, title }) {
    const { setRecruiter } = useContext(AppContext);

    const [recruiterInfo, setRecruiterInfo] = useState({
        image: null,
        file: null,
        email: '',
        emailCompany: '',
        nameCompany: '',
        shortName: '',
        phone: '',
        specificAddress: '',
        website: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        description: '',
    });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        let flag = true;
        if (!file) {
            flag = false;
            setRecruiterInfo({ ...recruiterInfo, image: null, file: null });
        } else {
            let img = ['png', 'jpg', 'jpeg', 'PNG', 'JPG'];
            if (file.size > 1024 * 1024) {
                flag = false;
                alert('Kích thước file quá lớn');
                return;
            } else if (!img.includes(file.name.split('.').pop())) {
                flag = false;
                setRecruiterInfo({ ...recruiterInfo, image: null, file: null });
                alert('File phải thuộc định dạng png, jpg, jpeg');
                return;
            }
        }
        if (flag) {
            const reader = new FileReader();
            reader.onload = () => {
                setRecruiterInfo({ ...recruiterInfo, image: reader.result, file: file });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = async () => {
        let dataUpdate = { ...recruiterInfo };
        if (recruiterInfo?.file) {
            const imageRef = ref(storage, `images/${recruiterInfo?.file.name + v4()}`);
            const snapshot = await uploadBytes(imageRef, recruiterInfo?.file);
            const url = await getDownloadURL(snapshot.ref);
            dataUpdate = { ...recruiterInfo, image: url };
        }
        const res = await userService.updateRecruiter(dataUpdate);
        if (res?.success) {
            alert('Cập nhật thông tin thành công');
            setRecruiter((prev) => ({ ...prev, image: dataUpdate.image }));
            const recruiterLocalStorage = JSON.parse(localStorage.getItem('user'));
            localStorage.setItem(
                'user',
                JSON.stringify({
                    ...recruiterLocalStorage,
                    image: dataUpdate.image,
                }),
            );
        } else {
            alert('Cập nhật thông tin thất bại');
        }
    };

    useEffect(() => {
        const getData = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            const res = await userService.getUserById(user.userId);
            if (res?.success) {
                setRecruiterInfo({
                    image: res.data.image,
                    email: res.data?.email,
                    emailCompany: res.data?.emailCompany,
                    nameCompany: res.data?.name,
                    shortName: res.data?.shortName,
                    phone: res.data?.phone,
                    specificAddress: res.data?.specificAddress,
                    website: res.data?.website,
                    facebook: res.data?.facebook,
                    twitter: res.data?.twitter,
                    linkedin: res.data?.linkedin,
                    description: res.data?.description,
                });
            }
        };
        getData();
    }, []);
    return (
        <div className={className}>
            <div className="flex justify-center items-center p-4 bg-sky-700">
                <div className="w-[170px] h-[170px] relative group object-contain border rounded-full overflow-hidden">
                    <img src={recruiterInfo?.image || AvatarRecruiter} alt="avatar" />
                    <label
                        className="cursor-pointer absolute bottom-0 left-[50%] translate-x-[-50%] bg-white w-[50px] h-[50px] rounded-full justify-center items-center border hidden group-hover:flex"
                        htmlFor="avatar"
                    >
                        <CameraAlt />
                    </label>
                    <input id="avatar" type="file" className="hidden" onChange={handleImageUpload} />
                </div>
            </div>

            <div className="p-4 border-b">
                <h2 className="font-bold uppercase mb-2">Thông tin cơ bản</h2>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Tên đăng nhập</span>
                    <input
                        type="text"
                        disabled
                        className="col-span-3 outline-none p-2 w-max cursor-not-allowed"
                        value={recruiterInfo?.email}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Email công ty</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.emailCompany}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, emailCompany: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Tên công ty</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.nameCompany}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, nameCompany: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Tên viết tắt</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.shortName}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, shortName: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Số điện thoại</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.phone}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, phone: e.target.value })}
                    />
                </div>
            </div>
            <div className="p-4 border-b">
                <h2 className="font-bold uppercase mb-2">Thông tin thêm</h2>

                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Địa chỉ</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.specificAddress}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, specificAddress: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Website</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.website}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, website: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Facebook</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.facebook}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, facebook: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Twitter</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.twitter}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, twitter: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Linkedin</span>
                    <input
                        type="text"
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 outline-none p-2 w-full"
                        value={recruiterInfo?.linkedin}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, linkedin: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-4 m-auto items-center">
                    <span className="col-span-1">Mô tả</span>
                    <textarea
                        placeholder="(Chưa có dữ liệu)"
                        className="col-span-3 p-2 outline-none border min-h-[100px] w-full"
                        value={recruiterInfo?.description}
                        onChange={(e) => setRecruiterInfo({ ...recruiterInfo, description: e.target.value })}
                    ></textarea>
                </div>
            </div>

            <div className="p-4 mb-8">
                <Button startIcon={<SaveOutlined />} variant="contained" color="success" onClick={handleUpdate}>
                    Lưu
                </Button>
            </div>
        </div>
    );
}

export default Info;
