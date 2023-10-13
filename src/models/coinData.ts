class coinData {
  id: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
  marketCapUsd: number;
  symbol: string;
  rank: number;

  constructor(
    coinName: string,
    coinId: string,
    coinPrice: number,
    percent: number,
    marketCap: number,
    symbol: string,
    rank: number
  ) {
    this.id = coinId;
    this.name = coinName;
    this.priceUsd = Number(coinPrice);
    this.changePercent24Hr = Number(percent);
    this.marketCapUsd = Number(marketCap);
    this.symbol = symbol;
    this.rank = Number(rank);
  }
}
export default coinData;
