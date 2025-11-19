export default function getBaseUrl() {
  return import.meta.env.PROD
    ? import.meta.env.BASE_URL
    : "http://localhost:3000";
}
