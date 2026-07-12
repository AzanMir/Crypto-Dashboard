import CryptoList from "./components/cryptolist";

async function getCryptoData() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      next: { revalidate: 60 },
    }
  );

  return res.json();
}

export default async function Home() {
  const cryptoData = await getCryptoData();

  return <CryptoList data={cryptoData} />;
}