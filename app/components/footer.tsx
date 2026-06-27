export default function Footer() {


    const footerStyle = "bg-gray-400 border-t border-gray-100 rounded-t-xl text-gray-100 p-4 text-center";
    const schoolNameStyle = "font-bold text-lg";
    const otherTextStyle = "text-sm";


    return (
        <footer className={footerStyle}>
            <p className={schoolNameStyle}>New Generation HighSchool</p>
            <p className={otherTextStyle}>Calgary, Alberta</p>
            <p className={otherTextStyle}>© 2024 New Generation HighSchool Name. All Rights Reserved</p>
        </footer>
    )
}