interface IClaim {
  location: string,
  text: string,
  zeroZeroSubClaims?: Claim[],
  zeroSubClaims?: Claim[],
  subClaims?: Claim[],
  footnote?: string
}

export class Claim implements IClaim {
  public location: string;
  public text: string;
  public zeroZeroSubClaims?: Claim[];
  public zeroSubClaims?: Claim[];
  public subClaims?: Claim[];
  public footnote?: string;

  constructor({ location, text, zeroZeroSubClaims, zeroSubClaims, subClaims, footnote }: IClaim) {
    this.location = location
    this.text = text
    if (zeroZeroSubClaims) this.zeroZeroSubClaims = zeroZeroSubClaims
    if (zeroSubClaims) this.zeroSubClaims = zeroSubClaims
    if (subClaims) this.subClaims = subClaims
    if (footnote) this.footnote = footnote
  }
}
