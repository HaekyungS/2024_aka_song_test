import html2canvas from "html2canvas";

export const screenDownload = () => {
  const target = document.getElementById("download");
  if (!target) {
    return alert("사진 저장에 실패했습니다.");
  }
  html2canvas(target).then((canvas) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.href = canvas.toDataURL("image/png");
    link.download = "2024_aka_song_test.png";
    link.click();
    document.body.removeChild(link);
  });
};
