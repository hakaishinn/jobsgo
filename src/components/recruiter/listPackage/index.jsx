import { useEffect, useState } from 'react';
import * as packageService from '~/service/packageService';
import * as usedPackageService from '~/service/usedPackageService';
import { Button } from '@mui/material';
import BtnCreateJob from '../btnCreateJob';
import CreateInvoice from '../vnPay/createInvoice';

function ListPackage() {
    const [listPackage, setListPackage] = useState([]);
    const [packageCurrent, setPackageCurrent] = useState();
    const [showCreateInvoice, setShowCreateInvoice] = useState(false);

    const handlePay = async (packageItem) => {
        const res = await usedPackageService.checkUsedPackage();
        if (res?.success) {
            let confirmResult = window.confirm('Bạn muốn hủy gói hiện tại để mua gói mới?');
            if (confirmResult) {
                await usedPackageService.cancelAllPackageByRecruiterId();
                setPackageCurrent(packageItem);
                setShowCreateInvoice(true);
            }
        } else if (res?.success === false) {
            await usedPackageService.cancelAllPackageByRecruiterId();
            setPackageCurrent(packageItem);
            setShowCreateInvoice(true);
        }
    };

    useEffect(() => {
        const getData = async () => {
            const res = await packageService.getAllPackage();
            if (res?.success) {
                setListPackage(res.data.map((item) => ({ ...item, total: item.price, quantity: 1 })));
            }
        };
        getData();
    }, []);
    return (
        <div>
            <BtnCreateJob />
            <div className="px-4">
                <table className="w-full text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên gói</th>
                            <th>Mô tả</th>
                            <th>Thời hạn</th>
                            <th>Đơn giá (VNĐ)</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền (VNĐ)</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listPackage?.map((packageItem) => (
                            <tr key={packageItem.id}>
                                <td>{packageItem.id}</td>
                                <td>{packageItem.name}</td>
                                <td>{packageItem.description}</td>
                                <td>{packageItem.duration}</td>
                                <td>{packageItem.price}</td>
                                <td>
                                    <input
                                        value={packageItem?.quantity}
                                        type="number"
                                        className="outline-none border rounded-sm p-1"
                                        onChange={(e) => {
                                            if (e.target.value >= 0) {
                                                setListPackage(
                                                    listPackage.map((item) => {
                                                        if (item.id === packageItem.id) {
                                                            return {
                                                                ...item,
                                                                total: item.price * e.target.value,
                                                                quantity: e.target.value,
                                                            };
                                                        } else {
                                                            return item;
                                                        }
                                                    }),
                                                );
                                            }
                                        }}
                                    />
                                </td>
                                <td>{packageItem.total}</td>
                                <td>
                                    <Button variant="contained" size="small" onClick={() => handlePay(packageItem)}>
                                        Mua
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showCreateInvoice && (
                <CreateInvoice packageItem={packageCurrent} setShowCreateInvoice={setShowCreateInvoice} />
            )}
        </div>
    );
}

export default ListPackage;
