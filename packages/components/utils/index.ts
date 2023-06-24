export function pxToPt(px: number): number {
  return px * 3 / 4
}

export function renderWhiteSpace(str: string, maxLength: number) {
  if (str.length >= maxLength)
    return

  const whiteSpaceCodes = '\xA0\u200C\u200B\u200D\u200E\u200F\uFEFF'
  return whiteSpaceCodes.repeat(maxLength - str.length)
}
