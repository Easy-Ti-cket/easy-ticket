import imagemin from "imagemin";
import imageminSvgo from "imagemin-svgo";
import path from "path";
import glob from "glob";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 포스터 폴더 설정
const postersFolder = path.join(
  __dirname,
  "public",
  "assets",
  "images",
  "posters"
);

const compressImages = async () => {
  try {
    // posters 폴더 내의 SVG 파일 찾기
    const files = glob.sync(`${postersFolder}/**/*.svg`);

    if (files.length === 0) {
      return;
    }

    await Promise.all(
      files.map(async (file) => {
        const outputPath = file; // 압축된 파일을 원본 파일 위치에 저장

        try {
          const [fileData] = await imagemin([file], {
            destination: path.dirname(outputPath),
            plugins: [
              imageminSvgo({
                // SVG 파일 최적화
                plugins: [
                  { name: "removeViewBox", active: false },
                  { name: "removeDimensions", active: true }
                ]
              })
            ]
          });
        } catch (err) {
          // console.error(`Error optimizing file ${file}:`, err);
        }
      })
    );
  } catch (err) {
    console.error("Error during compression:", err);
  }
};

compressImages();
