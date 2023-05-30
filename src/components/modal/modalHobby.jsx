import SaveIcon from '@mui/icons-material/Save';
function ModalHobby({ setShowModalHobby }) {
    return (
        <div
            className="bg-black/40 fixed top-0 right-0 left-0 bottom-0 flex justify-center items-start z-10"
            onClick={() => setShowModalHobby(false)}
        >
            <div className="p-4 mt-8 bg-white rounded-lg min-w-[50%]" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-bold uppercase my-4">Sở thích</h2>
                <div className="border px-4 py-6">
                    <div>
                        <p className="text-sky-600 mb-2">
                            Sở thích <span className="text-red-600">*</span>
                        </p>
                        <textarea className="outline-none border p-2 min-h-[100px] w-full"></textarea>
                    </div>
                </div>

                <button className="flex justify-center items-center px-4 py-2 bg-sky-600 text-white my-4 rounded-lg">
                    <SaveIcon />
                    Lưu lại
                </button>
            </div>
        </div>
    );
}

export default ModalHobby;
