const NotFound = () => {
    return (
        <div className="container bg-white flex flex-wrap justify-center p-16 mx-auto">
            <div className="text-center">
                <img className="h-96 " src="/static/images/notfound.svg" alt="" />
                <p className="font-bold text-emerald-400">Hmm.. halaman yang kamu cari ga <br /> ketemu, yuk balik ke tempat sebelumnya</p>
                <button className="p-2 border-2 mt-2 border-emerald-300 rounded-lg w-36" onClick={() => window.location.href = "/"}>Kembali</button>
            </div>
        </div>
    )
}
export default NotFound
