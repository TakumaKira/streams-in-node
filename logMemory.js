export default function logMemory() {
  console.log(
    Math.round((process.memoryUsage().rss / 1024 / 1024) * 100) / 100 + " MB"
  );
}
