import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import path from "path";
import fs from "fs";
import glob from "glob";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// assets/images 폴더 경로 설정
const imagesFolder = path.join(__dirname, "public", "assets", "images");

const compressImages = async () => {
  const files = glob.sync(`${assetsFolder}/**/*.{png,svg}`);

  if (files.length === 0) {
    return;
  }

  await Promise.all(
    files.map(async (file) => {
      const outputPath = file; // 압축된 파일을 원본 파일 위치에 저장

      const [fileData] = await imagemin([file], {
        destination: path.dirname(outputPath),
        plugins: [
          imageminPngquant({ quality: [0.6, 0.8] }), // PNG 파일 압축
          imageminSvgo({
            // SVG 파일 최적화
            plugins: [
              { name: "removeViewBox", active: false },
              { name: "removeDimensions", active: true }
            ]
          })
        ]
      });
      // console.log(`Image optimized: ${fileData.sourcePath}`);
    })
  );
};

compressImages().catch((err) =>
  console.error("Error during compression:", err)
);
