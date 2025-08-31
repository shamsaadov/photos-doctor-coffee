import { glob } from "glob";
import sharp from "sharp";

const inputDir = "./images"; // папка с фото
const quality = 80; // качество webp

// ищем все jpg/jpeg/png
const files = await glob(`${inputDir}/**/*.{jpg,jpeg,png}`);

for (const file of files) {
    const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    try {
        await sharp(file).webp({ quality }).toFile(outputFile);
        console.log(`✅ Сконвертирован: ${file} → ${outputFile}`);
    } catch (err) {
        console.error(`❌ Ошибка при обработке ${file}:`, err);
    }
}
