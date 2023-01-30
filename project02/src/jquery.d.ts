declare function $(param: () => void): void





interface Res {
  html: (param: string) => void
}

declare function $(param: string): Res
