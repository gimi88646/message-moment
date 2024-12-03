import QRCode from "react-qr-code";

function QRCodeGenerator({ generatedLink, classes }) {
  return (
    <div className={`${classes}`}>
      <QRCode
        className="bg-white rounded-[14px] p-5 mx-auto w-[260px] h-[260px]"
        value={generatedLink}
      />
    </div>
  );
}

export default QRCodeGenerator;
